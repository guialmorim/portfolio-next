import { FC, ReactNode } from 'react';
import { Post } from '@/src/components';
import { NumberedHeading } from '@/src/common/styles';
import { PostsContainer } from './styles';
import { User } from '@/src/models/User';

interface IProps {
	children?: ReactNode;
	user: User;
}

const Blog: FC<IProps> = ({ user }) => {
	return (
		<section id="portifolio">
			<NumberedHeading>{`portfolio()`}</NumberedHeading>
			<PostsContainer>
				{user.posts.length > 0 &&
					user.posts.map((post) => {
						return <Post key={post.id} post={post} />;
					})}
			</PostsContainer>
		</section>
	);
};
export default Blog;
