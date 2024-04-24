import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const FavouritePlace = ({ key, place, handlePlacesDelete }) => {
	return (
		<div key={key} className="bg-gray-primary justify-between items-center w-full flex p-2 px-4 mb-4 rounded-md">
			<h1>{place.name}</h1>
			<button
				onClick={() => handlePlacesDelete(place.name)}
				className="border border-black hover:border-red-500 hover:bg-red-500 text-black hover:text-white font-bold p-2 rounded inline-flex items-center"
			>
				<TrashIcon className="h-4 w-4" />
			</button>
		</div>
	);
};

export default FavouritePlace;
