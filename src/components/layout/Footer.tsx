import Link from 'next/link';
import type { ReactElement } from 'react';

/**
 * Site footer component.
 */
export const Footer = (): ReactElement => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-surface/50 backdrop-blur-sm border-border border-t">
			<div className="mx-auto px-6 py-12 max-w-7xl">
				<div className="gap-8 grid grid-cols-1 md:grid-cols-3">
					{/* Brand */}
					<div className="space-y-4">
						<h3 className="font-bold text-foreground text-lg">Philly Melee</h3>
						<p className="max-w-xs text-foreground-muted text-sm">
							Philadelphia's home for competitive Super Smash Bros. Melee.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<Link href="/rankings" className="text-foreground-muted hover:text-foreground text-sm transition-colors">
									Power Rankings
								</Link>
							</li>
							<li>
								<Link href="/leaderboard" className="text-foreground-muted hover:text-foreground text-sm transition-colors">
									Slippi Leaderboard
								</Link>
							</li>
							<li>
								<Link href="/news" className="text-foreground-muted hover:text-foreground text-sm transition-colors">
									News & Articles
								</Link>
							</li>
						</ul>
					</div>

					{/* Community */}
					<div className="space-y-4">
						<h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Community</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="https://discord.gg/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground-muted hover:text-foreground text-sm transition-colors"
								>
									Discord
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground-muted hover:text-foreground text-sm transition-colors"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="https://twitch.tv/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground-muted hover:text-foreground text-sm transition-colors"
								>
									Twitch
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 pt-8 border-border border-t">
					<p className="text-foreground-muted text-sm text-center">
						© {currentYear} Philadelphia Melee. Not affiliated with Nintendo.
					</p>
				</div>
			</div>
		</footer>
	);
};
