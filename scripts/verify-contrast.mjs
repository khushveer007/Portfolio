import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const globalsPath = path.join(__dirname, '../src/app/globals.css');

// Simple color parser (hex only for now as per our palette)
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function luminance(r, g, b) {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
    const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

function parseCssVariables(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const rootBlock = content.match(/:root\s*{([^}]*)}/s);
    if (!rootBlock) return {};

    const variables = {};
    const lines = rootBlock[1].split('\n');
    lines.forEach(line => {
        const match = line.match(/^\s*--([\w-]+):\s*(#[a-fA-F0-9]+)/);
        if (match) {
            variables[match[1]] = match[2];
        }
    });
    return variables;
}

console.log("Verifying Color Contrast (WCAG AA)...");

const vars = parseCssVariables(globalsPath);
const background = vars['color-background']; // #FAFAFA
const surface = vars['color-surface'];       // #FFFFFF
const textPrimary = vars['color-text-primary']; // #1A1A1A
const textSecondary = vars['color-text-secondary']; // #6B7280
const accent = vars['color-accent']; // #3B82F6

if (!background || !textPrimary) {
    console.error("❌ Could not find required color variables for contrast check.");
    process.exit(1);
}

const combinations = [
    { name: 'Primary Text on Background', fg: textPrimary, bg: background, min: 4.5 },
    { name: 'Secondary Text on Background', fg: textSecondary, bg: background, min: 4.5 },
    { name: 'Accent on Background', fg: accent, bg: background, min: 3 }, // Large text usually, or graphics
    { name: 'Primary Text on Surface', fg: textPrimary, bg: surface, min: 4.5 },
];

let hasFailures = false;

combinations.forEach(combo => {
    const fgRgb = hexToRgb(combo.fg);
    const bgRgb = hexToRgb(combo.bg);

    if (!fgRgb || !bgRgb) {
        console.log(`⚠️ Skipping ${combo.name}: Invalid hex codes (${combo.fg}, ${combo.bg})`);
        return;
    }

    const ratio = contrast(fgRgb, bgRgb);
    const pass = ratio >= combo.min;

    console.log(`${pass ? '✅' : '❌'} ${combo.name}: ${ratio.toFixed(2)}:1 (Min: ${combo.min}:1) [${combo.fg} on ${combo.bg}]`);

    if (!pass) hasFailures = true;
});

if (hasFailures) {
    console.log("\n❌ Contrast Verification Failed");
    process.exit(1);
} else {
    console.log("\n✅ Contrast Verification Passed");
    process.exit(0);
}
