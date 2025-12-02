import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import LeafletMap from '../components/LeafletMap';
import { placesService } from '../services/placesService';

export default function PlacePage() {
  const { id } = useParams<{ id: string }>();
  const place = id ? placesService.getById(id) : undefined;

  if (!place) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <p>No encontramos este lugar. Vuelve al <Link to="/directorio">directorio</Link>.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-6">
      <Helmet>
        <title>{place.name} | Patas Navarricas</title>
        <meta name="description" content={`${place.name} en ${place.town}. ${place.description}`} />
      </Helmet>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-brand-dark/70">{place.category} · {place.town}</p>
        <h1 className="text-3xl font-bold">{place.name}</h1>
        <div className="flex flex-wrap gap-2 text-sm">
          {place.sponsored && <span className="px-2 py-1 rounded bg-amber-200">Patrocinado</span>}
          {place.featured && <span className="px-2 py-1 rounded bg-emerald-100 text-brand-dark">Destacado</span>}
          {place.verified && <span className="px-2 py-1 rounded bg-sky-100">Verificado</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <p className="leading-relaxed text-brand-dark/90">{place.description}</p>
          <div className="space-y-2 text-sm">
            {place.address && <p><strong>Dirección:</strong> {place.address}</p>}
            <p><strong>Localidad:</strong> {place.town} ({place.province})</p>
            {place.phone && <p><strong>Teléfono:</strong> <a href={`tel:${place.phone}`}>{place.phone}</a></p>}
            {place.website && (
              <p>
                <strong>Web:</strong>{' '}
                <a className="text-brand-green font-semibold" href={place.website} target="_blank" rel="noreferrer">
                  {place.website}
                </a>
              </p>
            )}
            {place.hours && <p><strong>Horario:</strong> {place.hours}</p>}
          </div>
          <div className="space-y-1 text-sm">
            <p>
              <strong>Política pet:</strong> {place.petPolicy.allowed ? 'Admite perros.' : 'No admite perros.'}
            </p>
            {place.petPolicy.notes && <p className="text-brand-dark/80">{place.petPolicy.notes}</p>}
          </div>
          {place.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 text-xs">
              {place.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 rounded-full bg-brand-green/10 text-brand-dark">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {place.affiliate && (
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm">
              <p className="font-semibold">Reserva con beneficio</p>
              <p>
                <a className="underline" href={place.affiliate.url} target="_blank" rel="noreferrer">
                  Ir a {place.affiliate.provider}
                </a>{' '}
                · {place.affiliate.disclaimer}
              </p>
            </div>
          )}
        </div>
        <aside className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
            <h3 className="font-semibold mb-2">Mapa</h3>
            <LeafletMap place={place} />
          </div>
          <div className="bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm space-y-2 text-sm">
            <h3 className="font-semibold">Acciones rápidas</h3>
            {place.phone && (
              <a className="block text-brand-green" href={`tel:${place.phone}`}>
                Llamar ahora
              </a>
            )}
            {place.website && (
              <a className="block text-brand-green" href={place.website} target="_blank" rel="noreferrer">
                Visitar web
              </a>
            )}
            <Link className="block text-brand-dark underline" to="/sugerir">
              Notificar cambios
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
