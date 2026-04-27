import { UserPlus, FileText, ClipboardPen, PackageSearch } from "lucide-react"

export function QuickActions() {
  return (
    <div className="bg-slate-50/50 dark:bg-slate-900/20 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="font-bold text-slate-900 dark:text-white mb-4">Acciones rápidas</h3>
      <div className="grid grid-cols-2 gap-3">
        
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
          <UserPlus className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Nuevo Paciente</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
          <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Factura</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
          <ClipboardPen className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Receta</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
          <PackageSearch className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Inventario</span>
        </button>

      </div>
    </div>
  )
}

export function PendingTasks() {
  return (
    <div className="bg-slate-50/50 dark:bg-slate-900/20 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tareas pendientes</h3>
      <div className="space-y-3">
        
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="mt-0.5 w-4 h-4 rounded border border-slate-300 dark:border-slate-600 group-hover:border-blue-500 transition-colors shrink-0"></div>
          <div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight">Revisar resultados de laboratorio de M. Muro</p>
            <p className="text-xs text-red-500 font-semibold mt-1">Alta Prioridad</p>
          </div>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="mt-0.5 w-4 h-4 rounded border border-slate-300 dark:border-slate-600 group-hover:border-blue-500 transition-colors shrink-0"></div>
          <div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight">Firmar factura de orden de suministro</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Vence hoy</p>
          </div>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="mt-0.5 w-4 h-4 rounded border border-slate-300 dark:border-slate-600 group-hover:border-blue-500 transition-colors shrink-0"></div>
          <div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight">Llamar a TI para actualizar el software de rayos X</p>
          </div>
        </label>

      </div>
    </div>
  )
}