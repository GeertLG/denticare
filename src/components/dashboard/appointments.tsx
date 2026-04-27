import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TODAY_APPOINTMENTS = [
  {
    id: "P-4029",
    patient: "Sarah Jenkins",
    time: "09:00 AM",
    treatment: "Limpieza de rutina y radiografía",
    status: "Presente",
    statusColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    image: "/sarah.jpg", // Foto real
    initials: "SJ",
    isActive: false,
  },
  {
    id: "P-8821",
    patient: "Marcus Thorne",
    time: "10:30 AM",
    treatment: "Tratamiento de conducto",
    status: "En cirugía",
    statusColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    image: "/marcus.jpg", // Foto real
    initials: "MT",
    isActive: true, // Esta es la cita actual (borde azul en el diseño)
  },
  {
    id: "P-1193",
    patient: "Elena Petrova",
    time: "11:45 AM",
    treatment: "Consulta de blanqueamiento",
    status: "Esperando",
    statusColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    image: "", // ¡No hay foto! Mostrará las iniciales "EP"
    initials: "EP",
    isActive: false,
  },
]

export function Appointments() {
  return (
    <div className="space-y-4">
      {/* Encabezado */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Citas de hoy</h2>
        <Link href="/dashboard/calendar" className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline">
          Ver calendario <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Lista de Citas */}
      <div className="space-y-3">
        {TODAY_APPOINTMENTS.map((apt) => (
          <div 
            key={apt.id} 
            className={`relative flex items-center justify-between p-4 rounded-xl border bg-white dark:bg-slate-900 transition-shadow hover:shadow-sm ${
              apt.isActive 
                ? "border-blue-500 dark:border-blue-500 shadow-sm" 
                : "border-slate-200 dark:border-slate-800"
            }`}
          >
            {/* Indicador de cita actual (Barra lateral azul) */}
            {apt.isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-blue-500 rounded-r-full"></div>
            )}

            {/* Hora y Paciente */}
            <div className="flex items-center gap-6 pl-2">
              <div className="text-center min-w-[4rem]">
                <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                  {apt.time.split(" ")[0]}
                </p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                  {apt.time.split(" ")[1]}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10 border border-slate-100 dark:border-slate-800">
                  <AvatarImage src={apt.image} alt={apt.patient} />
                  <AvatarFallback className="bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-400 font-semibold">
                    {apt.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{apt.patient}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{apt.treatment}</p>
                </div>
              </div>
            </div>

            {/* Status y ID */}
            <div className="text-right">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-1 ${apt.statusColor}`}>
                {apt.status}
              </span>
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase">
                ID: {apt.id}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}