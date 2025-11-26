'use client';

import { type ReactElement, type ReactNode, useEffect, useRef } from 'react';
import { floatIn } from '@/src/lib/animations';
import { cn } from '@/src/lib/utils';

interface PageShellProps {
	children: ReactNode;
	className?: string;
	stagger?: boolean; // Stagger the animation of direct children
}

/**
 * Page content wrapper that handles enter animations.
 *
 * Wrap your page content in this component to get smooth
 * entrance animations when navigating between pages.
 *
 * @example
 * ```tsx
 * <PageShell>
 *   <h1>Page Title</h1>
 *   <p>Content...</p>
 * </PageShell>
 * ```
 */
export const PageShell = ({ children, className, stagger = true }: PageShellProps): ReactElement => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		const container = containerRef.current;

		if (stagger) {
			// Animate direct children with stagger
			const animatableChildren = container.querySelectorAll(':scope > *');

			// Make sure all elements are HTMLElement
			const animatableChildrenArray = [...animatableChildren].filter(
				(element): element is HTMLElement => element instanceof HTMLElement,
			);

			floatIn(animatableChildrenArray);
		} else {
			// Animate the container itself
			floatIn(container);
		}
	}, [stagger]);

	return (
		<div
			ref={containerRef}
			className={cn(
				'min-h-[calc(100vh-4rem)]', // Account for nav height
				'pt-24 pb-16 px-6', // Padding for nav and content spacing
				className,
			)}
		>
			{children}
		</div>
	);
};
