'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupContent,
    SidebarGroupLabel
} from "@/components/ui/sidebar"
import { useContext, useEffect } from 'react';
import { OrderContext } from '@/context/ComenziContext';


export function AppSidebar() {
    const { selectedOrder, setSelectedOrder } = useContext(OrderContext);
    useEffect(() => {
        console.log("selectedOrder in sidebar: ", { selectedOrder })
    }, [selectedOrder])
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup >
                    <SidebarGroupLabel>Comanda #{selectedOrder?.id}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {JSON.stringify(selectedOrder, null, 2)}
                    </SidebarGroupContent>
                </SidebarGroup >
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
