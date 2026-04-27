import Link from "next/link"
import { ChevronRight, AlertTriangle, Pill, Calendar, Activity, Image as ImageIcon, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PatientProfilePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      
      {/* Header y Breadcrumbs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/dashboard/patients" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">Pacientes</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-bold text-slate-900 dark:text-white">PT-10492</span>
        </div>
        <Button className="bg-[#0b5bb0] hover:bg-[#094a90] text-white flex items-center gap-2 shadow-md">
          <Plus className="w-4 h-4" /> Nueva Nota
        </Button>
      </div>

      {/* Grid Principal de 3 Columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* COLUMNA 1: Info del Paciente y Acciones Rápidas */}
        <div className="space-y-6">
          
          {/* Tarjeta 1: Perfil */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-white dark:border-slate-900 shadow-sm">
                  <AvatarImage src="/patient-john.jpg" alt="Juan Pérez" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-bold">JP</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Juan Pérez</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                  ID: PT-10492
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Edad</p>
                <p className="font-semibold text-slate-900 dark:text-white">42 Años</p>
              </div>
              <div className="border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Tipo de Sangre</p>
                <p className="font-semibold text-slate-900 dark:text-white">O Positivo</p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl p-4">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold mb-1">
                <AlertTriangle className="w-4 h-4" /> Alergias
              </div>
              <p className="text-sm text-red-700 dark:text-red-300 font-medium pl-6">Penicilina, Látex (Leve)</p>
            </div>
          </div>

          {/* Tarjeta 2: Acciones Rápidas */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-3">
                  <Pill className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Recetar Medicamento</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Agendar Siguiente Cita</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
              </button>
            </div>
          </div>
        </div>

        {/* COLUMNA 2: Finanzas y Clínica */}
        <div className="space-y-6">
          
          {/* Tarjeta 3: Plan de Tratamiento */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Plan de Tratamiento</h3>
              </div>
              <span className="bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 text-xs font-bold px-2 py-1 rounded-md">Activo</span>
            </div>
            
            <p className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Brackets (Etapa 2/4)</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>Progreso: 50%</span>
                <span>12 de 24 meses pagados</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 dark:bg-blue-500 w-1/2 h-full rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Costo Total</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">$3,500</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Pagado</p>
                <p className="text-xl font-bold text-teal-600 dark:text-teal-400">$1,200</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Saldo Restante</p>
              <p className="text-xl font-bold text-red-500">$2,300</p>
            </div>
          </div>

          {/* Tarjeta 4: Historial Clínico (Timeline visual) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Historial Clínico
            </h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
              
              {/* Item de Historial 1 */}
              <div className="relative flex items-start gap-4">
                <div className="absolute left-2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-900 z-10"></div>
                <div className="pl-6 w-full">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">15 Nov, 2023</p>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300">
                    Ajuste de brackets y cambio de alambre. El paciente reporta ligera molestia en cuadrante inferior izquierdo.
                  </div>
                </div>
              </div>

              {/* Item de Historial 2 */}
              <div className="relative flex items-start gap-4">
                <div className="absolute left-2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-slate-900 z-10"></div>
                <div className="pl-6 w-full">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">12 Oct, 2023</p>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300">
                    Limpieza de rutina y eliminación de sarro. Se dieron instrucciones de higiene bucal.
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
              Ver Historial Completo
            </button>
          </div>
        </div>

        {/* COLUMNA 3: Odontograma y Galería */}
        <div className="space-y-6">
          
          {/* Tarjeta 5: Odontograma Simulado */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Odontograma
              </h3>
              <button className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                Expandir <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            
            {/* Contenedor Visual */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-slate-50 dark:bg-slate-800/30 flex flex-col items-center justify-center gap-4">
               {/* Simulando la gráfica de la imagen */}
               <div className="flex gap-1 justify-center w-full">
                 <div className="w-6 h-8 border border-slate-300 dark:border-slate-600 rounded-sm"></div>
                 <div className="w-6 h-8 border border-red-400 bg-red-100 flex items-center justify-center rounded-sm"><div className="w-2 h-2 bg-red-500 rounded-full"></div></div>
                 <div className="w-6 h-8 border border-slate-300 dark:border-slate-600 rounded-sm mx-4"></div>
                 <div className="w-6 h-8 border border-blue-400 bg-blue-100 rounded-sm"></div>
                 <div className="w-6 h-8 border border-slate-300 dark:border-slate-600 rounded-sm"></div>
               </div>
               <div className="flex gap-1 justify-center w-full">
                 <div className="w-6 h-8 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-200 dark:bg-slate-700"></div>
                 <div className="w-6 h-8 border border-slate-300 dark:border-slate-600 rounded-sm mx-4 relative"><span className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-bold">X</span></div>
                 <div className="w-6 h-8 border border-slate-300 dark:border-slate-600 rounded-sm"></div>
                 <div className="w-6 h-8 border border-slate-300 dark:border-slate-600 rounded-sm"></div>
               </div>

               {/* Leyenda */}
               <div className="flex gap-3 text-[10px] font-bold text-slate-500 mt-2 uppercase">
                 <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Caries</span>
                 <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Corona</span>
                 <span className="flex items-center gap-1"><div className="w-2 h-2 text-slate-400 flex items-center justify-center">X</div> Extraído</span>
               </div>
            </div>
          </div>

          {/* Tarjeta 6: Galería Multimedia */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Galería
              </h3>
              <button className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-slate-500 mb-2 uppercase">Radiografías</p>
                <div className="flex gap-2">
                  <div className="h-16 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                     <img src="/xray1.jpg" alt="X-Ray" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                  </div>
                  <div className="h-16 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                     <img src="/xray2.jpg" alt="X-Ray" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 mb-2 uppercase">Fotos Intraorales</p>
                <div className="flex gap-2">
                  <div className="h-16 w-16 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                     <img src="/teeth.jpg" alt="Teeth" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-16 flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/50 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">+3 Más</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}