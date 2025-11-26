'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactElement } from 'react';
import { cn } from '@/src/lib/utils';

interface NavLink {
	href: string;
	label: string;
}

const navLinks: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/rankings', label: 'Rankings' },
	{ href: '/tournaments', label: 'Tournaments' },
	{ href: '/leaderboard', label: 'Leaderboard' },
	{ href: '/news', label: 'News' },
];

/**
 * Main navigation component.
 *
 * Persists across page transitions and highlights the current route.
 */
export const Navigation = (): ReactElement => {
	const pathname = usePathname();

	const isActive = (href: string): boolean => {
		if (href === '/') {
			return pathname === '/';
		}

		return pathname.startsWith(href);
	};

	return (
		<nav className="top-0 right-0 left-0 z-50 fixed bg-background/80 backdrop-blur-md border-border border-b">
			<div className="mx-auto px-6 max-w-7xl">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="group flex items-center gap-3">
						<span className="font-bold text-foreground group-hover:text-accent text-xl tracking-tight transition-colors">
							Philly Melee
						</span>
					</Link>

					{/* Nav Links */}
					<div className="flex items-center gap-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
									isActive(link.href)
										? 'bg-accent/10 text-accent'
										: 'text-foreground-muted hover:text-foreground hover:bg-surface-elevated',
								)}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Login */}
					<Link
						href="/login"
						className="bg-accent hover:bg-accent/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors text-accent-foreground"
					>
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
};
