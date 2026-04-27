import { Anchor, ShieldPlus, Sparkles, Droplets, ArrowRight } from "lucide-react"

export function Services() {
  return (
    <section id="servicios" className="w-full max-w-7xl mx-auto px-4 py-24">
      {/* Encabezado */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          Servicios Especializados
        </h2>
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
          Soluciones dentales integrales con un enfoque en la prevención, la estética y la salud a largo plazo.
        </p>
      </div>

      {/* Grid Bento Box - EXPANDIDO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Tarjeta 1: Ortodoncia (Ocupa 2 columnas en LG) */}
        <div className="group lg:col-span-2 relative overflow-hidden rounded-3xl bg-blue-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-8 md:p-10 transition-all hover:shadow-lg dark:hover:bg-slate-800 min-h-[280px] flex flex-col justify-center">
          <div className="relative z-10 space-y-4 max-w-md">
            <Anchor className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Ortodoncia Avanzada</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Corrección dental con Brackets y alineadores invisibles de última generación para una alineación perfecta.
            </p>
          </div>
          {/* Imagen de fondo oculta en celulares */}
          <div className="scale-130 absolute right-[-1%] top-[10%] w-[45%] sm:block pointer-events-none transition-transform duration-500 group-hover:scale-105">
             <img src="/marketing/brackets.png" alt="" className="object-cover" />
          </div>
        </div>

        {/* Tarjeta 2: Implantes */}
        <div className="group rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-8 md:p-10 transition-all hover:shadow-lg dark:hover:bg-slate-800 flex flex-col justify-between min-h-[280px]">
          <div className="space-y-4">
            <ShieldPlus className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Implantes</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Restauramos la funcionalidad y estética de tu boca con implantes de titanio de alta durabilidad.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>

        {/* Tarjeta 3: Estética Dental */}
        <div className="group rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-8 md:p-10 transition-all hover:shadow-lg dark:hover:bg-slate-800 flex flex-col justify-between min-h-[280px]">
          <div className="space-y-4">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Estética Dental</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Diseño de sonrisa, carillas de porcelana y blanqueamiento dental profesional con resultados inmediatos.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>

        {/* Tarjeta 4: Limpieza (Ocupa 2 columnas en LG) */}
        <div className="group lg:col-span-2 relative overflow-hidden rounded-3xl bg-cyan-50 dark:bg-slate-800/80 border border-cyan-100 dark:border-slate-800 p-8 md:p-10 transition-all hover:shadow-lg min-h-[280px] flex flex-col justify-center">
          <div className="relative z-10 space-y-4 max-w-md">
            <Droplets className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Limpieza y Prevención</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Eliminación profunda de sarro y profilaxis para mantener tus encías sanas y prevenir enfermedades periodontales.
            </p>
          </div>
          {/* Contenedor de la imagen ilustrativa a la derecha */}
          <div className="absolute right-0 bottom-0 w-[45%] h-[85%] hidden sm:block">
            <div className="w-full h-full bg-teal-600/20 dark:bg-slate-700/50 rounded-tl-3xl overflow-hidden">
               {/* <img src="/limpieza-bg.png" alt="" className="object-cover w-full h-full" /> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}