'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const {
    translations: {
      home: { stats },
    },
  } = useLanguage();

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
