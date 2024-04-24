import React, { useEffect, useState } from 'react';
import HeaderBar from './components/HeaderBar';
import MapContainer from './components/MapContainer';
import AutoComplete from './components/AutoComplete';
import Footer from './components/Footer';
import Toast from './components/Toast';
import FavouritePlace from './components/FavouritePlace';
import { useTheme } from './ThemeContext';
import { LoadScript } from '@react-google-maps/api';

const App = () => {
	const [coordinate, setCoordinate] = useState(null);
	const [showToast, setShowToast] = useState(false);
	const [showFavourites, setShowFavourites] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		console.log('This is value -> ', coordinate);
	}, [coordinate]);

	const handleFavouriteButtonClick = () => {
		setShowToast(true);
	};

	const handleCloseToast = () => {
		setShowToast(false);
	};

	const favouritePlaces = [
		{
			name: 'New York City',
			latitude: 40.7128,
			longitude: -74.006,
		},
		{
			name: 'Tokyo',
			latitude: 35.6895,
			longitude: 139.6917,
		},
		{
			name: 'London',
			latitude: 51.5074,
			longitude: -0.1278,
		},
		{
			name: 'Paris',
			latitude: 48.8566,
			longitude: 2.3522,
		},
		// Add more places as needed
	];

	const renderMapContent = () => (
		<>
			<div className="absolute top-0 left-0 right-0 z-50 p-2 flex justify-center">
				<AutoComplete setCoordinate={setCoordinate} />
			</div>
			<MapContainer coordinate={coordinate} />
		</>
	);

	const renderFavouriteContent = (favouritePlaces) => {
		return favouritePlaces.map((place, index) => <FavouritePlace key={index} place={place} />);
	};

	return (
		<div className={`flex h-screen ${theme === 'light' ? 'bg-white' : 'bg-dark'} justify-center`}>
			<div className="flex flex-col w-full xl:w-3/5">
				<div className="basis-1/12 mb-0 md:mb-4">
					<HeaderBar handleFavouriteButtonClick={handleFavouriteButtonClick} setShowFavourites={setShowFavourites} />
				</div>
				<div className="basis-10/12 px-4 md:px-0 relative">
					<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY} libraries={['places']}>
						{showFavourites ? renderFavouriteContent(favouritePlaces) : renderMapContent()}
					</LoadScript>
				</div>
				{showToast && <Toast message="Place added to favourite!" type="success" onClose={handleCloseToast} />}
				<div className="basis">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
