'use client';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/comenzi-sidebar"
import { OrderProvider } from '@/context/ComenziContext';

export default function Layout({ children }) {
    return (
        <OrderProvider>
            <SidebarProvider
                style={{
                    "--sidebar-width": "20rem",
                    "--sidebar-width-mobile": "20rem",
                }}
            >
                <AppSidebar />
                <main>
                    {children}
                    <SidebarTrigger />
                </main>
            </SidebarProvider>
        </OrderProvider>
    )
}
