import './styles/globals.css'
import Button from "@/components/ui/button"
import { ThemeProvider } from '@/providers/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
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
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Welcome to Shadcn UI</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
