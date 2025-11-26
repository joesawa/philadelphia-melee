import type { ReactElement } from 'react';
import { PageShell } from '@/src/components/layout';
import { Card, CardContent } from '@/src/components/ui';

/**
 * About / Community Information page.
 */
const AboutPage = (): ReactElement => {
	return (
		<PageShell className="mx-auto max-w-4xl">
			<h1 className="mb-6 font-bold text-foreground text-4xl md:text-5xl">About Philly Melee</h1>

			<p className="mb-12 text-foreground-muted text-xl">Philadelphia's hub for competitive Super Smash Bros. Melee since 2001.</p>

			<div className="space-y-8">
				<Card>
					<CardContent>
						<h2 className="mb-4 font-bold text-foreground text-2xl">Our Community</h2>
						<p className="text-foreground-muted">
							We're a welcoming community of players ranging from beginners to top-level competitors. Whether you're looking
							to enter your first tournament or grind to the top of the PR, there's a place for you here.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardContent>
						<h2 className="mb-4 font-bold text-foreground text-2xl">Weekly Events</h2>
						<p className="text-foreground-muted">
							We host regular tournaments and casual sessions throughout the week. Check our Discord for the latest schedule
							and venue information.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardContent>
						<h2 className="mb-4 font-bold text-foreground text-2xl">Get Involved</h2>
						<p className="text-foreground-muted">
							Join our Discord server to connect with the community, find practice partners, and stay updated on upcoming
							events.
						</p>
					</CardContent>
				</Card>
			</div>
		</PageShell>
	);
};

export default AboutPage;
