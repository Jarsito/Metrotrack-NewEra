function Hero() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-slate-900/80 px-3 py-1 text-xs font-medium text-emerald-300">
            🚇 Proyecto universitario · Metro de Lima
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Monitorea el{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Metropolitano
            </span>{" "}
            en tiempo real.
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            MetroTrack es una plataforma web desarrollada con React, Leaflet y
            Node.js para visualizar la operación del sistema de transporte
            Metropolitano mediante geolocalización en tiempo real.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 border border-slate-700">
              🛰️ Geolocalización de unidades
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 border border-slate-700">
              🗺️ Visualización de rutas
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 border border-slate-700">
              📊 Panel para análisis de operación
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl">
            <p className="text-xs font-semibold text-emerald-300 mb-1">
              Vista previa
            </p>
            <p className="text-sm text-slate-200 mb-3">
              Integración del motor de mapas con la base de datos del
              Metropolitano para simular el flujo de buses en tiempo real.
            </p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• Rutas troncales y alimentadoras</li>
              <li>• Estado operativo de las unidades</li>
              <li>• Filtros por ruta y paradero</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
