import type { ReactElement, ReactNode } from 'react';
import { BackgroundGrid } from '@/src/components/effects';
import { Navigation } from '@/src/components/layout';
import { cn } from '@/src/lib/utils';

// import { AnimationProvider } from '@/src/providers';

interface SiteLayoutProps {
	children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps): ReactElement => {
	return (
		<>
			<BackgroundGrid />
			<Navigation />
			<main className={cn('relative min-h-screen', '')}>{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default SiteLayout;
