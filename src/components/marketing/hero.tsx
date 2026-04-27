import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    // 1. El section ocupa todo el ancho (w-full). Aquí va tu color de fondo.
    <section className="w-full pt-20 pb-32 bg-slate-50 dark:bg-slate-900/20">
      
      {/* 2. Este div interno es el que centra el contenido y evita que se pegue a las orillas */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Textos y Botones */}
          <div className="space-y-8">
            <div className="inline-flex">
              <span className="text-xs font-bold tracking-wider text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full">
                ATENCIÓN DENTAL DE ÉLITE
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Tu sonrisa en las <br className="hidden md:block" /> mejores manos
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Combinamos tecnología de vanguardia con un cuidado humano excepcional para transformar tu salud dental y devolverte la confianza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 text-base h-12 shadow-lg shadow-blue-700/20">
                Agendar Cita Ahora
              </Button>
              <Button size="lg" variant="outline" className="dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 px-8 text-base h-12">
                Nuestros Servicios
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Imagen y Tarjeta Flotante */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none mt-10 lg:mt-0">
            {/* Fondo gris desplazado detrás de la imagen */}
            <div className="absolute -inset-4 bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] -z-10 translate-y-6 translate-x-6"></div>

            {/* Contenedor de la Imagen */}
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-rose-400 shadow-2xl">
              <img
                src="/marketing/doctora.jpg" 
                alt="Doctora sonriendo"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Tarjeta flotante de 99% Satisfacción */}
            <div className="absolute -bottom-8 left-[-1rem] md:left-[-3rem] bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-4 pr-6 flex items-center gap-4 border border-slate-100 dark:border-slate-800">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-2.5 rounded-full">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm leading-none">99% Satisfacción</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pacientes felices cada día</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}