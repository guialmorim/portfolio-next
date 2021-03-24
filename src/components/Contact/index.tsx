import { FC, ReactNode } from 'react';
import { NumberedHeading } from '@/src/common/styles';
import { StyledContactSection } from './styles';
import { User } from '@/src/models/User';

interface IProps {
	children?: ReactNode;
	user: User;
}

const Contact: FC<IProps> = ({ user }) => {
	return (
		<StyledContactSection id="contact">
			<NumberedHeading>What’s Next?</NumberedHeading>
			<h2 className="title">Get In Touch</h2>
			<p>
				I&apos;m currently open for new opportunities, feel free to get contact.
				If you have any questions or want to talk, I will do my best to get
				back.
			</p>
			<a className="email-link" href={`mailto:${user.email}`}>
				Say Hello
			</a>
		</StyledContactSection>
	);
};

export default Contact;
