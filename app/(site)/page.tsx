import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageShell } from '@/src/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui';

/**
 * Homepage.
 *
 * Features hero section, quick links to key pages, and featured content.
 */
const HomePage = (): ReactElement => {
	return (
		<PageShell className="mx-auto max-w-6xl">
			{/* Hero Section */}
			<section className="mb-20 text-center">
				<h1 className="mb-6 font-bold text-foreground text-5xl md:text-7xl tracking-tight">
					Philadelphia
					<span className="block text-accent">Melee</span>
				</h1>
				<p className="mx-auto mb-8 max-w-2xl text-foreground-muted text-xl">
					The home of competitive Super Smash Bros. Melee in Philadelphia. Rankings, tournaments, and community.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Button href="/rankings" size="lg">
						View Rankings
					</Button>
					<Button href="/about" variant="secondary" size="lg">
						Learn More
					</Button>
				</div>
			</section>

			{/* Quick Links Grid */}
			<section className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20">
				<Card hover>
					<CardHeader>
						<CardTitle>🏆 Power Rankings</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">See who's on top in the Philadelphia Melee scene.</p>
						<Link href="/rankings" className="text-accent hover:underline">
							View Rankings →
						</Link>
					</CardContent>
				</Card>

				<Card hover>
					<CardHeader>
						<CardTitle>🎮 Slippi Leaderboard</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">Track local players on the Slippi ranked ladder.</p>
						<Link href="/leaderboard" className="text-accent hover:underline">
							View Leaderboard →
						</Link>
					</CardContent>
				</Card>

				<Card hover>
					<CardHeader>
						<CardTitle>🗓️ Tournaments</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">Find upcoming locals and register for events.</p>
						<Link href="/tournaments" className="text-accent hover:underline">
							View Tournaments →
						</Link>
					</CardContent>
				</Card>

				<Card hover>
					<CardHeader>
						<CardTitle>📰 News</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">Tournament recaps, guides, and community updates.</p>
						<Link href="/news" className="text-accent hover:underline">
							Read News →
						</Link>
					</CardContent>
				</Card>
			</section>

			{/* Call to Action */}
			<section className="bg-surface py-16 border border-border rounded-2xl text-center">
				<h2 className="mb-4 font-bold text-foreground text-3xl">Join the Community</h2>
				<p className="mx-auto mb-6 max-w-xl text-foreground-muted">
					Connect with local players, find tournaments, and level up your game.
				</p>
				<Button href="https://discord.gg" external variant="secondary" size="lg">
					Join Discord
				</Button>
			</section>
		</PageShell>
	);
};

export default HomePage;
