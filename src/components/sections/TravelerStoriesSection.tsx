'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

type Story = {
  id: number;
  title: string;
  protagonist: {
    petName: string;
    ownerName: string;
  };
  thesis: string;
  emotionalDetail: string;
  practicalTip: string;
  normativeNote: string;
  conclusion: string;
  image: string;
};

export default function TravelerStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);
  const {
    translations: { travelerStories },
  } = useLanguage();

  // Sample stories data - in a real implementation this would come from translations or an API
  const stories: Story[] = [
    {
      id: 1,
      title: "Patas Libres en la Cima del Buciero",
      protagonist: {
        petName: "Pipper",
        ownerName: "María"
      },
      thesis: "Después de meses de rutina urbana, necesitábamos encontrar un lugar donde Pipper pudiera correr sin restricciones y donde ambos pudiéramos respirar profundo.",
      emotionalDetail: "Fue en el mirador del Monte Buciero cuando sucedió: Pipper, después de ascender con entusiasmo cada tramo del camino, llegó a la cima y se detuvo. Miró hacia el Mar Cantábrico, con la bahía de Santander extendiéndose infinita ante nosotros.",
      practicalTip: "Lleva bastante agua para ambos—el ascenso es exigente especialmente en verano. La mejor época para esta ruta es primavera o principios de otoño.",
      normativeNote: "Aunque el sendero permite perros sueltos en la mayoría de los tramos, es recomendable mantenerlos con correa en zonas más transitadas para respetar a otros excursionistas.",
      conclusion: "Aquí recordamos que, a veces, lo más importante no es el destino, sino el compañerismo que encontramos en el camino.",
      image: "/images/monte_buciero.jpg"
    },
    {
      id: 2,
      title: "Al Filo de la Aventura: Juntos por el Cares",
      protagonist: {
        petName: "Toby",
        ownerName: "Carlos & Elena"
      },
      thesis: "Queríamos vivir la mítica Ruta del Cares, ese sendero que corta desfiladeros legendarios de los Picos de Europa. Pero con Toby a nuestro lado, necesitábamos planificar con cuidado y asegurarnos de que sería una aventura segura.",
      emotionalDetail: "Cuando llegamos al Puente de los Lebaniegos y comenzamos a caminar por el sendero, Toby parecía hipnotizado por el rugido constante del río Cares abajo. En uno de los miradores, se sentó a mi lado, y ambos contemplamos el paisaje vertical.",
      practicalTip: "La Ruta del Cares requiere precaución extra con perros. Lleva siempre la correa (obligatoria por ley), agua abundante, y come a mitad de trayecto para reponer fuerzas.",
      normativeNote: "Es obligatorio tener seguro de Responsabilidad Civil para circular con perros, especialmente en áreas protegidas. Mantén a tu perro SIEMPRE con correa en todo el trayecto.",
      conclusion: "Aquí aprendimos que las rutas más desafiantes también pueden ser las que más vínculos fortalecen.",
      image: "/images/ruta_cares.jpg"
    }
  ];

  const currentStory = stories[activeStory];

  return (
    <section className="bg-neutral-50 py-16" aria-labelledby="traveler-stories-title">
      <div className="container-page space-y-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wide text-primary-500">{travelerStories?.badge || 'Historias que inspiran'}</p>
          <h2 id="traveler-stories-title" className="text-3xl font-semibold text-neutral-900">{travelerStories?.title || 'Historias de Viajeros Pet Friendly'}</h2>
          <p className="text-neutral-600">{travelerStories?.description || 'Conoce experiencias reales de viajeros con sus mascotas en el norte de España'}</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg">
            <div className="mb-6">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src={currentStory.image}
                  alt={`Imagen de la historia: ${currentStory.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">{currentStory.title}</h3>
                <p className="text-neutral-600 mt-1">
                  Protagonistas: <span className="font-semibold">{currentStory.protagonist.petName}</span> y <span className="font-semibold">{currentStory.protagonist.ownerName}</span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary-600">La Tesis del Viaje:</h4>
                <p className="text-neutral-700">{currentStory.thesis}</p>
              </div>

              <div>
                <h4 className="font-semibold text-primary-600">El Detalle Emocional Clave:</h4>
                <p className="text-neutral-700 italic">&ldquo;{currentStory.emotionalDetail}&rdquo;</p>
              </div>

              <div>
                <h4 className="font-semibold text-primary-600">Consejo Práctico Esencial:</h4>
                <p className="text-neutral-700">{currentStory.practicalTip}</p>
              </div>

              <div>
                <h4 className="font-semibold text-primary-600">Nota Normativa:</h4>
                <p className="text-neutral-700">{currentStory.normativeNote}</p>
              </div>

              <div>
                <h4 className="font-semibold text-primary-600">Conclusión:</h4>
                <p className="text-neutral-700">{currentStory.conclusion}</p>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="flex gap-2">
                {stories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStory(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === activeStory ? 'bg-primary-600' : 'bg-neutral-300'
                    }`}
                    aria-label={`Ver historia ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="text-sm text-neutral-500">
                {activeStory + 1} de {stories.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
