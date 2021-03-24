import { useState } from 'react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import PortfolioLayout from '@/src/layouts/portfolio';
import GlobalStyles from '@/src/styles/globals';
import * as gtag from '@/src/lib/gtag';
import UIContextProvider from '@/src/contexts/ui';
import { darkTheme, lightTheme } from '@/src/themes';
import { ThemeProvider } from 'styled-components';
import { appConfig } from '@/src/config/appConfig';
import usePersistedState from '../hooks/use-persisted-state';
// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

const ScrollToTop: any = dynamic(
	() => {
		return import('@/src/components/ScrollToTop');
	},
	{ loading: () => null, ssr: false }
);

const ThemeSwitch: any = dynamic(
	() => {
		return import('@/src/components/ThemeSwitch');
	},
	{ loading: () => null, ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = usePersistedState<string>('gui.dev-theme', 'light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? darkTheme.title : lightTheme.title);
		console.log('tema trocado para', theme);
	};

	const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={selectedTheme}>
			<ScrollToTop />
			<UIContextProvider>
				<PortfolioLayout appConfig={appConfig}>
					<ThemeSwitch toggleTheme={toggleTheme} />
					<GlobalStyles />
					<Component {...pageProps} />
				</PortfolioLayout>
			</UIContextProvider>
		</ThemeProvider>
	);
}
