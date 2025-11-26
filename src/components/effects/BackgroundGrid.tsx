'use client';

import type { ReactElement } from 'react';

/**
 * Animated background grid effect.
 *
 * Creates a subtle grid pattern that adds depth to the background.
 * Uses CSS only for performance.
 */
export const BackgroundGrid = (): ReactElement => {
	return (
		<div className="-z-10 fixed inset-0 pointer-events-none" aria-hidden="true">
			{/* Base gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface/50" />

			{/* Grid pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `
						linear-gradient(to right, currentColor 1px, transparent 1px),
						linear-gradient(to bottom, currentColor 1px, transparent 1px)
					`,
					backgroundSize: '64px 64px',
				}}
			/>

			{/* Radial gradient overlay for depth */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
		</div>
	);
};
