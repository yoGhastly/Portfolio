import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Navbar, Hero, Footer } from '../components';

const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {
			// brand colors
			background: '#f1f1f1',
			color: '#000',
			primary: '#000',
		},
	},
});

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			// brand colors
			background: '#111111',
			color: '#fff',
			primary: '#fff',
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextThemesProvider
			defaultTheme="system"
			attribute="class"
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>
				<Navbar />
				<main className="flex flex-col justify-center px-8">
					<Component {...pageProps} />
					<Footer />
				</main>
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default MyApp;
