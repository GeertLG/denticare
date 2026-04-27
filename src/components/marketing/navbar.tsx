import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">DentiCare</span>
        </div>

        {/* Links de Navegación (Se ocultan en celulares) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#servicios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Servicios</Link>
          <Link href="#equipo" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Equipo</Link>
          <Link href="#testimonios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonios</Link>
          <Link href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</Link>
        </nav>

        {/* Acciones (Botón Reservar y Dark Mode) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
            Reservar Cita
          </Button>
        </div>
      </div>
    </header>
  )
}