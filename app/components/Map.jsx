'use client'; // This component uses browser-only APIs

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map({ position, zoom }) {
    // Use the coordinates for your location in Burhanpur
    const defaultPosition = [21.3114, 76.2327]; // Example coordinates

    return (
        <MapContainer
            center={position || defaultPosition}
            zoom={zoom || 15}
            scrollWheelZoom={true}
            style={{ height: '400px', width: '100%', borderRadius: '0.5rem' }}
        >
            <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position || defaultPosition}>
                <Popup>
                    <b>Techodite</b> <br />
                    Bazarpati Bhadarpur, Burhanpur <br />
                    Madhya Pradesh
                </Popup>
            </Marker>
        </MapContainer>
    );
}

