import { Users, Wallet, UserPlus, TrendingUp, Minus } from "lucide-react"

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Tarjeta 1: Pacientes de Hoy */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Pacientes de Hoy
            </p>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">24</h3>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl text-blue-600 dark:text-blue-400">
            <Users className="w-6 h-6" />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-sm text-teal-600 dark:text-teal-400 font-medium">
          <TrendingUp className="w-4 h-4" />
          <span>+3 desde ayer</span>
        </div>
      </div>

      {/* Tarjeta 2: Ingresos Semanales (Con Mini Gráfica) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Ingresos Semanales
            </p>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">$12,450</h3>
          </div>
          <div className="bg-teal-100 dark:bg-teal-900/40 p-3 rounded-xl text-teal-600 dark:text-teal-400">
            <Wallet className="w-6 h-6" />
          </div>
        </div>
        
        {/* Fila inferior: Porcentaje + Mini Gráfica de Barras */}
        <div className="mt-4 flex items-end justify-between">
          <div className="flex items-center gap-1.5 text-sm text-teal-600 dark:text-teal-400 font-medium mb-1">
            <TrendingUp className="w-4 h-4" />
            <span>+8% vs semana pasada</span>
          </div>
          <div className="flex items-end gap-1 h-8 w-24">
            <div className="flex-1 bg-teal-500/80 dark:bg-teal-400/80 rounded-t-sm h-[30%]"></div>
            <div className="flex-1 bg-teal-500/80 dark:bg-teal-400/80 rounded-t-sm h-[50%]"></div>
            <div className="flex-1 bg-teal-500/80 dark:bg-teal-400/80 rounded-t-sm h-[40%]"></div>
            <div className="flex-1 bg-teal-500/80 dark:bg-teal-400/80 rounded-t-sm h-[60%]"></div>
            <div className="flex-1 bg-teal-500/80 dark:bg-teal-400/80 rounded-t-sm h-[70%]"></div>
            <div className="flex-1 bg-teal-500/80 dark:bg-teal-400/80 rounded-t-sm h-[90%]"></div>
            <div className="flex-1 bg-teal-500/80 dark:bg-teal-400/80 rounded-t-sm h-[80%]"></div>
          </div>
        </div>
      </div>

      {/* Tarjeta 3: Nuevas Consultas */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Nuevas Consultas
            </p>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">5</h3>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-slate-600 dark:text-slate-400">
            <UserPlus className="w-6 h-6" />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <Minus className="w-4 h-4" />
          <span>Mismo que ayer</span>
        </div>
      </div>

    </div>
  )
}