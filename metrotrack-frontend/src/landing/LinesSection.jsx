function LinesSection() {
  return (
    <section
      id="rutas"
      className="border-b border-slate-800 bg-slate-950 py-10 md:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold">Líneas y servicios</h2>
            <p className="text-sm text-slate-400">
              Ejemplo de cómo MetroTrack puede agrupar la información del
              Metropolitano.
            </p>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold text-emerald-300">Línea Troncal</h3>
            <p className="text-xs text-slate-300">
              Recorre el corredor principal del Metropolitano con alta
              frecuencia.
            </p>
            <p className="text-xs text-slate-400">
              Ejemplo: Naranjal – Plaza de Flores
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold text-sky-300">Alimentadoras</h3>
            <p className="text-xs text-slate-300">
              Rutas que conectan barrios y zonas periféricas con estaciones
              principales.
            </p>
            <p className="text-xs text-slate-400">
              Ejemplo: Rutas de Villa El Salvador
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold text-amber-300">Servicios rápidos</h3>
            <p className="text-xs text-slate-300">
              Servicios con menos paraderos para reducir tiempos de viaje.
            </p>
            <p className="text-xs text-slate-400">
              Ejemplo: Servicio expreso en hora punta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinesSection;
