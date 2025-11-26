import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageShell } from '@/src/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui';

/**
 * Historical Power Rankings page.
 *
 * TODO: Fetch real data from Payload CMS.
 */
const RankingsHistoryPage = (): ReactElement => {
	// Placeholder data
	const mockSeasons = [
		{ id: 'spring-2025', name: 'Spring 2025', date: 'March 2025' },
		{ id: 'winter-2024', name: 'Winter 2024', date: 'December 2024' },
		{ id: 'fall-2024', name: 'Fall 2024', date: 'September 2024' },
		{ id: 'summer-2024', name: 'Summer 2024', date: 'June 2024' },
	];

	return (
		<PageShell className="mx-auto max-w-4xl">
			<div className="mb-8">
				<Link href="/rankings" className="inline-block mb-4 text-foreground-muted hover:text-foreground transition-colors">
					← Back to Current Rankings
				</Link>
				<h1 className="font-bold text-foreground text-4xl md:text-5xl">Rankings History</h1>
			</div>

			<div className="gap-6 grid grid-cols-1 md:grid-cols-2">
				{mockSeasons.map((season) => (
					<Card key={season.id} hover>
						<CardHeader>
							<CardTitle>{season.name}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-4 text-foreground-muted">Released {season.date}</p>
							<Link href={`/rankings/history/${season.id}`} className="text-accent hover:underline">
								View Rankings →
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</PageShell>
	);
};

export default RankingsHistoryPage;
