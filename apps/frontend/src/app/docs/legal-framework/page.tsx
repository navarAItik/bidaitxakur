import Link from 'next/link';

const privacyChecklist = [
  {
    title: 'Protección de datos y cookies',
    items: [
      'Banner de consentimiento granular con registro de preferencias.',
      'Política de privacidad y de cookies accesible en todo momento.',
      'Contrato de encargo de tratamiento con proveedores analíticos o de email marketing.',
    ],
  },
  {
    title: 'Normativa de bienestar animal (España)',
    items: [
      'Referencia a la Ley 7/2023 (seguro, formación y documentación obligatoria).',
      'Aviso sobre requisitos de microchip, cartilla sanitaria y licencia PPP.',
      'Recordatorio de restricciones en playas, transporte y hostelería.',
    ],
  },
  {
    title: 'Transparencia comercial',
    items: [
      'Aviso legal con datos fiscales y términos de uso.',
      'Declaración de enlaces de afiliación y colaboraciones pagadas.',
      'Procedimiento para actualizar información de terceros y corregir incidencias.',
    ],
  },
];

const resources = [
  {
    title: 'Plantilla de Aviso Legal + Política de Privacidad (ES)',
    description:
      'Incluye cláusulas para marketplaces, newsletters, afiliación y almacenamiento en la nube.',
    href: 'https://www.aepd.es/guias/modelos',
  },
  {
    title: 'Guía rápida sobre la Ley 7/2023 de Bienestar Animal',
    description:
      'Resumen de obligaciones para propietarios, empresas turísticas y territorios forales del norte.',
    href: 'https://www.boe.es/eli/es/l/2023/03/28/7',
  },
  {
    title: 'Checklist de cookies y consentimiento (AEPD)',
    description: 'Requisitos técnicos y de diseño aprobados por la Agencia Española de Protección de Datos.',
    href: 'https://www.aepd.es/guias/guia-cookies',
  },
];

export const metadata = {
  title: 'Marco legal y cookies | Bidai Txakur',
  description:
    'Requisitos legales básicos para la plataforma pet friendly del norte de España: privacidad, bienestar animal y transparencia comercial.',
};

export default function LegalFrameworkPage() {
  return (
    <div className="bg-white py-16">
      <div className="container-page space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary-500">Docs</p>
          <h1 className="text-4xl font-semibold text-slate-900">Marco legal y cookies</h1>
          <p className="text-lg text-slate-600">
            Guía práctica para mantener la plataforma 100 % alineada con RGPD/LOPDGDD, la Ley 7/2023 de Bienestar Animal
            y las obligaciones comerciales básicas de un marketplace turístico.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {privacyChecklist.map((block) => (
            <article key={block.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{block.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Recursos oficiales y plantillas</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600"
              >
                <h3 className="text-base font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-2">{resource.description}</p>
                <Link
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-flex items-center gap-1 text-primary-700 underline-offset-4 hover:underline"
                >
                  Abrir recurso
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 text-sm text-amber-900">
          <h2 className="text-xl font-semibold text-amber-900">Recordatorio operativo</h2>
          <p className="mt-2">
            El consentimiento debe registrarse (versión y fecha), las políticas deben estar accesibles desde el pie y es
            recomendable documentar las fuentes de terceros (mapas, feeds de podcasts, listados) para responder ante
            cualquier reclamación.
          </p>
        </section>
      </div>
    </div>
  );
}
