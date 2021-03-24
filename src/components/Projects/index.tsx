/* eslint-disable camelcase */
import { ReactNode, FC } from 'react';
import { PROJECTS_GRID_LIMIT } from '@/src/lib/constants';
import { NumberedHeading } from '@/src/common/styles';
import { Repo } from '@/src/components';
import { StyledProjectsSection, StyledGrid } from './styles';
import { User } from '@/src/models/User';

interface IProps {
	children?: ReactNode;
	user: User;
}

const Projects: FC<IProps> = ({ user }) => {
	return (
		<StyledProjectsSection id="projects">
			<NumberedHeading>{'github()'}</NumberedHeading>
			<StyledGrid>
				{user.repos.length > 0 &&
					user.repos.slice(0, PROJECTS_GRID_LIMIT).map((repo) => {
						return <Repo key={repo.id} repo={repo} />;
					})}
			</StyledGrid>
		</StyledProjectsSection>
	);
};

export default Projects;
