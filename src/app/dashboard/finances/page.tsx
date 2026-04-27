import { ArrowUpRight, ArrowDownRight, Plus, CreditCard, User, Package, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos mockeados para la Actividad Reciente
const RECENT_ACTIVITY = [
  {
    id: 1,
    entity: "Sarah Jenkins",
    description: "Tratamiento Endodoncia",
    amount: "+$850.00",
    isIncome: true,
    time: "Hoy, 10:30 AM",
    Icon: User,
  },
  {
    id: 2,
    entity: "Dental Supply Co.",
    description: "Insumos Mensuales",
    amount: "-$1,240.50",
    isIncome: false,
    time: "Ayer",
    Icon: Package,
  },
  {
    id: 3,
    entity: "Michael Chang",
    description: "Limpieza de Rutina",
    amount: "+$150.00",
    isIncome: true,
    time: "Ayer",
    Icon: User,
  },
  {
    id: 4,
    entity: "Tech Repair Services",
    description: "Mantenimiento Rayos X",
    amount: "-$450.00",
    isIncome: false,
    time: "12 Abr",
    Icon: Wrench,
  },
]

export default function FinancesPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Resumen Financiero</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Gestiona los ingresos, gastos y transacciones de la clínica.
          </p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none bg-white dark:bg-slate-900 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Registrar Gasto
          </Button>
          <Button className="flex-1 sm:flex-none bg-[#0b5bb0] hover:bg-[#094a90] text-white flex items-center gap-2 shadow-md">
            <CreditCard className="w-4 h-4" /> Registrar Cobro
          </Button>
        </div>
      </div>

      {/* Tarjetas Superiores (Ingresos y Gastos) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tarjeta de Ingresos */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-1.5 rounded-lg">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-700 dark:text-slate-300">Ingresos</h3>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$42,500.00</h2>
          <p className="text-sm font-medium">
            <span className="text-teal-600 dark:text-teal-400">+12%</span> <span className="text-slate-500 dark:text-slate-400">vs mes pasado</span>
          </p>
          {/* Mini gráfica decorativa de fondo */}
          <ArrowUpRight className="absolute right-[-10%] bottom-[-20%] w-48 h-48 text-slate-50 dark:text-slate-800/50 -z-10" />
        </div>

        {/* Tarjeta de Gastos */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 p-1.5 rounded-lg">
              <ArrowDownRight className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-700 dark:text-slate-300">Gastos</h3>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$14,230.50</h2>
          <p className="text-sm font-medium">
            <span className="text-red-500">+3%</span> <span className="text-slate-500 dark:text-slate-400">vs mes pasado</span>
          </p>
          {/* Mini gráfica decorativa de fondo */}
          <ArrowDownRight className="absolute right-[-10%] bottom-[-20%] w-48 h-48 text-slate-50 dark:text-slate-800/50 -z-10" />
        </div>

      </div>

      {/* Grid Inferior (Gráfica y Actividad) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda: Gráfica Simulada */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Comparativa Mensual</h3>
            <Button variant="outline" size="sm" className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              Últimos 6 Meses
            </Button>
          </div>
          
          {/* Gráfica Mágica con CSS */}
          <div className="flex-1 relative min-h-[250px] flex items-end pt-10 pb-8 pr-4">
            
            {/* Eje Y (Etiquetas y líneas horizontales) */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400 font-medium pb-8 pr-4">
              <div className="flex items-center gap-4 w-full h-0"><span className="w-8 text-right">50k</span><div className="flex-1 border-b border-slate-100 dark:border-slate-800"></div></div>
              <div className="flex items-center gap-4 w-full h-0"><span className="w-8 text-right">25k</span><div className="flex-1 border-b border-slate-100 dark:border-slate-800"></div></div>
              <div className="flex items-center gap-4 w-full h-0"><span className="w-8 text-right">0</span><div className="flex-1 border-b border-slate-200 dark:border-slate-700"></div></div>
            </div>

            {/* Barras del Gráfico */}
            <div className="relative z-10 w-full h-full flex justify-between items-end pl-12 pr-4">
              {/* Enero */}
              <div className="flex gap-1.5 items-end h-full w-12 group">
                <div className="w-full bg-[#0b5bb0] rounded-t-sm h-[40%] group-hover:opacity-80 transition-opacity"></div>
                <div className="w-full bg-cyan-400 dark:bg-cyan-500 rounded-t-sm h-[30%] group-hover:opacity-80 transition-opacity"></div>
              </div>
              {/* Febrero */}
              <div className="flex gap-1.5 items-end h-full w-12 group">
                <div className="w-full bg-[#0b5bb0] rounded-t-sm h-[55%] group-hover:opacity-80 transition-opacity"></div>
                <div className="w-full bg-cyan-400 dark:bg-cyan-500 rounded-t-sm h-[45%] group-hover:opacity-80 transition-opacity"></div>
              </div>
              {/* Marzo */}
              <div className="flex gap-1.5 items-end h-full w-12 group">
                <div className="w-full bg-[#0b5bb0] rounded-t-sm h-[50%] group-hover:opacity-80 transition-opacity"></div>
                <div className="w-full bg-cyan-400 dark:bg-cyan-500 rounded-t-sm h-[20%] group-hover:opacity-80 transition-opacity"></div>
              </div>
              {/* Abril (Actual) */}
              <div className="flex gap-1.5 items-end h-full w-12 group">
                <div className="w-full bg-[#0b5bb0] rounded-t-sm h-[85%] group-hover:opacity-80 transition-opacity"></div>
                <div className="w-full bg-cyan-400 dark:bg-cyan-500 rounded-t-sm h-[35%] group-hover:opacity-80 transition-opacity"></div>
              </div>
            </div>
            
            {/* Eje X (Meses) */}
            <div className="absolute bottom-0 left-12 right-4 flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="w-12 text-center">Ene</span>
              <span className="w-12 text-center">Feb</span>
              <span className="w-12 text-center">Mar</span>
              <span className="w-12 text-center text-blue-600 dark:text-blue-400">Abr</span>
            </div>
          </div>

          {/* Leyenda */}
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              <div className="w-3 h-3 rounded-full bg-[#0b5bb0]"></div> Ingresos
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              <div className="w-3 h-3 rounded-full bg-cyan-400 dark:bg-cyan-500"></div> Gastos
            </div>
          </div>
        </div>

        {/* Columna Derecha: Actividad Reciente */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Actividad Reciente</h3>
            <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
              Ver Todo
            </button>
          </div>

          <div className="space-y-5">
            {RECENT_ACTIVITY.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors">
                    <activity.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm leading-tight mb-0.5">{activity.entity}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{activity.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-sm leading-tight mb-0.5 ${activity.isIncome ? "text-teal-600 dark:text-teal-400" : "text-slate-900 dark:text-white"}`}>
                    {activity.amount}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}