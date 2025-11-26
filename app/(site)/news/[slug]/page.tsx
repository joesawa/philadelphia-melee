import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageShell } from '@/src/components/layout';

interface ArticlePageProps {
	params: Promise<{
		slug: string;
	}>;
}

/**
 * Individual article page.
 *
 * TODO: Fetch real data from Payload CMS.
 */
const ArticlePage = async ({ params }: ArticlePageProps): Promise<ReactElement> => {
	const { slug } = await params;

	// Placeholder - will be replaced with Payload CMS fetch
	const article = {
		title: 'Article Title',
		date: '2025-03-15',
		author: 'Staff',
		content: `
			<p>This is placeholder content for the article: ${slug}</p>
			<p>When connected to Payload CMS, this will display rich text content from the articles collection.</p>
		`,
	};

	return (
		<PageShell className="mx-auto max-w-3xl">
			<Link href="/news" className="inline-block mb-6 text-foreground-muted hover:text-foreground transition-colors">
				← Back to News
			</Link>

			<article>
				<header className="mb-8">
					<h1 className="mb-4 font-bold text-foreground text-4xl md:text-5xl">{article.title}</h1>
					<div className="flex items-center gap-4 text-foreground-muted">
						<span>{article.author}</span>
						<span>•</span>
						<time dateTime={article.date}>
							{new Date(article.date).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric',
							})}
						</time>
					</div>
				</header>

				<div
					className="prose-invert max-w-none prose"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: CMS content is sanitized
					dangerouslySetInnerHTML={{ __html: article.content }}
				/>
			</article>
		</PageShell>
	);
};

export default ArticlePage;
