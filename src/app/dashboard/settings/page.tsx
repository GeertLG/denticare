import { User, Bell, CreditCard, Shield, Save, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Configuración</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Administra los detalles de tu clínica y las preferencias del sistema.
          </p>
        </div>
        <Button className="bg-[#0b5bb0] hover:bg-[#094a90] text-white flex items-center gap-2 shadow-md">
          <Save className="w-4 h-4" /> Guardar Cambios
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Menú lateral interno de configuración (Visual) */}
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 font-semibold transition-colors text-left">
            <User className="w-5 h-5" /> Perfil de la Clínica
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors text-left">
            <Bell className="w-5 h-5" /> Notificaciones y Bot
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors text-left">
            <CreditCard className="w-5 h-5" /> Facturación y Plan
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 font-medium transition-colors text-left">
            <Shield className="w-5 h-5" /> Seguridad
          </button>
        </div>

        {/* Contenido de Configuración */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Tarjeta 1: Detalles de la Clínica */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Detalles de la Clínica</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nombre del Doctor</label>
                  <Input defaultValue="Dr. Alejandro Torres" className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nombre de la Clínica</label>
                  <Input defaultValue="DentaClinic Premium" className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Correo Electrónico de Contacto</label>
                <Input defaultValue="contacto@dentaclinic.com" type="email" className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700" />
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Configuración del Bot de WhatsApp (¡El Gancho de Ventas!) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-blue-200 dark:border-blue-900/50 p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Bot de WhatsApp (Asistente Inteligente)</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Configura los mensajes automáticos que tus pacientes recibirán para reducir las inasistencias.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Recordatorio de Cita (24 hrs antes)</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Envía un mensaje automático para confirmar asistencia.</p>
                </div>
                {/* Toggle Simulado */}
                <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer opacity-90 hover:opacity-100">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Felicitación de Cumpleaños</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Mensaje con promoción de limpieza dental.</p>
                </div>
                <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer opacity-90 hover:opacity-100">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Plan y Suscripción */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Plan Actual</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Suite</h3>
                <span className="bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 text-xs font-bold px-2 py-1 rounded-md">Activo</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Desarrollado y mantenido por <span className="font-bold text-blue-600 dark:text-blue-400">DeKode</span>.
              </p>
            </div>
            <Button variant="outline" className="bg-white dark:bg-slate-900">
              Gestionar Plan
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}