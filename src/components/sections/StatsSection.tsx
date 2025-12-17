'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Negocios verificados', value: 218, suffix: '+', color: 'text-emerald-500' },
  { label: 'Filtros expertos', value: 52, suffix: '+', color: 'text-sky-400' },
  { label: 'Entrevistas legales', value: 140, suffix: '+', color: 'text-amber-400' },
  { label: 'Usuarios en lista espera', value: 2800, suffix: '+', color: 'text-fuchsia-400' },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-900 py-16 text-white">
      <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className={`text-4xl font-bold ${stat.color}`}>
              {visible ? stat.value : 0}
              {stat.suffix}
            </p>
            <p className="text-sm uppercase tracking-wide text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
