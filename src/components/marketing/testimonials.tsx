import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Datos mockeados basados en tu diseño
const TESTIMONIALS = [
  {
    id: 1,
    name: "María García",
    role: "Paciente de Ortodoncia",
    quote: "El servicio es excepcional. Tenía miedo a los dentistas, pero el trato humano y la tecnología que usan me hicieron sentir totalmente tranquila.",
    initials: "MG"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Paciente de Implantes",
    quote: "Increíble resultado con mis implantes. El proceso fue mucho más rápido de lo que esperaba y sin nada de dolor. Recomendadísimos.",
    initials: "CR"
  },
  {
    id: 3,
    name: "Elena Torres",
    role: "Estética Dental",
    quote: "Mi diseño de sonrisa quedó perfecto. La atención al detalle es lo que los diferencia de cualquier otra clínica que haya visitado.",
    initials: "ET"
  }
]

export function Testimonials() {
  return (
    <section id="testimonios" className="w-full py-24 bg-slate-50 dark:bg-slate-900/20">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado y Estrellas */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
            Lo que dicen nuestros pacientes
          </h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-blue-700 text-blue-700 dark:fill-blue-500 dark:text-blue-500" />
            ))}
          </div>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-slate-200 dark:border-slate-700">
                  {/* AvatarFallback es la magia que pone las iniciales centradas */}
                  <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-slate-800 dark:text-blue-400 font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white leading-tight">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}