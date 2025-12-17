import { TRUST_BADGES } from '@/lib/constants';

export default function TrustBadges() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TRUST_BADGES.map((badge) => (
          <div key={badge.label} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{badge.label}</p>
            <p className="text-sm text-slate-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
