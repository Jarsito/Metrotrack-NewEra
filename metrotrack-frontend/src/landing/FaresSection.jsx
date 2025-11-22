function FaresSection() {
  return (
    <section
      id="tarifas"
      className="border-b border-slate-800 bg-slate-950 py-10 md:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <header>
          <h2 className="text-2xl font-bold">Ejemplo de tarifas</h2>
          <p className="text-sm text-slate-400">
            Información referencial para mostrar cómo MetroTrack puede integrar
            tarifas y reglas de viaje.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold">Tarifa regular</h3>
            <p className="text-2xl font-bold text-emerald-300">S/ 2.50</p>
            <p className="text-xs text-slate-400">
              Monto referencial por viaje en el corredor troncal.
            </p>
          </div>

          <div className="rounded-xl border border-amber-500/50 bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold">Universitarios</h3>
            <p className="text-2xl font-bold text-amber-300">S/ 1.25</p>
            <p className="text-xs text-slate-400">
              Beneficio para estudiantes con tarjeta habilitada.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold">Integraciones</h3>
            <p className="text-xs text-slate-400">
              MetroTrack puede simular escenarios de integración con otros
              sistemas de transporte y estimar costo total del viaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaresSection;
