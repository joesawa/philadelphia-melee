import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageShell } from '@/src/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui';

/**
 * News / Articles listing page.
 *
 * TODO: Fetch real data from Payload CMS.
 */
const NewsPage = (): ReactElement => {
	// Placeholder data
	const mockArticles = [
		{
			slug: 'spring-2025-pr-released',
			title: 'Spring 2025 Power Rankings Released',
			excerpt: 'The new seasonal rankings are here! See who made moves in the Philadelphia Melee scene.',
			date: '2025-03-15',
			category: 'Rankings',
		},
		{
			slug: 'weekly-guide-for-beginners',
			title: 'Guide: Getting Started at Weekly Tournaments',
			excerpt: 'Everything you need to know before attending your first local tournament.',
			date: '2025-03-10',
			category: 'Guide',
		},
		{
			slug: 'major-tournament-recap',
			title: 'Major Tournament Recap: Who Represented Philly',
			excerpt: 'A breakdown of how Philadelphia players performed at the recent major.',
			date: '2025-03-05',
			category: 'Recap',
		},
	];

	return (
		<PageShell className="mx-auto max-w-4xl">
			<h1 className="mb-2 font-bold text-foreground text-4xl md:text-5xl">News & Articles</h1>
			<p className="mb-8 text-foreground-muted">Tournament recaps, guides, and community updates</p>

			<div className="space-y-6">
				{mockArticles.map((article) => (
					<Card key={article.slug} hover>
						<CardHeader>
							<div className="flex items-center gap-3 mb-2">
								<span className="bg-accent/10 px-2 py-1 rounded font-medium text-accent text-xs">{article.category}</span>
								<span className="text-foreground-muted text-sm">
									{new Date(article.date).toLocaleDateString('en-US', {
										month: 'long',
										day: 'numeric',
										year: 'numeric',
									})}
								</span>
							</div>
							<CardTitle>
								<Link href={`/news/${article.slug}`} className="hover:text-accent transition-colors">
									{article.title}
								</Link>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-4">{article.excerpt}</p>
							<Link href={`/news/${article.slug}`} className="text-accent hover:underline">
								Read More →
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</PageShell>
	);
};

export default NewsPage;
