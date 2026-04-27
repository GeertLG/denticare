import Link from "next/link"
import { LayoutDashboard, Calendar, Users, Settings, LogOut, Plus, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/20 hidden md:flex flex-col h-screen sticky top-0">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">DentiCare</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Clínica Odontológica</span>
          </div>
        </div>
      </div>

      <div className="p-4 shrink-0">
        <Button className="w-full bg-[#0b5bb0] hover:bg-[#094a90] text-white shadow-md flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nueva Cita
        </Button>
      </div>

      {/* Menú Principal */}
      <div className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 font-medium transition-colors">
          <LayoutDashboard className="w-5 h-5" />
          Tablero
        </Link>
        <Link href="/dashboard/calendar" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 font-medium transition-colors">
          <Calendar className="w-5 h-5" />
          Calendario
        </Link>
        <Link href="/dashboard/patients" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 font-medium transition-colors">
          <Users className="w-5 h-5" />
          Pacientes
        </Link>
        <Link href="/dashboard/finances" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 font-medium transition-colors">
          <DollarSign className="w-5 h-5" />
          Finanzas
        </Link>
      </div>

      {/* Footer del Menú */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-1 shrink-0">
        <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 font-medium transition-colors">
          <Settings className="w-5 h-5" />
          Configuración
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 font-medium transition-colors">
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}