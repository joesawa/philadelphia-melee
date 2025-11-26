'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: ReactNode;
	className?: string;
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
	href?: undefined;
	external?: undefined;
}

interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps | 'href'> {
	href: string;
	external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Type guard to check if props represent a link button.
 */
const isLinkProps = (props: ButtonProps): props is ButtonAsLink => {
	return 'href' in props && typeof props.href === 'string';
};

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'bg-accent text-accent-foreground hover:bg-accent/90',
	secondary: 'bg-surface-elevated text-foreground border border-border hover:bg-surface-elevated/80',
	ghost: 'bg-transparent text-foreground hover:bg-surface-elevated',
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-base',
	lg: 'px-6 py-3 text-lg',
};

/**
 * Button component with variants and sizes.
 *
 * Renders as a `<button>` by default, or as a `<Link>` when `href` is provided.
 *
 * @example
 * ```tsx
 * // As button
 * <Button onClick={handleClick}>Click Me</Button>
 *
 * // As internal link
 * <Button href="/rankings">View Rankings</Button>
 *
 * // As external link
 * <Button href="https://discord.gg" external>Join Discord</Button>
 * ```
 */
export const Button = (props: ButtonProps): ReactElement => {
	const { variant = 'primary', size = 'md', className, children } = props;

	const sharedStyles = cn(
		'inline-flex justify-center items-center rounded-lg font-medium',
		'transition-all duration-200 ease-out',
		'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
		'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		variantStyles[variant],
		sizeStyles[size],
		className,
	);

	if (isLinkProps(props)) {
		const {
			href,
			external,
			// variant: _,
			// size: __,
			// className: ___,
			// children: ____,
			...linkProps
		} = props;

		if (external) {
			return (
				<a href={href} target="_blank" rel="noopener noreferrer" className={sharedStyles} {...linkProps}>
					{children}
				</a>
			);
		}

		return (
			<Link href={href} className={sharedStyles} {...linkProps}>
				{children}
			</Link>
		);
	}

	// const { variant: _, size: __, className: ___, children: ____, ...buttonProps } = props;
	const { ...buttonProps } = props;

	return (
		<button className={cn(sharedStyles, 'disabled:opacity-50 disabled:cursor-not-allowed')} {...buttonProps}>
			{children}
		</button>
	);
};
