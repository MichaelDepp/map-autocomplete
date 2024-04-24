import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const MapContainer = ({ coordinate }) => {
	const position = {
		lat: 3.1470984, // Location
		lng: 101.6990835, // Location
	};

	return (
		<APIProvider apiKey={'AIzaSyCd8xOrhNvkxauR0TSSOJG5VxaO2p5b2Bg'}>
			<Map
				defaultCenter={position}
				center={coordinate}
				disableDefaultUI={true}
				defaultZoom={18}
				style={{
					borderRadius: '20px',
				}}
			>
				<Marker position={coordinate ? coordinate : position} />
			</Map>
		</APIProvider>
	);
};

export default MapContainer;
