function StatusSection() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-center justify-between">
        <span className="font-semibold uppercase tracking-wide">
          Estado del servicio
        </span>
        <span className="text-xs sm:text-sm">
          🟢 Operación normal en el corredor troncal.  
          🔶 Demora moderada en horas punta.
        </span>
      </div>
    </div>
  );
}

export default StatusSection;
