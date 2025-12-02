import { Helmet } from 'react-helmet-async';
import LeafletMap from '../components/LeafletMap';
import PlaceCard from '../components/PlaceCard';
import { placesService } from '../services/placesService';

export default function PlansPage() {
  const plans = placesService.list({ category: 'planes' });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-6">
      <Helmet>
        <title>Planes de fin de semana pet-friendly | Patas Navarricas</title>
        <meta
          name="description"
          content="Escapadas, visitas y experiencias de fin de semana en Navarra para disfrutar con tu perro."
        />
      </Helmet>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-dark/70">Inspiración</p>
          <h1 className="text-3xl font-bold">Planes pet-friendly</h1>
        </div>
        <p className="text-sm text-brand-dark/70">{plans.length} ideas</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {plans.map((plan) => (
            <PlaceCard key={plan.id} place={plan} />
          ))}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">Mapa</h3>
            {plans[0] ? <LeafletMap place={plans[0]} /> : <p>No hay planes disponibles.</p>}
          </div>
        </aside>
      </div>
    </div>
  );
}
