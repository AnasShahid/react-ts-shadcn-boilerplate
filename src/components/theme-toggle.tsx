import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import {Button} from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    switch (theme) {
      case "light":
        setTheme("dark")
        break
      case "dark":
        setTheme("system")
        break
      case "system":
        setTheme("light")
        break
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="relative w-9 h-9"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-orange-500" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-900 dark:text-slate-100" />
      <Monitor 
        className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-slate-900 dark:text-slate-100 ${
          theme === "system" ? "!rotate-0 !scale-100" : ""
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
