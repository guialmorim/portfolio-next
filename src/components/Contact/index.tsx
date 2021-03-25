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
		<StyledContactSection id="contato">
			<NumberedHeading>E agora?</NumberedHeading>
			<h2 className="title">Entre em contato!</h2>
			<p>
				Fique à vontade para entrar em contato! Se você tiver alguma dúvida, ou
				se preferir mandar uma sugestão, dica, crítica (construtiva) ou
				simplesmente quiser conversar, farei o meu melhor para lhe retornar o
				mais breve possível.
			</p>
			<a
				style={{ marginRight: '20px' }}
				className="email-link"
				href={`mailto:${user.email}`}
			>
				Diga um olá!
			</a>
			<a
				className="email-link"
				href="/files/curriculum-guilherme-almorim.pdf"
				target="_blank"
				download
			>
				Baixe meu Curriculum aqui!
			</a>
		</StyledContactSection>
	);
};

export default Contact;
