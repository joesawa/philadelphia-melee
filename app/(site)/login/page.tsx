'use client';

import { type FormEvent, type ReactElement, useState } from 'react';
import { PageShell } from '@/src/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui';

/**
 * Login page.
 *
 * For admin/editor access to the CMS.
 */
const LoginPage = (): ReactElement => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		// TODO: Implement actual login with Payload auth
		console.log('Login attempted:', email);
	};

	return (
		<PageShell className="flex justify-center items-center mx-auto max-w-md min-h-[60vh]">
			<Card className="w-full">
				<CardHeader>
					<CardTitle className="text-center">Login</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="email" className="block mb-2 font-medium text-foreground text-sm">
								Email
							</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="bg-surface-elevated px-4 py-2 border border-border focus:border-accent rounded-lg focus:outline-none w-full text-foreground transition-colors"
								placeholder="you@example.com"
								required
							/>
						</div>

						<div>
							<label htmlFor="password" className="block mb-2 font-medium text-foreground text-sm">
								Password
							</label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="bg-surface-elevated px-4 py-2 border border-border focus:border-accent rounded-lg focus:outline-none w-full text-foreground transition-colors"
								placeholder="••••••••"
								required
							/>
						</div>

						<Button type="submit" className="w-full">
							Sign In
						</Button>
					</form>

					<p className="mt-6 text-foreground-muted text-sm text-center">
						Need admin access?{' '}
						<a href="/admin" className="text-accent hover:underline">
							Go to Admin Panel
						</a>
					</p>
				</CardContent>
			</Card>
		</PageShell>
	);
};

export default LoginPage;
