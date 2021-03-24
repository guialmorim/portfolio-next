// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		bg: {
			default: string;
			defaultLight: string;
			reverse: string;
			bgProjects: string;
		};
		text: {
			default: string;
			reverse: string;
			accent: string;
		};
		accents: {
			a1: string;
			a2: string;
			a3: string;
			a4: string;
			a5: string;
			a6: string;
			a7: string;
			a8: string;
		};
		shadows: {
			default: string;
			small: string;
			medium: string;
			large: string;
		};
		borderRadius: string;
		borderRadiusButton: string;
		hamburgerWidth: string;
		fontFamily: {
			fontSans: string;
			fontMono: string;
		};
		radius: {
			sm: string;
			md: string;
			lg: string;
		};
		brand: {
			primary: string;
			success: string;
			danger: string;
			warning: string;
		};
		genericColors: {
			white: string;
			black: string;
			gray: string;
		};
		fontSize: {
			xxs: string;
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};
		breakpoints: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		fontw: {
			light: number;
			regular: number;
			semibold: number;
			bold: number;
		};
		transitions: {
			easing: string;
			default: string;
			hamBefore: string;
			hamBeforeActive: string;
			hamAfter: string;
			hamAfterActive: string;
		};
		mixins: {
			flexCenter: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			flexBetween: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			link: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			inlineLink: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			button: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			smallButton: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			bigButton: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			bigInput: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			boxShadow: FlattenInterpolation<ThemeProps<DefaultTheme>>;
			fancyList: FlattenInterpolation<ThemeProps<DefaultTheme>>;
		};
	}
}
