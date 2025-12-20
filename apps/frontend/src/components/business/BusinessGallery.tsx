import Image from 'next/image';

interface BusinessGalleryProps {
  images: string[];
}

export default function BusinessGallery({ images }: BusinessGalleryProps) {
  if (!images.length) return null;

  return (
    <section>
      <p className="mb-3 text-sm font-semibold text-slate-700">Galería</p>
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image) => (
          <div key={image} className="relative h-48 overflow-hidden rounded-2xl">
            <Image src={image} alt="Foto del negocio" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
