import { Helmet } from 'react-helmet-async';
import LeafletMap from '../components/LeafletMap';
import PlaceCard from '../components/PlaceCard';
import { placesService } from '../services/placesService';
import { Place } from '../types/place';

export default function RoutesPage() {
  const routes = placesService.list({ category: 'rutas' });
  const waterSpots = placesService.list({ category: 'rios' });
  const combined: Place[] = [...routes, ...waterSpots];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-6">
      <Helmet>
        <title>Rutas y zonas de agua pet-friendly | Patas Navarricas</title>
        <meta
          name="description"
          content="Rutas, paseos y zonas de agua en Navarra donde tu perro es bienvenido, con mapa y consejos."
        />
      </Helmet>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-dark/70">Aire libre</p>
          <h1 className="text-3xl font-bold">Rutas y agua</h1>
        </div>
        <p className="text-sm text-brand-dark/70">{combined.length} lugares</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {combined.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">Mapa</h3>
            {combined[0] ? <LeafletMap place={combined[0]} /> : <p>Pronto añadiremos rutas.</p>}
          </div>
        </aside>
      </div>
    </div>
  );
}
