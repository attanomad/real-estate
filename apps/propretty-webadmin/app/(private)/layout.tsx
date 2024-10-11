import Header from "@/components/dashboard/header";
import NavBreadcrumb from "@/components/nav-breadcrumb";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen bg-muted/40 overflow-hidden">
      <Toaster />
      <TooltipProvider>
        <Sidebar />
        <div className="flex flex-col grow min-w-0">
          <Header />
          <main className="flex flex-col h-full overflow-y-auto">
            <div className="p-4">
              <NavBreadcrumb />
            </div>
            {children}
          </main>
        </div>
      </TooltipProvider>
    </div>
  );
}
