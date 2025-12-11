import { fadeInUp, staggerContainer, scaleOnHover, fadeIn, ANIMATION } from './motion';
import { describe, it, expect } from 'vitest';
import { TargetAndTransition, VariantLabels } from 'framer-motion';

describe('motion variants', () => {
    describe('ANIMATION constants', () => {
        it('should have correct duration values', () => {
            expect(ANIMATION.DURATION).toHaveProperty('FAST', 0.2);
            expect(ANIMATION.DURATION).toHaveProperty('DEFAULT', 0.5);
        });

        it('should have correct easing values', () => {
            expect(ANIMATION.EASE).toHaveProperty('OUT', 'easeOut');
        });

        it('should have correct scale values', () => {
            expect(ANIMATION.SCALE).toHaveProperty('HOVER', 1.02);
        });

        it('should have correct stagger values', () => {
            expect(ANIMATION.STAGGER).toHaveProperty('DEFAULT', 0.1);
        });
    });

    describe('fadeInUp', () => {
        it('should define initial state', () => {
            expect(fadeInUp.initial).toHaveProperty('opacity', 0);
            expect(fadeInUp.initial).toHaveProperty('y', 20);
        });

        it('should define animate state', () => {
            expect(fadeInUp.animate).toHaveProperty('opacity', 1);
            expect(fadeInUp.animate).toHaveProperty('y', 0);
        });

        it('should use defined transition constants', () => {
            const animate = fadeInUp.animate as TargetAndTransition;
            expect(animate.transition).toMatchObject({
                duration: ANIMATION.DURATION.DEFAULT,
                ease: ANIMATION.EASE.OUT
            });
        });
    });

    describe('staggerContainer', () => {
        it('should define staggerChildren transition', () => {
            const animate = staggerContainer.animate as TargetAndTransition;
            expect(animate.transition).toHaveProperty('staggerChildren', ANIMATION.STAGGER.DEFAULT);
        });
    });

    describe('scaleOnHover', () => {
        it('should define input interaction', () => {
            expect(scaleOnHover).toHaveProperty('whileHover.scale', ANIMATION.SCALE.HOVER);
        });

        it('should use fast duration', () => {
            const whileHover = scaleOnHover.whileHover as TargetAndTransition;
            expect(whileHover.transition).toHaveProperty('duration', ANIMATION.DURATION.FAST);
        });
    });

    describe('fadeIn', () => {
        it('should define initial state', () => {
            expect(fadeIn.initial).toHaveProperty('opacity', 0);
        });

        it('should define animate state', () => {
            expect(fadeIn.animate).toHaveProperty('opacity', 1);
        });

        it('should use default duration', () => {
            const animate = fadeIn.animate as TargetAndTransition;
            expect(animate.transition).toMatchObject({
                duration: ANIMATION.DURATION.DEFAULT
            });
        });
    });
});
