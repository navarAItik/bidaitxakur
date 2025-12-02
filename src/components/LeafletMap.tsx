import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Place } from '../types/place';

export default function LeafletMap({ place }: { place: Place }) {
  return (
    <MapContainer center={[place.lat, place.lng]} zoom={12} scrollWheelZoom={false} className="w-full h-80">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[place.lat, place.lng]}>
        <Popup>
          <strong>{place.name}</strong>
          <br />
          {place.town}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
