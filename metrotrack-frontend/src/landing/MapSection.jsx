import Mapa from "../components/mapa/Mapa";

function MapSection() {
  return (
    <section
      id="mapa"
      className="border-b border-slate-800 bg-slate-900 py-10 md:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold">Mapa en tiempo real</h2>
            <p className="text-sm text-slate-400">
              Vista integrada del mapa Leaflet utilizado por MetroTrack.
            </p>
          </div>
          <p className="text-xs text-slate-500 max-w-xs">
            Esta vista puede usar una ruta por defecto (por ejemplo, la 1). En
            el panel avanzado se pueden habilitar más filtros.
          </p>
        </header>

        <div className="h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
          {/* Ruta fija de ejemplo; puedes cambiar el ID según tus datos */}
          <Mapa rutaId={1} />
        </div>
      </div>
    </section>
  );
}

export default MapSection;
