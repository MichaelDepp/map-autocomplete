import React, { useEffect, useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import HeaderBar from './components/HeaderBar';
import MapContainer from './components/MapContainer';
import AutoComplete from './components/AutoComplete';
import Footer from './components/Footer';
import Toast from './components/Toast';
import FavouritePlace from './components/FavouritePlace';
import { useTheme } from './ThemeContext';
import voidImg from './void.svg';

const App = () => {
	const [place, setPlace] = useState(null);
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [toastType, setToastType] = useState('success');
	const [showFavourites, setShowFavourites] = useState(false);
	const [savedPlaces, setSavedPlaces] = useState([]);
	const { theme } = useTheme();

	useEffect(() => {
		const savedValue = JSON.parse(localStorage.getItem('savedPlaces'));
		if (savedValue) {
			setSavedPlaces(savedValue);
		}
	}, []);

	useEffect(() => {
		setPlace(place);
	}, [place]);

	const handleFavouriteButtonClick = () => {
		if (savedPlaces && savedPlaces.some((p) => p.name === place.name)) {
			setToastMessage('Place already exist in favourites!');
			setToastType('warning');
			setShowToast(true);
		} else {
			if (place !== null) {
				console.log('here', place);
				setSavedPlaces([...savedPlaces, place]);
				localStorage.setItem('savedPlaces', JSON.stringify([...savedPlaces, place]));
				setToastMessage('Place added to favourites!');
				setToastType('success');
				setShowToast(true);
			}
		}
	};

	const handleCloseToast = () => {
		setShowToast(false);
	};

	const handlePlacesDelete = (name) => {
		const updatedPlaces = savedPlaces.filter((place) => place.name !== name);
		setSavedPlaces(updatedPlaces);
		localStorage.setItem('savedPlaces', JSON.stringify(updatedPlaces));
		setToastMessage('Deleted Successfully!');
		setToastType('success');
		setShowToast(true);
	};

	const renderMapContent = () => (
		<>
			<div className="absolute top-1 left-0 right-0 z-50 p-2 flex justify-center">
				<AutoComplete setCoordinate={setPlace} />
			</div>
			<MapContainer coordinate={place} />
		</>
	);

	const renderFavouriteContent = (savedPlaces) => {
		if (savedPlaces && savedPlaces.length > 0) {
			return savedPlaces.map((place, key) => (
				<FavouritePlace key={key} place={place} handlePlacesDelete={handlePlacesDelete} />
			));
		} else {
			return (
				<div className="w-full h-64 grid place-items-center">
					<img src={voidImg} alt="No Data" className="w-full md:w-1/2 object-contain pt-16 md:pt-8" />
					<p className={`mt-4 text-lg font-semibold ${theme === 'light' ? 'text-dark' : 'text-white'}`}>
						No Favourite Place Found!
					</p>
				</div>
			);
		}
	};

	return (
		<div className={`flex h-screen ${theme === 'light' ? 'bg-white' : 'bg-dark'} justify-center`}>
			<div className="flex flex-col w-full xl:w-3/5">
				<div className="basis-1/12 mb-0 md:mb-4">
					<HeaderBar handleFavouriteButtonClick={handleFavouriteButtonClick} setShowFavourites={setShowFavourites} />
				</div>
				<div className="basis-10/12 px-6 md:px-0 relative">
					<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY} libraries={['places']}>
						{showFavourites ? renderFavouriteContent(savedPlaces) : renderMapContent()}
					</LoadScript>
				</div>
				{showToast && <Toast message={toastMessage} type={toastType} onClose={handleCloseToast} />}
				<div className="basis">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
