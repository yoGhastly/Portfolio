import React from 'react';
import Link from 'next/link';
import { Link as NextLink } from '@nextui-org/react';
import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

export const Navbar = () => {
	const { isDark } = useTheme();
	const { setTheme } = useNextTheme();
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/dashboard', label: 'Dashboard' },
		{ href: '/snippets', label: 'Snippets' },
	];

	return (
		<div className="flex flex-col justify-center px-8">
			<nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 bg-opacity-60 ">
				<div className="ml-[-0.60rem]">
					{links.map(({ href, label }) => (
						<Link href={href} key={href}>
							<NextLink block color="primary" css={{ padding: '0.5rem 1rem' }}>
								{label}
							</NextLink>
						</Link>
					))}
				</div>
				<Switch
					checked={isDark}
					color="primary"
					onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
				/>
			</nav>
		</div>
	);
};
