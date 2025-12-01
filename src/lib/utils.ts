/**
 * Combines class names, filtering out falsy values.
 *
 * @param classes - Class names to combine.
 * @returns Combined class string.
 */
export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
	return classes.filter(Boolean).join(' ');
};

/**
 * Delays execution for a specified duration.
 *
 * @param ms - Milliseconds to wait.
 * @returns Promise that resolves after the delay.
 */
export const delay = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The value to clamp.
 * @param min - Minimum allowed value.
 * @param max - Maximum allowed value.
 * @returns The clamped value.
 */
export const clamp = (value: number, min: number, max: number): number => {
	return Math.min(Math.max(value, min), max);
};

/**
 * Generates a random number between min and max (inclusive).
 *
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @returns Random number in range.
 */
export const randomBetween = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};
