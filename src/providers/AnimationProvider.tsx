'use client';

import { createContext, type ReactElement, type ReactNode, useContext, useMemo } from 'react';

interface AnimationContextValue {
	/** Whether animations are enabled (respects prefers-reduced-motion). */
	enabled: boolean;
	/** Default animation duration in ms. */
	duration: number;
}

const AnimationContext = createContext<AnimationContextValue | null>(null);

interface AnimationProviderProps {
	children: ReactNode;
}

/**
 * Provides animation configuration and preferences.
 *
 * Automatically respects the user's prefers-reduced-motion setting.
 */
export const AnimationProvider = ({ children }: AnimationProviderProps): ReactElement => {
	const value = useMemo((): AnimationContextValue => {
		// Check for reduced motion preference (SSR-safe)
		const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		return {
			enabled: !prefersReducedMotion,
			duration: prefersReducedMotion ? 0 : 500,
		};
	}, []);

	return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};

/**
 * Hook to access animation context.
 *
 * @returns Animation configuration.
 */
export const useAnimationContext = (): AnimationContextValue => {
	const context = useContext(AnimationContext);

	if (!context) {
		throw new Error('useAnimationContext must be used within AnimationProvider');
	}

	return context;
};
