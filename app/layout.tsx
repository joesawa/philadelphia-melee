import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import type { ReactElement, ReactNode } from 'react';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Philadelphia Melee',
		template: '%s | Philadelphia Melee',
	},
	description: 'The home of competitive Super Smash Bros. Melee in Philadelphia.',
	keywords: ['melee', 'smash bros', 'philadelphia', 'esports', 'gaming', 'tournaments'],
};

interface RootLayoutProps {
	children: ReactNode;
}

/**
 * Root layout.
 *
 * Provides:
 * - Font loading (Geist Sans & Mono)
 * - Global metadata
 * - Base HTML structure
 */
const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
	return (
		<html lang="en" className="dark">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
};

export default RootLayout;
