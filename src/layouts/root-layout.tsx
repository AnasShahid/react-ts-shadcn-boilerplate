import '@/styles/globals.css'
import { Outlet } from 'react-router-dom'
import { ThemeToggle } from '@/components/theme-toggle'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Shadcn UI Demo</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  )
}
