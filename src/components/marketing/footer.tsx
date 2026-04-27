"use client"

import Link from "next/link"
import { Send, ShieldCheck, BriefcaseMedical, ShieldPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Grid Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Redes */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">DentaClinic</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pr-4">
              Excelencia en Salud Dental. Cuidamos cada detalle para que tu sonrisa brille siempre.
            </p>
            {/* Íconos Sociales (Usando tus PNGs) */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <img src="/icons/fb.png" alt="Facebook" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <img src="/icons/ig.png" alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <img src="/icons/tw.png" alt="Twitter" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="#servicios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Servicios</Link></li>
              <li><Link href="#especialistas" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Nuestros Especialistas</Link></li>
              <li><Link href="#precios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Precios y Planes</Link></li>
              <li><Link href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog Dental</Link></li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/privacidad" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Aviso de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Términos de Servicio</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Columna 4: Boletín */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Boletín Informativo</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Suscríbete para recibir consejos de salud dental.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
              />
              <Button type="submit" size="icon" className="bg-[#0b5bb0] hover:bg-[#094a90] text-white shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>

        {/* Barra Inferior (Copyright y DeKode) */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-slate-500 dark:text-slate-400">
            <p>© 2024 DentaClinic. Excelencia en Salud Dental.</p>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <p>
              Desarrollado por <a href="#" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">DeCode</a>
            </p>
          </div>
          
          {/* Íconos de Confianza (Esquina inferior derecha) */}
          <div className="flex gap-4 text-slate-400 dark:text-slate-500">
            <ShieldCheck className="w-5 h-5" />
            <BriefcaseMedical className="w-5 h-5" />
            <ShieldPlus className="w-5 h-5" />
          </div>
        </div>

      </div>
    </footer>
  )
}