import '@/styles/globals.css';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { ExpandableChatDemo } from '@/components/code.demo';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center">
            <div className="flex-1">
              <Header />
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      <ExpandableChatDemo />
    </div>
  );
}
