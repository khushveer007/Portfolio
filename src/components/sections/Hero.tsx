'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Hero() {
    const shouldReduceMotion = useReducedMotion();

    // If reduced motion is preferred, ensure content is visible immediately without animation delays.
    // Actually, standard pattern is usually just overriding the variant or the animate prop.
    // The dev notes say: animate={shouldReduceMotion ? { opacity: 1, y: 0 } : "animate"}
    // Let's stick to using the `staggerContainer` for the wrapper and `fadeInUp` for children,
    // but if reduced motion, we might want to override.
    // However, AC 11 says "Hero component uses semantic HTML with proper heading hierarchy".
    // AC 11: "Reduced motion preference disables staggered animations (content appears immediately)"
    // Dev notes: animate={shouldReduceMotion ? { opacity: 1, y: 0 } : "animate"}

    // For the staggered container, if reduced motion is on, we might just want to show everything.
    // Using the dev note suggestion:

    return (
        <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 flex flex-col justify-center min-h-[60vh]">
            <motion.div
                variants={staggerContainer}
                initial={shouldReduceMotion ? "animate" : "initial"}
                animate="animate"
                className="space-y-4 md:space-y-6 text-center md:text-left"
            >
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]"
                >
                    Khushveer Singh
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl font-medium text-[var(--color-accent)]"
                >
                    Full-Stack Web Developer
                </motion.p>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg text-[var(--color-text-secondary)] max-w-2xl"
                >
                    I build accessible, pixel-perfect, and performant web experiences.
                </motion.p>
            </motion.div>
        </section>
    );
}
