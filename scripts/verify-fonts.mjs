import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const layoutPath = path.join(__dirname, '../src/app/layout.tsx');
const globalsPath = path.join(__dirname, '../src/app/globals.css');

let hasErrors = false;

function checkFileContains(filePath, searchStrings) {
    if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`);
        hasErrors = true;
        return;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    searchStrings.forEach(str => {
        if (!content.includes(str)) {
            console.error(`❌ Missing "${str}" in ${path.basename(filePath)}`);
            hasErrors = true;
        } else {
            console.log(`✅ Found "${str}" in ${path.basename(filePath)}`);
        }
    });
}

console.log("Verifying Story 1.2 Implementation...");

// Check layout.tsx
checkFileContains(layoutPath, [
    'Inter',
    'JetBrains_Mono',
    '--font-body',
    // '--font-heading' moved to globals.css
    '--font-mono',
    'max-w-[1200px]',
    'mx-auto'
]);

// Check globals.css
checkFileContains(globalsPath, [
    '--color-background',
    '--color-surface',
    '@theme',
    '--font-heading', // Added check here
    '--radius-sm: var(--radius-sm)',
    '--radius-lg: var(--radius-lg)',
    '--shadow-sm: var(--shadow-sm)',
    '--shadow-lg: var(--shadow-lg)',
    '--spacing-2: var(--spacing-2)',
    '--spacing-12: var(--spacing-12)',
    '--text-sm: 0.875rem'
]);

if (hasErrors) {
    console.log("\n❌ Verification Failed: Some requirements are missing.");
    process.exit(1);
} else {
    console.log("\n✅ Verification Passed: Low-level checks passed.");
    process.exit(0);
}
