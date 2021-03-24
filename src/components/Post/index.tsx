import { FC, ReactNode } from 'react';
import { capitalize } from 'lodash';
import { IconFeatured } from '@/src/components/Icons';
import { formatPostDate } from '@/src/utils';
import { FiExternalLink } from 'react-icons/fi';
import {
	StyledContainer,
	LeftContainer,
	RightContainer,
	ImageContainer,
} from './styles';
import { Post as PostType } from '@/src/models/Post';

interface IProps {
	children?: ReactNode;
	post: PostType;
}

const Post: FC<IProps> = ({ post }) => {
	return (
		<StyledContainer>
			<LeftContainer>
				<p className="featured">
					<IconFeatured />
					{`Featured on ${capitalize(post.provider)}`}
				</p>
				<p className="date">{formatPostDate(post.created)}</p>
				<a className="title" href={post.url} target="_blank" rel="noreferrer">
					{post.title}
				</a>
				<a
					className="description"
					href={post.url}
					target="_blank"
					rel="noreferrer"
				>
					{post.description}
				</a>
				<div className="insights">
					<a
						className="comments"
						href={post.url}
						target="_blank"
						rel="noreferrer"
					>
						<FiExternalLink />
						<p>Visitar</p>
					</a>
				</div>
			</LeftContainer>
			<RightContainer>
				{post.cover && (
					<ImageContainer href={post.url} target="_blank" rel="noreferrer">
						<img src={post.cover} alt={post.title} width={300} />
					</ImageContainer>
				)}
			</RightContainer>
		</StyledContainer>
	);
};

export default Post;
