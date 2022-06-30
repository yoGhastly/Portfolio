import React, { useState } from 'react';
import Link from 'next/link';
import { Link as NextLink } from '@nextui-org/react';
import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import styles from './navbar.module.css';
import { links } from '../utils/links';

export const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { isDark } = useTheme();
	const { setTheme } = useNextTheme();

	return (
		<div className="flex flex-col justify-center px-8">
			<nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 bg-opacity-60 ">
				<div className="ml-[-0.60rem]">
					<button
						data-collapse-toggle="mobile-menu"
						type="button"
						className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							className="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					{links.map(({ href, label }) => (
						<Link href={href} key={href}>
							<NextLink
								block
								color="primary"
								css={{ padding: '0.5rem 1rem' }}
								className="hidden md:inline-block transition-all"
							>
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
