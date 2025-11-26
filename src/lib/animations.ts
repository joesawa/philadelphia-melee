/**
 * Reusable anime.js v4 animation configurations.
 *
 * @module lib/animations
 */

import { type AnimationParams, animate, type JSAnimation, stagger } from 'animejs';

/**
 * Standard easing curves for consistent motion.
 */
export const easings = {
	out: 'outExpo', // Smooth deceleration - Entrances
	in: 'inExpo', // Smooth acceleration - Exits
	inOut: 'inOutExpo', // Smooth acceleration and deceleration
	gentle: 'outQuad', // Gentle ease for subtle movements
} as const;

/**
 * Standard durations in milliseconds.
 */
export const durations = {
	instant: 150,
	fast: 300,
	normal: 500,
	slow: 800,
	dramatic: 1200,
} as const;

type AnimationTargets = string | HTMLElement | HTMLElement[];

/**
 * Animates elements floating in from below with stagger.
 *
 * @param targets - CSS selector or element array.
 * @param options - Optional overrides.
 * @returns The anime.js animation instance.
 */
export const floatIn = (targets: AnimationTargets, options: Partial<AnimationParams> = {}): JSAnimation => {
	return animate(targets, {
		translateY: [24, 0],
		opacity: [0, 1],
		duration: durations.normal,
		ease: easings.out,
		delay: stagger(80),
		...options,
	});
};

/**
 * Animates elements floating out upward.
 *
 * @param targets - CSS selector or element array.
 * @param options - Optional overrides.
 * @returns The anime.js animation instance.
 */
export const floatOut = (targets: AnimationTargets, options: Partial<AnimationParams> = {}): JSAnimation => {
	return animate(targets, {
		translateY: [0, -16],
		opacity: [1, 0],
		duration: durations.fast,
		ease: easings.in,
		...options,
	});
};

/**
 * Subtle fade in with optional scale.
 *
 * @param targets - CSS selector or element array.
 * @param options - Optional overrides.
 * @returns The anime.js animation instance.
 */
export const fadeIn = (targets: AnimationTargets, options: Partial<AnimationParams> = {}): JSAnimation => {
	return animate(targets, {
		opacity: [0, 1],
		scale: [0.98, 1],
		duration: durations.normal,
		ease: easings.out,
		...options,
	});
};

/**
 * Fade out with optional scale.
 *
 * @param targets - CSS selector or element array.
 * @param options - Optional overrides.
 * @returns The anime.js animation instance.
 */
export const fadeOut = (targets: AnimationTargets, options: Partial<AnimationParams> = {}): JSAnimation => {
	return animate(targets, {
		opacity: [1, 0],
		scale: [1, 0.98],
		duration: durations.fast,
		ease: easings.in,
		...options,
	});
};

/**
 * Staggered reveal for lists of items.
 *
 * @param targets - CSS selector or element array.
 * @param options - Optional overrides.
 * @returns The anime.js animation instance.
 */
export const staggerReveal = (targets: AnimationTargets, options: Partial<AnimationParams> = {}): JSAnimation => {
	return animate(targets, {
		translateY: [32, 0],
		opacity: [0, 1],
		duration: durations.slow,
		ease: easings.out,
		delay: stagger(100, { start: 100 }),
		...options,
	});
};

/**
 * Slide in from left.
 *
 * @param targets - CSS selector or element array.
 * @param options - Optional overrides.
 * @returns The anime.js animation instance.
 */
export const slideInLeft = (targets: AnimationTargets, options: Partial<AnimationParams> = {}): JSAnimation => {
	return animate(targets, {
		translateX: [-40, 0],
		opacity: [0, 1],
		duration: durations.normal,
		ease: easings.out,
		...options,
	});
};

/**
 * Slide in from right.
 *
 * @param targets - CSS selector or element array.
 * @param options - Optional overrides.
 * @returns The anime.js animation instance.
 */
export const slideInRight = (targets: AnimationTargets, options: Partial<AnimationParams> = {}): JSAnimation => {
	return animate(targets, {
		translateX: [40, 0],
		opacity: [0, 1],
		duration: durations.normal,
		ease: easings.out,
		...options,
	});
};
