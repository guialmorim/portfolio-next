import { isEmpty } from 'lodash';
import { MAIN_SITE_URL } from '../lib/constants';
import { Link } from '../models/Link';
import { User } from '../models/User';

export interface AppConfig {
	user: User;
	navLinks: Array<Link>;
	typedWordArray: Array<string>;
}

export const appConfig: AppConfig = {
	user: {
		name: 'Guilherme Almorim',
		email: 'gui.almorim@gmail.com',
		username: 'guialmorim',
		avatar: 'avatar.png',
		favicon: `${MAIN_SITE_URL}/favicon.ico`,
		ga: '',
		bio: `Tenho 22 anos, sou desenvolvedor de softwares e
			soluções de automação com experiência em
			projeto, codificação e teste de sistemas complexos.`,
		posts: [
			{
				id: '1',
				featured: false,
				provider: '',
				title: 'Purina 28 Dias',
				description:
					'Criação de uma experiência web para os clientes da Nestlé Purina PetCare® com conteúdo dividido em dois ambientes, um mini game com um ciclo de 28 dias e uma aplicação em React Js para controlar as metas e cuidados com o seu pet. Podendo também acessar conteúdos especiais para os pets, dicas exclusivas, benefícios de Purina One e informações de cuidados entre outros.',
				cover: '/portfolio/purina.png',
				created: '2020-03-20',
				url: 'https://www.purinaone28dias.com.br/homepage',
			},
			{
				id: '2',
				featured: true,
				provider: '',
				title: 'Vivo Money',
				description:
					'Desenvolvimento de uma API para tratamento anti-fraude das propostas de empréstimo recebidas pelo Vivo Money.',
				cover: '/portfolio/vivomoney.png',
				created: '2020-03-20',
				url: 'https://www.vivomoney.com.br',
			},
			{
				id: '3',
				featured: false,
				provider: '',
				title: 'Next Store',
				description:
					'Um e-commerce completo usando Next.js, Typescript, MongoDB, Chakra-UI e Styled Components para estilização, projetado com simplicidade para aprendizado e uma aplicabilidade no mundo real em mente.',
				cover:
					'https://cdn.britannica.com/s:575x450/02/152302-004-4F261C52.jpg',
				created: '2020-03-20',
				url: 'https://next-store.vercel.app',
			},
			{
				id: '4',
				featured: false,
				provider: '',
				title: 'Cardapio Web App',
				description:
					'Desenvolvimento de um cardapio em forma de aplicação web, com a possibilidade de visualizar os modelos 3D dos pratos, mas uma imagem vale mais que mil palvras, então clica no link aqui abaixo e da uma olhada!',
				cover: '/portfolio/cardapio.png',
				created: '2020-03-20',
				url: 'https://cardapio-six.vercel.app',
			},
		],
		readme: '',
		repos: [],
	},
	navLinks: [
		{
			key: 'sobre',
			value: 'Sobre Mim',
		},
		{
			key: 'portifolio',
			value: 'Portfólio',
		},
		{
			key: 'github',
			value: 'Github',
		},
		{
			key: 'contato',
			value: 'Contato',
		},
	],
	typedWordArray: [
		'Desenvolvedor de Softwares',
		'Experiencia com JavaScript',
		'Experiencia com TypeScript',
		'Experiencia com React JS',
		'Experiencia com Next JS',
		'Experiencia com Asp.net Core',
		'Experiencia com CSS & SASS',
		'Experiencia com C#',
		'Experiencia com Node JS',
	],
};

export const getHeadData = (user: User) => {
	const title = 'Guilherme Almorim | Desenvolvedor de Softwares';
	const head = {
		title,
		icon: `${MAIN_SITE_URL}/favicon.ico`,
		twitter_site: '@guialmorim',
		twitter_image: '',
		og_site_name: title,
		og_title: title,
		og_url: MAIN_SITE_URL,
		og_image: `${MAIN_SITE_URL}/twitter-image-devcover.jpg`,
		description: `Meu nome é Guilherme Almorim, sou desenvolvedor de softwares e
			soluções de automação com experiência em
			projeto, codificação e teste de sistemas complexos.`,
		keywords: '',
	};
	if (!isEmpty(user)) {
		const userImage = user.avatar;
		const userIcon = user.favicon;
		const userTitle = `Olá! Mundo! Sou ${user.name} | ${user.bio}`;

		head.title = userTitle;
		head.icon = userIcon;
		head.twitter_image = userImage;
		head.og_site_name = userTitle;
		head.og_title = userTitle;
		head.og_url = '';
		head.og_image = userImage;
		head.description = user.bio;
	}
	return head;
};
