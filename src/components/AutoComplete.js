import React, { useRef } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

const AutoComplete = ({ setCoordinate }) => {
	const inputRef = useRef();

	const handlePlaceChanged = () => {
		const [place] = inputRef.current.getPlaces();
		if (place) {
			const name = place.formatted_address;
			const lat = place.geometry.location.lat();
			const lng = place.geometry.location.lng();
			setCoordinate({
				name,
				lat,
				lng,
			});
		}
	};

	return (
		<StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
			<input type="text" className="form-control w-72 shadow-xl p-2 rounded-xl" placeholder="Enter Location" />
		</StandaloneSearchBox>
	);
};

export default AutoComplete;
