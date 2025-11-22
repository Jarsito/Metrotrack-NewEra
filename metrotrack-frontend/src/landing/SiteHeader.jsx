function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-emerald-500 to-sky-500 p-2 rounded-lg shadow-lg">
            <span className="text-xl font-bold text-white">M</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-black tracking-tight">
              MetroTrack
            </span>
            <span className="text-xs text-slate-400">
              Monitoreo en tiempo real del Metropolitano
            </span>
          </div>
        </div>

        {/* Menú simple */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#rutas" className="hover:text-emerald-400 transition-colors">
            Rutas
          </a>
          <a href="#mapa" className="hover:text-emerald-400 transition-colors">
            Mapa en tiempo real
          </a>
          <a href="#tarifas" className="hover:text-emerald-400 transition-colors">
            Tarifas
          </a>
        </nav>

        {/* Botón */}
        <a
          href="#mapa"
          className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
        >
          Ver mapa ahora
        </a>
      </div>
    </header>
  );
}

export default SiteHeader;
