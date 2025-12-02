interface Props {
  verified: boolean;
  fencedGarden: boolean;
  waterNearby: boolean;
  onChange: (values: { verified?: boolean; fencedGarden?: boolean; waterNearby?: boolean }) => void;
  onReset?: () => void;
}

type FilterKey = 'verified' | 'fencedGarden' | 'waterNearby';

const filters: Array<{ key: FilterKey; label: string; hint: string; icon: string }> = [
  { key: 'verified', label: 'Solo verificados', hint: 'Equipo Patas Navarricas', icon: '✅' },
  { key: 'fencedGarden', label: 'Con jardín vallado', hint: 'Ideal alojamientos', icon: '🌿' },
  { key: 'waterNearby', label: 'Agua cerca', hint: 'Rutas y rios', icon: '💧' },
];

export default function FiltersBar({ verified, fencedGarden, waterNearby, onChange, onReset }: Props) {
  const states: Record<FilterKey, boolean> = { verified, fencedGarden, waterNearby };
  const handleToggle = (key: FilterKey, checked: boolean) => {
    if (key === 'verified') onChange({ verified: checked });
    if (key === 'fencedGarden') onChange({ fencedGarden: checked });
    if (key === 'waterNearby') onChange({ waterNearby: checked });
  };
  const hasActive = verified || fencedGarden || waterNearby;

  return (
    <fieldset className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-soft backdrop-blur">
      <legend className="sr-only">Filtros avanzados</legend>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <label
            key={filter.key}
            className="group relative flex flex-1 min-w-[220px] items-center gap-3 rounded-2xl border border-brand-dark/10 bg-white/70 px-3 py-2 transition hover:border-brand-green/40 focus-within:border-brand-green/60"
          >
            <input
              type="checkbox"
              checked={states[filter.key]}
              onChange={(e) => handleToggle(filter.key, e.target.checked)}
              className="sr-only peer"
            />
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-dark/10 bg-white text-lg peer-checked:border-brand-green peer-checked:bg-brand-green peer-checked:text-white transition"
              aria-hidden
            >
              {filter.icon}
            </span>
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-brand-dark">{filter.label}</span>
              <span className="text-brand-dark/60 text-xs">{filter.hint}</span>
            </div>
            <span className="absolute right-3 text-[11px] uppercase tracking-wide text-brand-dark/40 peer-checked:text-brand-green">
              {states[filter.key] ? 'On' : 'Off'}
            </span>
          </label>
        ))}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            disabled={!hasActive}
            className="inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-dark/70 disabled:opacity-40 disabled:cursor-not-allowed hover:text-brand-dark"
          >
            <span aria-hidden>↺</span>
            Limpiar filtros
          </button>
        )}
      </div>
    </fieldset>
  );
}
