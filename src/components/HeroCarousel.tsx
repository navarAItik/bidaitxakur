import { useEffect, useMemo, useState } from 'react';

const heroImages = [
  '/images/alvan-nee-FHl79chXS6s-unsplash.jpg',
  '/images/jametlene-reskp-hGKXqee3Zxw-unsplash.jpg',
  '/images/tahoe-mr58GkEDKMI-unsplash.jpg',
  '/images/ron-fung-VQJXJ4IaU_o-unsplash.jpg',
  '/images/camilo-fierro-z7rcwqCi77s-unsplash.jpg',
  '/images/eugene-chystiakov-kdFDewk4uHU-unsplash.jpg',
  '/images/lukas-parnican-jwn8ZsPS_uw-unsplash.jpg',
];

const quotes = [
  {
    quote: 'La felicidad es un cachorro caliente.',
    author: 'Charles M. Schulz (1922–2000)',
  },
  {
    quote: 'Los perros no son toda nuestra vida, pero hacen que nuestra vida esté completa.',
    author: 'Roger Caras (1928–1999)',
  },
  {
    quote: 'El perro es un caballero; espero ir al cielo de los perros, no al de los hombres.',
    author: 'Mark Twain (1835–1910)',
  },
  {
    quote:
      'Si un perro no viene contigo después de mirarte a la cara, deberías irte a casa y examinar tu conciencia.',
    author: 'Woodrow Wilson (1856–1924)',
  },
  {
    quote: 'Un perro es lo único en la tierra que te quiere más de lo que se quiere a sí mismo.',
    author: 'Josh Billings (1818–1885)',
  },
  {
    quote:
      'El mayor miedo que conocen los perros es el temor a que no regreses cuando sales por la puerta sin ellos.',
    author: 'Stanley Coren (1947–presente)',
  },
  {
    quote: 'Si pudiera ser la mitad de buena persona que mi perro, sería el doble de humano de lo que soy.',
    author: 'Charles M. Schulz (1922–2000)',
  },
  {
    quote: 'El amor de un perro es una bendición pura que nos recuerda lo que realmente importa.',
    author: 'Anónimo',
  },
  {
    quote: 'Un perro es el camino más corto hacia el paraíso.',
    author: 'Federico García Lorca (1898–1936)',
  },
  {
    quote:
      'Los perros son ángeles con patas peludas enviados a la tierra para enseñarnos cómo amar incondicionalmente.',
    author: 'Anónimo',
  },
  {
    quote: 'El mejor amigo del hombre no es solo un título; es una promesa que los perros cumplen todos los días.',
    author: 'Anónimo',
  },
  {
    quote:
      'Cuando un perro te mira a los ojos, ya sea grande o pequeño, joven o viejo, ese momento contiene todo el amor del universo.',
    author: 'Charlie D. Williams (1923–1999)',
  },
  {
    quote: 'Un perro puede decir más con su cola en segundos que un filósofo en un libro entero.',
    author: 'Anónimo',
  },
  {
    quote: 'Los perros tienen un radar especial para detectar las emociones humanas; siempre saben cuándo necesitas un abrazo.',
    author: 'Anónimo',
  },
  {
    quote: 'Quien ha amado a un perro nunca estará completamente solo en el mundo.',
    author: 'Anónimo',
  },
];

const slides = quotes.map((quote, index) => ({
  ...quote,
  src: heroImages[index % heroImages.length],
}));

const intervalMs = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const current = useMemo(() => slides[index], [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [count]);

  const goTo = (next: number) => {
    if (next < 0) {
      setIndex(count - 1);
      return;
    }
    setIndex(next % count);
  };

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-brand-night/50 shadow-soft pb-12">
        <img
          className="h-72 w-full object-cover sm:h-[22rem]"
          src={current.src}
          alt={current.quote}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-night/80 via-brand-night/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-14 px-5 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Citas perrunas</p>
          <blockquote className="text-xl font-display font-semibold leading-snug">
            “{current.quote}”
          </blockquote>
          <cite className="mt-1 block text-sm text-white/80">— {current.author}</cite>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-between px-4 text-white">
          <button
            type="button"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-lg hover:bg-white/40 transition"
            onClick={() => goTo((index - 1 + count) % count)}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-lg hover:bg-white/40 transition"
            onClick={() => goTo(index + 1)}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-1">
        {slides.map((_, dotIndex) => (
          <button
            key={`slide-dot-${dotIndex}`}
            type="button"
            onClick={() => goTo(dotIndex)}
            className={`h-1.5 rounded-full transition ${
              index === dotIndex ? 'w-6 bg-brand-dark' : 'w-3 bg-brand-dark/30 hover:bg-brand-dark/60'
            }`}
            aria-label={`Ir a la imagen ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
