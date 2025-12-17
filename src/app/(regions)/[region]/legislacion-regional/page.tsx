import { notFound } from 'next/navigation';
import { REGION_DATA } from '@/lib/constants';

interface Params {
  params: { region: string };
}

export default function RegionLegalPage({ params }: Params) {
  const region = REGION_DATA.find((item) => item.slug === params.region);
  if (!region || region.slug === 'norte') {
    notFound();
  }

  return (
    <div className="bg-white py-12">
      <div className="container-page space-y-4">
        <p className="text-sm uppercase tracking-wide text-primary-500">Normativa</p>
        <h1 className="text-3xl font-semibold text-slate-900">Legislación pet friendly en {region.name}</h1>
        <p className="text-slate-600">Real Decreto 1021/2022 + ordenanzas municipales aplicables.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Transporte público: horarios recomendados y tamaños.</li>
          <li>Hostelería: protocolo de acceso y cartelería oficial.</li>
          <li>Playas: calendario por temporada + recursos oficiales.</li>
        </ul>
      </div>
    </div>
  );
}
