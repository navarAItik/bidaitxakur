import type { POI } from '@/types/poi';
import BusinessGallery from '../business/BusinessGallery';
import ReviewsSection from '../business/ReviewsSection';

interface POIDetailProps {
  poi: POI;
}

export default function POIDetail({ poi }: POIDetailProps) {
  const { region, name, description, type, location, petRules, contact, images, verified, featured } = poi;

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-primary-500">{region} - {type}</p>
            <h1 className="text-3xl font-semibold text-slate-900">{name}</h1>
            <p className="text-slate-600">{description}</p>
            {location.town && <p className="text-sm text-slate-500">📍 {location.town}</p>}
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Reglas para mascotas</p>
            {petRules.allowed ? (
              <>
                <p className="text-green-600">✅ Permitidas</p>
                {petRules.maxPets && <p>• Máximo: {petRules.maxPets} mascotas</p>}
                {petRules.weightLimit && <p>• Peso máximo: {petRules.weightLimit}kg</p>}
                {petRules.extraFee && <p>• Suplemento: {petRules.extraFee}</p>}
                {petRules.typesAllowed && <p>• Tipos permitidos: {petRules.typesAllowed.join(', ')}</p>}
                {petRules.restrictions && petRules.restrictions.map((r, i) => <p key={i}>• {r}</p>)}
                {petRules.notes && <p>• {petRules.notes}</p>}
              </>
            ) : (
              <p className="text-red-600">❌ No permitidas</p>
            )}
          </div>
        </div>
        {contact && (
          <div className="mt-4 flex gap-4 text-sm">
            {contact.phone && <p>📞 {contact.phone}</p>}
            {contact.website && <a href={contact.website} className="text-blue-600 hover:underline">🌐 Sitio web</a>}
            {contact.email && <p>✉️ {contact.email}</p>}
          </div>
        )}
        <div className="mt-4 flex gap-2">
          {verified && <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">Verificado</span>}
          {featured && <span className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800">Destacado</span>}
        </div>
      </section>
      {images && images.length > 0 && <BusinessGallery images={images} />}
      <ReviewsSection business={poi as any} /> {/* Adaptar si es necesario */}
    </div>
  );
}