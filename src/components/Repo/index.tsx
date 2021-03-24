import { FC, ReactNode } from 'react';
import { Icon } from '@/src/components/Icons';
// @ts-ignore
import { Star } from 'react-iconly';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { truncate } from 'lodash';
import { StyledRepo } from './styles';
import { Repo as RepoType } from '@/src/models/Repo';

interface IProps {
	children?: ReactNode;
	repo: RepoType;
}

const Repo: FC<IProps> = ({ repo }) => {
	return (
		<StyledRepo>
			<div className="project-inner">
				<header>
					<div className="project-top">
						<div className="folder">
							<AiOutlineFolderOpen />
						</div>
						<div className="project-links">
							<a onClick={() => {}} aria-label="GitHub Link">
								<Icon name="github" />
							</a>

							{/* <a
								onClick={() => onLinkClicked(homepage)}
								aria-label="External Link"
							>
								<Icon name="external" />
							</a> */}
						</div>
					</div>
					<a
						onClick={() => {}}
						className="project-title"
						aria-label="Project Link"
					>
						{repo.name}
					</a>
					<p className="project-description">
						{truncate(repo.description, { length: 80 })}
					</p>
				</header>
				<footer>
					<div className="metrics">
						{repo.stargazers_count > 0 && (
							<a
								className="project-metric-value"
								rel="noreferrer"
								target="_blank"
								href={repo.html_url}
							>
								<Star size={20} />
								&nbsp;
								{repo.stargazers_count}
							</a>
						)}
					</div>
					<p className="project-tech-name">{repo.language}</p>
				</footer>
			</div>
		</StyledRepo>
	);
};

export default Repo;
