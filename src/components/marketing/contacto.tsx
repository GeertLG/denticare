import { MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Columna Izquierda: Información */}
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Ubicación y Contacto
            </h2>
          </div>

          <div className="space-y-8">
            {/* Dirección */}
            <div className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Nuestra Dirección</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Av. de la Salud 123, Consultorio 405<br />
                  Distrito Médico, Ciudad de México
                </p>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex gap-4 items-start">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Horario de Atención</h3>
                <div className="text-slate-600 dark:text-slate-400 space-y-1">
                  <p className="flex justify-between gap-8"><span>Lunes - Viernes:</span> <span>09:00 - 20:00</span></p>
                  <p className="flex justify-between gap-8"><span>Sábado:</span> <span>09:00 - 14:00</span></p>
                  <p className="flex justify-between gap-8"><span>Domingo:</span> <span className="text-red-500 font-medium">Cerrado</span></p>
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-4 items-start">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Contáctanos</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  +52 (55) 1234 5678<br />
                  hola@dentaclinic.com
                </p>
              </div>
            </div>
          </div>

          {/* Caja de Emergencias */}
          <div className="bg-blue-50 dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-slate-800 mt-8">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
              ¿Tienes una emergencia?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">
              Atendemos urgencias dentales las 24 horas del día. Llámanos directamente.
            </p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 h-12 text-base">
              Línea de Urgencias
            </Button>
          </div>
        </div>

        {/* Columna Derecha: Mapa */}
        <div className="relative w-full h-[500px] lg:h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
          {/* Mapa Claro (se oculta en modo oscuro) */}
          <img 
            src="/mapa-claro.png" 
            alt="Mapa de ubicación" 
            className="absolute inset-0 w-full h-full object-cover dark:hidden"
          />
          {/* Mapa Oscuro (se oculta en modo claro) */}
          <img 
            src="/mapa-oscuro.png" 
            alt="Mapa de ubicación oscuro" 
            className="absolute inset-0 w-full h-full object-cover hidden dark:block"
          />
          
          {/* Pin flotante central (Opcional, por si tu imagen de mapa no lo trae pegado) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 shadow-xl rounded-xl p-3 flex items-center gap-3 border border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="pr-2">
              <p className="font-bold text-slate-900 dark:text-white text-sm leading-tight">DentaClinic</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">¡Estamos aquí!</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}