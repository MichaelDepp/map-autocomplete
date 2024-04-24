import React from 'react';
import { useTheme } from '../ThemeContext';

const Footer = () => {
	const { theme } = useTheme();

	return (
		<footer
			className={`bg-gray-800 text-sm ${theme === 'light' ? 'text-dark' : 'text-white'} pt-4 px-8 text-center self-end`}
		>
			Developed by{' '}
			<a href="https://github.com/MichaelDepp" target="_blank" rel="noopener noreferrer" className="font-400">
				<strong>Michael</strong>
			</a>
		</footer>
	);
};

export default Footer;
