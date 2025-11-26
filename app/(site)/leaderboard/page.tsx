import type { ReactElement } from 'react';
import { PageShell } from '@/src/components/layout';
import { Card, CardContent } from '@/src/components/ui';

/**
 * Slippi Leaderboard page.
 *
 * TODO: Integrate with Slippi API.
 */
const LeaderboardPage = (): ReactElement => {
	// Placeholder data
	const mockLeaderboard = [
		{ rank: 1, tag: 'PHLY#123', elo: 2450, character: 'Fox', wins: 142, losses: 38 },
		{ rank: 2, tag: 'MELEE#456', elo: 2380, character: 'Marth', wins: 128, losses: 42 },
		{ rank: 3, tag: 'SMSH#789', elo: 2320, character: 'Falco', wins: 115, losses: 45 },
		{ rank: 4, tag: 'GAME#012', elo: 2280, character: 'Sheik', wins: 108, losses: 52 },
		{ rank: 5, tag: 'BROS#345', elo: 2240, character: 'Peach', wins: 98, losses: 48 },
	];

	return (
		<PageShell className="mx-auto max-w-5xl">
			<h1 className="mb-2 font-bold text-foreground text-4xl md:text-5xl">Slippi Leaderboard</h1>
			<p className="mb-8 text-foreground-muted">Philadelphia region ranked players</p>

			<Card>
				<CardContent className="p-0!">
					<table className="w-full">
						<thead>
							<tr className="border-border border-b text-left">
								<th className="p-4 font-medium text-foreground-muted">Rank</th>
								<th className="p-4 font-medium text-foreground-muted">Player</th>
								<th className="p-4 font-medium text-foreground-muted">Main</th>
								<th className="p-4 font-medium text-foreground-muted text-right">Elo</th>
								<th className="p-4 font-medium text-foreground-muted text-right">W/L</th>
							</tr>
						</thead>
						<tbody>
							{mockLeaderboard.map((player) => (
								<tr
									key={player.tag}
									className="hover:bg-surface-elevated border-border last:border-0 border-b transition-colors"
								>
									<td className="p-4">
										<span className="font-bold text-accent">{player.rank}</span>
									</td>
									<td className="p-4 font-medium text-foreground">{player.tag}</td>
									<td className="p-4 text-foreground-muted">{player.character}</td>
									<td className="p-4 font-mono text-foreground text-right">{player.elo}</td>
									<td className="p-4 text-foreground-muted text-right">
										<span className="text-success">{player.wins}</span>
										{' / '}
										<span className="text-error">{player.losses}</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardContent>
			</Card>
		</PageShell>
	);
};

export default LeaderboardPage;
