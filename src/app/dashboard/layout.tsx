import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Contenedor principal que ocupa toda la pantalla
    <div className="flex h-screen bg-white dark:bg-[#0a0f1c] overflow-hidden">
      <Sidebar />
      
      {/* Contenedor derecho (Header + Contenido) */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        
        {/* Aquí adentro se inyectarán tus vistas (Calendar, Patients, etc) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}