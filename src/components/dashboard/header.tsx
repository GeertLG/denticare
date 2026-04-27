import { Bell, Search, CircleHelp } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10 shrink-0">
      
      {/* Buscador */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <Input 
            type="search" 
            placeholder="Buscar pacientes, tratamientos..." 
            className="pl-10 bg-slate-100 dark:bg-slate-900 border-transparent focus-visible:ring-blue-500 rounded-full h-10 w-full" 
          />
        </div>
      </div>

      {/* Acciones (Perfil, Tema, Notificaciones) */}
      <div className="flex items-center gap-4 pl-4">
        <ThemeToggle />
        <button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-950"></span>
        </button>
        <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          <CircleHelp className="w-4 h-4" /> Soporte
        </button>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>
        <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-950 transition-all">
          <AvatarFallback className="bg-slate-800 text-white text-xs font-medium">DR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}