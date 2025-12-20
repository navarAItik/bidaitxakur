const sections = [
  {
    title: '1. MVP con plataformas existentes',
    bullets: [
      'Exporta datos a Google Sheets/CSV y crea capas en My Maps (playas, alojamientos, veterinarios).',
      'Aprovecha recursos externos como mapas de playas, QR del libro Dog Trip o el mapa de negocios de SrPerro.',
      'Define un flujo semanal de actualización para mantener la hoja sincronizada.',
    ],
  },
  {
    title: '2. Visor cartográfico propio',
    bullets: [
      'Stack sugerido: Next.js + react-leaflet/Mapbox y GeoJSON alojado en `/public/data` o un backend ligero.',
      'Componentes clave: filtros, leyenda, popups con CTA y jobs de sincronización.',
      'Roadmap: S1 playas + servicios críticos, S2 alojamientos, S3 rutas/normativa dinámica, S4 CRUD abierto a negocios.',
    ],
  },
  {
    title: '3. App / guía avanzada',
    bullets: [
      'React Native/Expo compartiendo backend; mapas offline y notificaciones (alertas de playa, eventos).',
      'Funciones: descargas regionales, alertas push, rutas guiadas, posible modo RA.',
      'Gobernanza: CMS central, moderadores regionales, métricas para priorizar contenido.',
    ],
  },
];

const nextSteps = [
  'Georreferenciar todos los recursos (lat/lon + atributos) y rellenar la hoja base.',
  'Publicar el My Maps embebido en `/mapa` y compartirlo con el equipo.',
  'Generar los primeros GeoJSON para arrancar el visor propio.',
  'Definir backlog de la app tras validar la respuesta del visor web.',
];

export default function MapRoadmapPage() {
  return (
    <div className="bg-white py-16">
      <div className="container-page space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary-500">Docs</p>
          <h1 className="text-4xl font-semibold text-slate-900">Roadmap del mapa pet friendly</h1>
          <p className="text-lg text-slate-600">
            Resumen operativo para lanzar el mapa en tres fases: aprovechar plataformas existentes, construir el visor
            propio y evolucionar hacia app/PWA avanzada.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-primary-500">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Próximos pasos</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {nextSteps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="text-primary-500">→</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
