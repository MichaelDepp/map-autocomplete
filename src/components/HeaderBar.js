import React from 'react';
import { HeartIcon, MoonIcon, SunIcon, StarIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../ThemeContext';

const HeaderBar = ({ handleFavouriteButtonClick, setShowFavourites }) => {
	const { theme, toggleTheme } = useTheme();

	const handleOnClickStar = () => {
		setShowFavourites(true);
	};

	const handleOnClickLogo = () => {
		setShowFavourites(false);
	};

	return (
		<div className="justify-between items-center flex py-4 px-4 md:px-0">
			<button
				onClick={handleOnClickStar}
				className="bg-gray-primary hover:bg-gray-light text-black font-bold p-3 rounded inline-flex items-center"
			>
				<StarIcon className="h-4 w-4" />
			</button>
			<button onClick={handleOnClickLogo}>
				<h1 className={`font-bold text-xl ${theme === 'light' ? 'text-dark' : 'text-white'}`}>Maps Autocomplete</h1>
			</button>
			<div>
				<button
					onClick={handleFavouriteButtonClick}
					className="bg-gray-primary hover:bg-gray-light text-black font-bold p-3 rounded inline-flex items-center mr-4"
				>
					<HeartIcon className="h-4 w-4" />
				</button>
				<button
					onClick={toggleTheme}
					className="bg-gray-primary hover:bg-gray-light text-black font-bold p-3 rounded inline-flex items-center"
				>
					{theme === 'light' ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
				</button>
			</div>
		</div>
	);
};

export default HeaderBar;
