function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-6 text-xs text-slate-500 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
        <span>
          © {new Date().getFullYear()} MetroTrack – Proyecto universitario.
        </span>
        <span className="text-[11px]">
          Desarrollado con React, Leaflet, Node.js y SQL Server.
        </span>
      </div>
    </footer>
  );
}

export default SiteFooter;
