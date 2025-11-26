import type { ReactElement } from 'react';
import { Card, CardContent } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

interface RankingCardProps {
	rank: number;
	tag: string;
	character?: string;
	previousRank?: number;
}

/**
 * Displays a single player ranking entry.
 */
export const RankingCard = ({ rank, tag, character, previousRank }: RankingCardProps): ReactElement => {
	const rankChange = previousRank ? previousRank - rank : 0;

	return (
		<Card hover className="flex items-center gap-4">
			{/* Rank */}
			<div className="flex flex-shrink-0 justify-center items-center bg-accent/10 rounded-lg w-12 h-12">
				<span className="font-bold text-accent text-xl">{rank}</span>
			</div>

			{/* Player Info */}
			<CardContent className="flex-1 !mb-0 !p-0">
				<div className="flex items-center gap-3">
					<span className="font-bold text-foreground text-lg">{tag}</span>
					{character && <span className="text-foreground-muted text-sm">{character}</span>}
				</div>
			</CardContent>

			{/* Rank Change */}
			{rankChange !== 0 && (
				<div className={cn('font-medium text-sm', rankChange > 0 ? 'text-green-500' : 'text-red-500')}>
					{rankChange > 0 ? `↑${rankChange}` : `↓${Math.abs(rankChange)}`}
				</div>
			)}
		</Card>
	);
};
