import { FC, ReactNode, useState } from 'react';
import { Post } from '@/src/components';
import { NumberedHeading } from '@/src/common/styles';
import * as gtag from '@/src/lib/gtag';
import { PostsContainer } from './styles';
import { User } from '@/src/models/User';

interface IProps {
	children?: ReactNode;
	user: User;
}

const Blog: FC<IProps> = ({ user }) => {
	const [userPosts, setUserPosts] = useState(user.posts);

	// const handleClickLink = (link) => {
	// 	if (IS_PRODUCTION) {
	// 		gtag.event('link_click', 'links', 'user clicked on a link button', link);
	// 	}
	// 	window.open(link, '_blank');
	// };

	return (
		<section id="blog">
			<NumberedHeading>{`portfolio()`}</NumberedHeading>
			<PostsContainer>
				{userPosts &&
					userPosts.map((post, index) => {
						return <Post key={post.id} post={post} />;
					})}
			</PostsContainer>
		</section>
	);
};
export default Blog;
