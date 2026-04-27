import { ChevronLeft, ChevronRight, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CalendarPage() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col max-w-7xl mx-auto">
      
      {/* Header del Calendario */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Calendario</h1>
          <div className="hidden sm:flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button className="px-4 py-1.5 text-sm font-semibold bg-white dark:bg-slate-900 shadow-sm rounded-md text-slate-900 dark:text-white">Semanal</button>
            <button className="px-4 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Mensual</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500"><ChevronLeft className="w-4 h-4" /></Button>
            <span className="font-semibold text-slate-900 dark:text-white min-w-[120px] text-center">Octubre 2026</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500"><ChevronRight className="w-4 h-4" /></Button>
          </div>
          <Button variant="outline" className="bg-white dark:bg-slate-900 h-9">Hoy</Button>
          <Button variant="outline" size="icon" className="bg-white dark:bg-slate-900 h-9"><Filter className="w-4 h-4" /></Button>
        </div>
      </div>

      {/* Contenedor Principal (Sidebar + Grid) */}
      <div className="flex flex-1 gap-6 min-h-0">
        
        {/* SIDEBAR IZQUIERDO (Filtros) */}
        <div className="w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex-col gap-8 hidden lg:flex overflow-y-auto">
          
          {/* Especialistas */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Especialistas</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <div className="w-6 h-6 rounded bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">AT</div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Dr. A. Torres</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-teal-500 focus:ring-teal-500" />
                <div className="w-6 h-6 rounded bg-teal-400 text-white text-[10px] font-bold flex items-center justify-center">JP</div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Dr. J. Pérez</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-slate-600 focus:ring-slate-500" />
                <div className="w-6 h-6 rounded bg-slate-500 text-white text-[10px] font-bold flex items-center justify-center">MR</div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Dra. M. Rivera</span>
              </label>
            </div>
          </div>

          {/* Sillones */}
          <div className="mt-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Sillones</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Sillón 1 (Higiene)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Sillón 2 (General)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Sillón 3 (Cirugía)</span>
              </label>
            </div>
          </div>
        </div>

        {/* GRID DEL CALENDARIO */}
        <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-sm">
          
          {/* Cabecera de Días */}
          <div className="grid grid-cols-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 shrink-0">
            <div className="p-3 border-r border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
              {/* Espacio vacío esquina */}
            </div>
            {/* Lunes */}
            <div className="p-3 border-r border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs font-bold text-slate-500 uppercase">Lun</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">16</p>
            </div>
            {/* Martes (Día actual) */}
            <div className="p-3 border-r border-slate-200 dark:border-slate-800 text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <p className="text-xs font-bold text-blue-600 uppercase">Mar</p>
              <div className="w-8 h-8 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mt-0.5">17</div>
            </div>
            {/* Miércoles */}
            <div className="p-3 border-r border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs font-bold text-slate-500 uppercase">Mié</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">18</p>
            </div>
            {/* Jueves */}
            <div className="p-3 border-r border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs font-bold text-slate-500 uppercase">Jue</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">19</p>
            </div>
            {/* Viernes */}
            <div className="p-3 text-center">
              <p className="text-xs font-bold text-slate-500 uppercase">Vie</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">20</p>
            </div>
          </div>

          {/* Cuerpo del Calendario (Scrollable) */}
          <div className="flex-1 overflow-y-auto relative bg-slate-50/20 dark:bg-slate-900/10">
            
            {/* Líneas de Horas (Fondo) */}
            <div className="absolute inset-0 grid grid-cols-6 z-0">
              {/* Columna de Horas */}
              <div className="border-r border-slate-200 dark:border-slate-800">
                {["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"].map((time) => (
                  <div key={time} className="h-24 border-b border-slate-100 dark:border-slate-800/50 p-2 text-right">
                    <span className="text-xs font-semibold text-slate-400">{time}</span>
                  </div>
                ))}
              </div>
              {/* 5 Columnas de días */}
              {[1, 2, 3, 4, 5].map((col) => (
                <div key={col} className="border-r border-slate-200 dark:border-slate-800">
                  {[1, 2, 3, 4, 5, 6, 7].map((row) => (
                     <div key={row} className="h-24 border-b border-slate-100 dark:border-slate-800/50"></div>
                  ))}
                </div>
              ))}
            </div>

            {/* EVENTOS (Las tarjetas de citas) */}
            <div className="absolute inset-0 grid grid-cols-6 z-10 pointer-events-none">
              <div className="col-start-2 relative pointer-events-auto">
                {/* Lunes: Sarah Jenkins (8:15 - 9:00) -> top 25%, height 75% de la celda de 8AM */}
                <div className="absolute top-[24px] left-1 right-1 h-[72px] bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 rounded p-1.5 shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                  <p className="text-[10px] font-bold text-teal-700 dark:text-teal-400">08:15 - 09:00</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Sarah Jenkins</p>
                  <p className="text-[10px] text-teal-600 dark:text-teal-500 truncate">Limpieza de rutina</p>
                </div>
                
                {/* Lunes: Michael Chang (9:15 - 10:30) -> top 96px + 24px = 120px, height 120px */}
                <div className="absolute top-[120px] left-1 right-1 h-[120px] bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 rounded p-2 shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                  <p className="text-[10px] font-bold text-red-700 dark:text-red-400">09:15 - 10:30</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight mt-0.5">Michael Chang</p>
                  <p className="text-[10px] text-red-600 dark:text-red-500 truncate">Endodoncia • Dr. Smith</p>
                </div>
              </div>

              <div className="col-start-3 relative pointer-events-auto">
                {/* Martes: Emma (8:30) */}
                <div className="absolute top-[48px] left-1 right-1 h-[48px] bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 rounded p-1.5 shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                   <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight flex justify-between">Emma ... <span className="text-blue-600 dark:text-blue-400">08:30</span></p>
                </div>

                {/* Martes: Junta (10:30 - 11:30) */}
                <div className="absolute top-[240px] left-1 right-1 h-[96px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-2 shadow-sm flex items-center justify-center opacity-70">
                   <p className="text-xs font-bold text-slate-500 italic">Reunión de Equipo</p>
                </div>

                {/* Martes: Robert Davis (11:45 - 12:30) */}
                <div className="absolute top-[360px] left-1 right-1 h-[72px] bg-white dark:bg-slate-900 border-l-4 border-slate-400 rounded p-1.5 shadow-sm border border-y-slate-200 border-r-slate-200 dark:border-slate-700">
                  <p className="text-[10px] font-bold text-slate-500">11:45 - 12:30</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Robert Davis</p>
                  <p className="text-[10px] text-slate-500 truncate">Consulta • Dr. Torres</p>
                </div>
              </div>

              <div className="col-start-4 relative pointer-events-auto">
                {/* Miércoles: Amanda Lee (8:00 - 9:30) */}
                <div className="absolute top-[0px] left-1 right-1 h-[144px] bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-2 shadow-sm flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400">08:00 - 09:30</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight mt-0.5">Amanda Lee</p>
                    <p className="text-[10px] text-blue-600/80 dark:text-blue-400/80 truncate">Preparación de Corona</p>
                  </div>
                  <span className="self-start text-[10px] font-semibold bg-white dark:bg-slate-800 text-slate-600 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">Dr. Smith</span>
                </div>
              </div>

            </div>

            {/* LÍNEA DE TIEMPO ACTUAL (La línea roja) */}
            {/* Simulando que son las 9:45 AM -> 96px (8am) + 72px (45 min) = 168px */}
            <div className="absolute top-[168px] left-0 right-0 z-20 flex items-center pointer-events-none">
              <div className="w-[16.66%] flex justify-end pr-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
              </div>
              <div className="flex-1 h-px bg-red-600"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}