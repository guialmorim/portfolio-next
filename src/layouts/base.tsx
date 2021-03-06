/* eslint-disable max-len */
import Head from 'next/head';
import { getHeadData } from '@/src/config/appConfig';
import { FC, ReactNode } from 'react';
import { User } from '../models/User';

interface IProps {
	children?: ReactNode;
	user: User;
}

const BaseLayout: FC<IProps> = ({ children, user }) => {
	const head = getHeadData(user);

	return (
		<div id="main">
			<Head>
				<title>{head.title}</title>
				<link rel="icon" href={head.icon} />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					key="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content={head.twitter_site} />
				<meta property="twitter:image" content={head.twitter_image} />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en" />
				<meta property="og:site_name" content={head.og_site_name} />
				<meta property="og:title" content={head.og_title} />
				<meta property="og:url" content={head.og_url} />
				<meta property="og:image" content={head.og_image} />
				<meta name="description" content={head.description} />
				<meta name="keywords" content={head.keywords} />
				{/* We only want to add the scripts if in production */}

				<>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${user.ga}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${user.ga}', {
                      page_path: window.location.pathname,
                    });
                  `,
						}}
					/>
				</>

				<>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#120e26" />
					<meta name="msapplication-TileColor" content="#120e26" />
					<meta name="theme-color" content="#120e26" />
				</>
			</Head>
			{children}
		</div>
	);
};

export default BaseLayout;
