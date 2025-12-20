import type { Business } from '@/types/business';
import BusinessGallery from './BusinessGallery';
import ReviewsSection from './ReviewsSection';

interface BusinessDetailProps {
  business: Business;
}

export default function BusinessDetail({ business }: BusinessDetailProps) {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-primary-500">{business.region}</p>
            <h1 className="text-3xl font-semibold text-slate-900">{business.name}</h1>
            <p className="text-slate-600">{business.description}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Política pet friendly</p>
            {business.petPolicy.fenced && <p>• Terreno vallado certificado.</p>}
            {business.petPolicy.extraFee && <p>• Suplemento: {business.petPolicy.extraFee}</p>}
            {business.petPolicy.weightLimit && <p>• Peso máximo: {business.petPolicy.weightLimit}kg</p>}
            {business.petPolicy.notes && <p>• {business.petPolicy.notes}</p>}
          </div>
        </div>
      </section>
      <BusinessGallery images={business.images ?? []} />
      <ReviewsSection business={business} />
    </div>
  );
}
