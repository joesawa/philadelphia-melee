'use client';

import { type AnimationParams, animate, type JSAnimation } from 'animejs';
import { useCallback, useRef } from 'react';

interface UseAnimationReturn {
	/** Reference to attach to the animated element. */
	ref: React.RefObject<HTMLElement | null>;
	/** Manually trigger the animation. */
	animate: (params: AnimationParams) => JSAnimation | null;
	/** Stop any running animation. */
	stop: () => void;
}

/**
 * Hook for managing anime.js animations on a single element.
 *
 * @returns Animation controls and ref.
 *
 * @example
 * ```tsx
 * const { ref, animate } = useAnimation();
 *
 * const handleClick = () => {
 *   animate({
 *     scale: [1, 1.1, 1],
 *     duration: 300,
 *   });
 * };
 *
 * return <div ref={ref} onClick={handleClick}>Animate me</div>;
 * ```
 */
export const useAnimation = (): UseAnimationReturn => {
	const ref = useRef<HTMLElement | null>(null);
	const animationRef = useRef<JSAnimation | null>(null);

	const stop = useCallback(() => {
		if (animationRef.current) {
			animationRef.current.pause();
			animationRef.current = null;
		}
	}, []);

	const animateElement = useCallback(
		(params: AnimationParams): JSAnimation | null => {
			if (!ref.current) {
				return null;
			}

			stop();

			animationRef.current = animate(ref.current, params);

			return animationRef.current;
		},
		[stop],
	);

	return {
		ref,
		animate: animateElement,
		stop,
	};
};
