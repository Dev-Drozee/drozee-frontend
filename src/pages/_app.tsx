import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ClerkProvider {...pageProps} >
				<Head>
					<meta charSet='utf-8' />
					<meta httpEquiv='Cache-control' content='public' />
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
					{/* link manifest.json */}
					<link rel='manifest' href='/favicon/manifest.json' />
					{/* this sets the color of url bar */}
					<meta name='theme-color' content='#292953' />
					<meta name='apple-mobile-web-app-title' content='drozee' />
					<meta name='application-name' content='drozee' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicon/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon/favicon-16x16.png'
					/>
					<link
						rel='mask-icon'
						href='/favicon/safari-pinned-tab.svg'
						color='#0000ff'
					/>
				</Head>
				<Component {...pageProps} />
			</ClerkProvider>
		</>
	);
}

export default MyApp;
