export function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Textos y Lista */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              ¿Por qué elegir DentaClinic?
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg">
              Nos esforzamos por redefinir la experiencia dental a través de tres pilares fundamentales que garantizan resultados superiores.
            </p>
          </div>

          <div className="space-y-8">
            {/* Pilar 1 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0e4b85] flex items-center justify-center shadow-lg">
                <img src="/icons/tecnologia.png" alt="Tecnología" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Tecnología de Vanguardia</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Utilizamos escáneres 3D y radiografía digital para diagnósticos de precisión milimétrica.
                </p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#00605a] flex items-center justify-center shadow-lg">
                <img src="/icons/experiencia.png" alt="Experiencia" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Experiencia Comprobada</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Más de 15 años de trayectoria y especialistas certificados en cada área odontológica.
                </p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#526470] flex items-center justify-center shadow-lg">
                <img src="/icons/cuidado.png" alt="Cuidado Humano" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Cuidado Humano</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Un trato cálido y empático diseñado para que te sientas cómodo y seguro en cada visita.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Bento Box Desfasado */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:pl-10">
          
          {/* Sub-columna izquierda */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Imagen del alineador 3D (Caja alta) */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] p-6 h-64 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center">
               <img src="/aligner.png" alt="Alineador 3D" className="object-contain max-h-full drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Caja Azul (Caja corta) */}
            <div className="bg-[#0b5bb0] rounded-[2rem] p-6 h-40 shadow-xl flex flex-col justify-end text-white hover:bg-[#094a90] transition-colors">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">15k+</span>
              <span className="text-sm sm:text-base font-medium text-blue-100">Sonrisas Transformadas</span>
            </div>
          </div>

          {/* Sub-columna derecha */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-0 sm:mt-12">
            {/* Caja Turquesa (Caja corta) */}
            <div className="bg-[#046569] rounded-[2rem] p-6 h-40 shadow-xl flex flex-col justify-center text-white hover:bg-[#035255] transition-colors">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">100%</span>
              <span className="text-sm sm:text-base font-medium text-teal-100">Biosonrisas Garantizadas</span>
            </div>
            {/* Imagen del Doctor (Caja alta) */}
            <div className="rounded-[2rem] overflow-hidden h-64 shadow-xl relative border border-slate-100 dark:border-slate-800">
               <img src="/doctor.png" alt="Doctor Especialista" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}