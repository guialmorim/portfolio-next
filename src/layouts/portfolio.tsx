import { FC, ReactNode } from 'react';
import Main from './main';
import BaseLayout from './base';
import Navbar from './navbar';
import Footer from './footer';
import { AppConfig } from '@/src/config/appConfig';

interface IProps {
	children: ReactNode;
	appConfig: AppConfig;
}

const PorfolioLayout: FC<IProps> = ({ children, appConfig }) => {
	return (
		<BaseLayout user={appConfig.user}>
			<Navbar navLinks={appConfig.navLinks} />
			<Main id="content" className="fillHeight">
				{children}
			</Main>
			<Footer user={appConfig.user} />
		</BaseLayout>
	);
};

export default PorfolioLayout;
