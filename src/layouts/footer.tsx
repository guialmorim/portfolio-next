import { StyledFooter, StyledCredit } from './styles';
import { AiFillHeart } from 'react-icons/ai';
import { FC, ReactNode } from 'react';
import { User } from '../models/User';

interface IProps {
	children?: ReactNode;
	user: User;
}

const Footer: FC<IProps> = ({ user }) => {
	return (
		<StyledFooter>
			<StyledCredit>
				<span className="copyright">
					<span>
						{'Feito com '}
						<AiFillHeart style={{ color: 'red' }} />
						&nbsp;
						{`por ${user.name}`}
					</span>
				</span>
			</StyledCredit>
			<StyledCredit>
				<a rel="noreferrer" target="_blank" href="https://devcover.me">
					<span>Inspirado por Devcover</span>
				</a>
			</StyledCredit>
			<StyledCredit>
				<a rel="noreferrer" target="_blank" href="https://vercel.com">
					<span>Hospedado por Vercel</span>
				</a>
			</StyledCredit>
		</StyledFooter>
	);
};

export default Footer;
