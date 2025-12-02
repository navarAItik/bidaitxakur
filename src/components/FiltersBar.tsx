interface Props {
  verified: boolean;
  fencedGarden: boolean;
  waterNearby: boolean;
  onChange: (values: { verified?: boolean; fencedGarden?: boolean; waterNearby?: boolean }) => void;
}

export default function FiltersBar({ verified, fencedGarden, waterNearby, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center text-sm bg-white p-3 rounded-lg border border-brand-dark/5 shadow-sm">
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={verified}
          onChange={(e) => onChange({ verified: e.target.checked })}
          className="accent-brand-green"
        />
        Pet-friendly verificado
      </label>
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={fencedGarden}
          onChange={(e) => onChange({ fencedGarden: e.target.checked })}
          className="accent-brand-green"
        />
        Jardín vallado (alojamientos)
      </label>
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={waterNearby}
          onChange={(e) => onChange({ waterNearby: e.target.checked })}
          className="accent-brand-green"
        />
        Zona de agua cercana
      </label>
    </div>
  );
}
