import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageShell } from '@/src/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui';

interface Tournament {
	slug: string;
	name: string;
	date: string;
	venue: string;
	entryFee: number;
	registrationUrl?: string;
	status: 'upcoming' | 'ongoing' | 'completed';
}

/**
 * Upcoming Tournaments page.
 *
 * TODO: Fetch real data from Payload CMS.
 */
const TournamentsPage = (): ReactElement => {
	// Placeholder data - will be replaced with Payload CMS data
	const mockTournaments: Tournament[] = [
		{
			slug: 'weekly-42',
			name: 'Philly Weekly #42',
			date: '2025-04-05T18:00:00',
			venue: 'Center City Gaming Lounge',
			entryFee: 10,
			registrationUrl: 'https://start.gg',
			status: 'upcoming',
		},
		{
			slug: 'monthly-march',
			name: 'Philly Monthly - March',
			date: '2025-03-29T14:00:00',
			venue: 'University City Arena',
			entryFee: 20,
			registrationUrl: 'https://start.gg',
			status: 'upcoming',
		},
		{
			slug: 'weekly-41',
			name: 'Philly Weekly #41',
			date: '2025-03-22T18:00:00',
			venue: 'Center City Gaming Lounge',
			entryFee: 10,
			status: 'completed',
		},
	];

	const upcomingTournaments = mockTournaments.filter((t) => t.status === 'upcoming');
	const pastTournaments = mockTournaments.filter((t) => t.status === 'completed');

	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);

		return date.toLocaleDateString('en-US', {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: '2-digit',
		});
	};

	return (
		<PageShell className="mx-auto max-w-4xl">
			<h1 className="mb-2 font-bold text-foreground text-4xl md:text-5xl">Tournaments</h1>
			<p className="mb-8 text-foreground-muted">Find upcoming locals and register for events</p>

			{/* Upcoming Tournaments */}
			<section className="mb-12">
				<h2 className="mb-6 font-bold text-foreground text-2xl">Upcoming Events</h2>

				{upcomingTournaments.length === 0 ? (
					<Card>
						<CardContent>
							<p className="text-foreground-muted">No upcoming tournaments scheduled. Check back soon!</p>
						</CardContent>
					</Card>
				) : (
					<div className="space-y-4">
						{upcomingTournaments.map((tournament) => (
							<Card key={tournament.slug} hover>
								<CardHeader>
									<div className="flex items-start justify-between">
										<div>
											<CardTitle>{tournament.name}</CardTitle>
											<p className="mt-1 text-foreground-muted text-sm">{formatDate(tournament.date)}</p>
										</div>
										<span className="bg-accent/10 px-3 py-1 rounded-full font-medium text-accent text-sm">
											${tournament.entryFee}
										</span>
									</div>
								</CardHeader>
								<CardContent>
									<p className="mb-4 text-foreground-muted">📍 {tournament.venue}</p>
									<div className="flex gap-3">
										{tournament.registrationUrl && (
											<Button href={tournament.registrationUrl} external size="sm">
												Register
											</Button>
										)}
										<Button href={`/tournaments/${tournament.slug}`} variant="ghost" size="sm">
											Details →
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</section>

			{/* Past Tournaments */}
			{pastTournaments.length > 0 && (
				<section>
					<h2 className="mb-6 font-bold text-foreground text-2xl">Past Events</h2>
					<div className="space-y-4">
						{pastTournaments.map((tournament) => (
							<Card key={tournament.slug} className="opacity-75">
								<CardHeader>
									<div className="flex items-start justify-between">
										<div>
											<CardTitle>{tournament.name}</CardTitle>
											<p className="mt-1 text-foreground-muted text-sm">{formatDate(tournament.date)}</p>
										</div>
										<span className="bg-surface-elevated px-3 py-1 border border-border rounded-full text-foreground-muted text-sm">
											Completed
										</span>
									</div>
								</CardHeader>
								<CardContent>
									<p className="mb-4 text-foreground-muted">📍 {tournament.venue}</p>
									<Link href={`/tournaments/${tournament.slug}`} className="text-accent hover:underline">
										View Results →
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			)}
		</PageShell>
	);
};

export default TournamentsPage;
