import { GetStaticProps, NextPage } from 'next';
import { appConfig } from '@/src/config/appConfig';
import { User } from '../models/User';
import { Link } from '../models/Link';
import React from 'react';
import { About, Blog, Contact, Hero, Projects } from '../components';
import { StyledMainContainer } from '../common/styles';
import {
	GITHUB_README_URL,
	GITHUB_USER_URL,
	PROJECTS_GRID_LIMIT,
} from '../lib/constants';
import { orderBy } from 'lodash';

interface Props {
	appConfig: {
		user: User;
		navLinks: Array<Link>;
		typedWordArray: Array<string>;
	};
}

export const getStaticProps: GetStaticProps = async (context) => {
	const branch = 'main';
	const fileName = 'README.md';

	const readmeResponse = await fetch(
		`${GITHUB_README_URL}${appConfig.user.username}/${appConfig.user.username}/${branch}/${fileName}`
	);

	const readme = await readmeResponse.text();

	appConfig.user.readme = readme;

	const reposResponse = await fetch(
		`${GITHUB_USER_URL}${appConfig.user.username}/repos?per_page=${PROJECTS_GRID_LIMIT}`
	);
	const repos = await reposResponse.json();
	const orderedRepos = orderBy(repos, ['stargazers_count'], ['desc']);

	appConfig.user.repos = orderedRepos;

	return {
		props: {
			appConfig,
		},
	};
};

const IndexPage: NextPage<Props> = ({ appConfig }) => {
	const { user, typedWordArray } = appConfig;
	return (
		<React.Fragment>
			<Hero user={user} typedWordArray={typedWordArray} />
			<StyledMainContainer className="fillHeight">
				<About user={user} />
				<Blog user={user} />
				<Projects user={user} />
				<Contact user={user} />
			</StyledMainContainer>
		</React.Fragment>
	);
};

export default IndexPage;
