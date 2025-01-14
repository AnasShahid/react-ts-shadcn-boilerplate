import {Button} from "@/components/ui/button"

export default function Home() {
  return (
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
  )
}
