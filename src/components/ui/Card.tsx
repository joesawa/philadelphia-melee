import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	hover?: boolean;
}

/**
 * Card container component.
 */
export const Card = ({ className, children, hover = false, ...props }: CardProps): ReactElement => {
	return (
		<div
			className={cn(
				'bg-surface p-6 border border-border rounded-xl',
				'transition-all duration-300 ease-out',
				hover && 'hover:bg-surface-elevated hover:border-border-active hover:-translate-y-1 hover:shadow-lg',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

/**
 * Card header section.
 */
export const CardHeader = ({ className, children, ...props }: CardHeaderProps): ReactElement => {
	return (
		<div className={cn('mb-4', className)} {...props}>
			{children}
		</div>
	);
};

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode;
}

/**
 * Card title element.
 */
export const CardTitle = ({ className, children, ...props }: CardTitleProps): ReactElement => {
	return (
		<h3 className={cn('font-bold text-foreground text-xl', className)} {...props}>
			{children}
		</h3>
	);
};

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

/**
 * Card content section.
 */
export const CardContent = ({ className, children, ...props }: CardContentProps): ReactElement => {
	return (
		<div className={cn('text-foreground-muted', className)} {...props}>
			{children}
		</div>
	);
};
