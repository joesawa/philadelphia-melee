import type { ReactElement, ReactNode } from 'react';
import { BackgroundGrid } from '@/src/components/effects';
import { Footer, Navigation } from '@/src/components/layout';
import { AnimationProvider } from '@/src/providers';

interface SiteLayoutProps {
	children: ReactNode;
}

/**
 * Site layout wrapper.
 *
 * This layout persists across all site pages, providing:
 * - Persistent navigation
 * - Background effects
 * - Animation context
 * - Footer
 *
 * Navigation and background stay mounted during page transitions,
 * creating the smooth "elements floating in/out" experience.
 */
const SiteLayout = ({ children }: SiteLayoutProps): ReactElement => {
	return (
		<AnimationProvider>
			{/* Background effects - always visible */}
			<BackgroundGrid />

			{/* Persistent navigation */}
			<Navigation />

			{/* Page content - this is what changes on navigation */}
			<main className="relative min-h-screen">{children}</main>

			{/* Footer */}
			<Footer />
		</AnimationProvider>
	);
};

export default SiteLayout;
