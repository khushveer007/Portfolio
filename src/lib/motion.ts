import { Variants } from 'framer-motion';

/**
 * Animation Configuration Constants
 * Centralized values for consistency across the application.
 */
export const ANIMATION = {
    DURATION: {
        FAST: 0.2,
        DEFAULT: 0.5,
    },
    EASE: {
        OUT: 'easeOut',
    },
    SCALE: {
        HOVER: 1.02,
    },
    STAGGER: {
        DEFAULT: 0.1,
    }
} as const;

/**
 * Fade In Up Variant
 * Used for entering elements that slide up and fade in.
 * @example
 * <motion.div
 *   variants={fadeInUp}
 *   initial="initial"
 *   whileInView="animate"
 *   viewport={{ once: true }}
 * >
 *   Content
 * </motion.div>
 */
export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: ANIMATION.DURATION.DEFAULT, ease: ANIMATION.EASE.OUT }
    },
};

/**
 * Stagger Container Variant
 * Used on parent elements to stagger the animation of children.
 * @example
 * <motion.div variants={staggerContainer} initial="initial" animate="animate">
 *   <motion.div variants={fadeInUp} />
 *   <motion.div variants={fadeInUp} />
 * </motion.div>
 */
export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: ANIMATION.STAGGER.DEFAULT,
        },
    },
};

/**
 * Scale On Hover Variant
 * Used for interactive elements like cards or buttons.
 * @example
 * <motion.div variants={scaleOnHover} whileHover="whileHover">
 *   Hover me
 * </motion.div>
 */
export const scaleOnHover: Variants = {
    whileHover: {
        scale: ANIMATION.SCALE.HOVER,
        transition: { duration: ANIMATION.DURATION.FAST }
    },
};

/**
 * Fade In Variant
 * Simple fade in opacity change.
 * @example
 * <motion.div variants={fadeIn} initial="initial" animate="animate">
 *   Content
 * </motion.div>
 */
export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: ANIMATION.DURATION.DEFAULT, ease: ANIMATION.EASE.OUT }
    },
};
