import { SummaryCards } from "@/components/dashboard/summary-cards"
import { Appointments } from "@/components/dashboard/appointments"
import { QuickActions, PendingTasks } from "@/components/dashboard/dashboard-widgets"

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('es-MX', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  const weekday = new Date().toLocaleDateString('es-MX', { weekday: 'long' })

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Saludo y Fecha */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Buenos días, Dr. Hernandez
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Aquí está el resumen de tu clínica para hoy.
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl font-bold text-blue-700 dark:text-blue-400">{today}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{weekday}</p>
        </div>
      </div>
      
      {/* Tarjetas de Resumen */}
      <SummaryCards />

      {/* Grid Inferior: Citas y Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda (Ancha): Lista de Citas */}
        <div className="lg:col-span-2">
          <Appointments />
        </div>
        
        {/* Columna Derecha (Delgada): Acciones y Tareas */}
        <div className="space-y-6">
          <QuickActions />
          <PendingTasks />
        </div>
        
      </div>

    </div>
  )
}