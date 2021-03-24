import { Repo } from './Repo';
import { Post } from './Post';
import { Link } from './Link';

export interface User {
	username: string;
	name: string;
	avatar: string;
	favicon: string;
	email: string;
	bio: string;
	readme: string;
	repos: Array<Repo>;
	posts: Array<Post>;
	/* Google Analytics code */
	ga: string;
}
