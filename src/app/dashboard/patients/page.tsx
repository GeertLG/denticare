import { Search, Filter, ArrowUpDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Datos mockeados y castellanizados para la demo
const PATIENTS = [
  {
    id: "PT-10492",
    name: "Juan Pérez",
    treatment: "Brackets",
    lastVisit: { date: "12 Oct, 2023", type: "Limpieza" },
    nextAppt: { date: "05 Nov, 2023", type: "Seguimiento", color: "text-blue-600 dark:text-blue-400" },
    finances: { main: "$2,500 rest.", sub: "12/24 meses" },
    status: "Programado",
    statusBadge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    initials: "JP",
  },
  {
    id: "PT-09381",
    name: "María Sánchez",
    treatment: "Ninguno",
    lastVisit: { date: "28 Sep, 2023", type: "Extracción" },
    nextAppt: { date: "Sin programar", type: "-", color: "text-slate-400 italic" },
    finances: { main: "$0", sub: "Liquidado" },
    status: "Inactivo",
    statusBadge: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
    initials: "MS",
  },
  {
    id: "PT-11023",
    name: "Roberto Chen",
    treatment: "Implantes",
    lastVisit: { date: "01 Nov, 2023", type: "Consulta" },
    nextAppt: { date: "15 Nov, 2023", type: "Cirugía", color: "text-red-500" },
    finances: { main: "$12,000 rest.", sub: "12/24 meses" },
    status: "Requiere Acción",
    statusBadge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    image: "/doctor.png", // Reusando una imagen que ya tienes para que no salga vacío
    initials: "RC",
  },
  {
    id: "PT-08442",
    name: "Linda Jiménez",
    treatment: "Invisalign",
    lastVisit: { date: "14 Ago, 2023", type: "Rayos X" },
    nextAppt: { date: "02 Dic, 2023", type: "Rutina", color: "text-teal-600 dark:text-teal-400" },
    finances: { main: "$4,200 rest.", sub: "6/12 meses" },
    status: "Confirmado",
    statusBadge: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    initials: "LJ",
  },
]

export default function PatientsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Expedientes</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gestiona y visualiza el historial detallado de tus pacientes.</p>
        </div>
        <Button className="bg-[#0b5bb0] hover:bg-[#094a90] text-white flex items-center gap-2 shadow-md">
          <Plus className="w-4 h-4" /> Registrar Paciente
        </Button>
      </div>

      {/* Barra de Búsqueda y Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="Buscar por nombre, ID, o teléfono..." 
            className="pl-10 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white dark:bg-slate-900 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filtrar
          </Button>
          <Button variant="outline" className="bg-white dark:bg-slate-900 flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4" /> Ordenar
          </Button>
        </div>
      </div>

      {/* Contenedor de la Tabla */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            
            {/* Cabecera de la Tabla */}
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Paciente</th>
                <th className="px-6 py-4">Tratamiento</th>
                <th className="px-6 py-4">Última Visita</th>
                <th className="px-6 py-4">Próxima Cita</th>
                <th className="px-6 py-4">Finanzas</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>

            {/* Cuerpo de la Tabla */}
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {PATIENTS.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  
                  {/* Columna Paciente */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-slate-100 dark:border-slate-800">
                        <AvatarImage src={patient.image} alt={patient.name} />
                        <AvatarFallback className="bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-400 font-semibold">
                          {patient.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{patient.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">ID: {patient.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Columna Tratamiento */}
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">
                    {patient.treatment}
                  </td>

                  {/* Columna Última Visita */}
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900 dark:text-white">{patient.lastVisit.date}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{patient.lastVisit.type}</p>
                  </td>

                  {/* Columna Próxima Cita */}
                  <td className="px-6 py-4">
                    <p className={`font-bold ${patient.nextAppt.color}`}>{patient.nextAppt.date}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{patient.nextAppt.type}</p>
                  </td>

                  {/* Columna Finanzas */}
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900 dark:text-white">{patient.finances.main}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{patient.finances.sub}</p>
                  </td>

                  {/* Columna Estado */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${patient.statusBadge}`}>
                      {patient.status}
                    </span>
                  </td>

                  {/* Columna Acciones */}
                  <td className="px-6 py-4 text-center">
                    <Button variant="outline" size="sm" className="bg-white dark:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400">
                      Abrir
                    </Button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Paginación (Visual) */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mostrando <span className="font-bold text-slate-900 dark:text-white">1</span> a <span className="font-bold text-slate-900 dark:text-white">4</span> de <span className="font-bold text-slate-900 dark:text-white">128</span> resultados
          </p>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-white dark:bg-slate-900 text-slate-400" disabled>{"<"}</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400">1</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-white dark:bg-slate-900 hover:bg-slate-100">2</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-white dark:bg-slate-900 hover:bg-slate-100">3</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-white dark:bg-slate-900 hover:bg-slate-100">{">"}</Button>
          </div>
        </div>
      </div>

    </div>
  )
}