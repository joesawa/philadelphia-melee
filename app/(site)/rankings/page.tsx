import Link from 'next/link';
import type { ReactElement } from 'react';
import { RankingCard } from '@/src/components/features/rankings';
import { PageShell } from '@/src/components/layout';

/**
 * Current Power Rankings page.
 *
 * TODO: Fetch real data from Payload CMS.
 */
const RankingsPage = (): ReactElement => {
	// Placeholder data - will be replaced with Payload CMS data
	const mockRankings = [
		{ rank: 1, tag: 'PlayerOne', character: 'Fox', previousRank: 1 },
		{ rank: 2, tag: 'PlayerTwo', character: 'Marth', previousRank: 3 },
		{ rank: 3, tag: 'PlayerThree', character: 'Falco', previousRank: 2 },
		{ rank: 4, tag: 'PlayerFour', character: 'Sheik', previousRank: 5 },
		{ rank: 5, tag: 'PlayerFive', character: 'Peach', previousRank: 4 },
	];

	return (
		<PageShell className="mx-auto max-w-4xl">
			<div className="flex justify-between items-center mb-8">
				<div>
					<h1 className="mb-2 font-bold text-foreground text-4xl md:text-5xl">Power Rankings</h1>
					<p className="text-foreground-muted">Spring 2025 Season</p>
				</div>
				<Link href="/rankings/history" className="text-accent hover:underline">
					View History →
				</Link>
			</div>

			<div className="space-y-4">
				{mockRankings.map((player) => (
					<RankingCard
						key={player.rank}
						rank={player.rank}
						tag={player.tag}
						character={player.character}
						previousRank={player.previousRank}
					/>
				))}
			</div>
		</PageShell>
	);
};

export default RankingsPage;
