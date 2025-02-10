'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useContext } from 'react';
import { OrderContext } from '@/context/ComenziContext';

export function OrderList({
  orders
}) {
  const { setSelectedOrder } = useContext(OrderContext);
  return (
    (<div className="container mx-auto p-16">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date Created</TableHead>
            <TableHead>Nume</TableHead>
            <TableHead>Telefon</TableHead>
            <TableHead>Total (with discount)</TableHead>
            <TableHead>Urgent</TableHead>
            <TableHead>Pickup at Office</TableHead>
            <TableHead>Return at Office</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} onClick={() => setSelectedOrder(order)}>
              <TableCell>{order.id}</TableCell>
              <TableCell>
                <Badge variant={order.status === "noua" ? "default" : "secondary"}>{order.status}</Badge>
              </TableCell>
              <TableCell>{new Date(order.date_created).toLocaleDateString()}</TableCell>
              <TableCell>{order.nume}</TableCell>
              <TableCell>{order.telefon}</TableCell>
              <TableCell>{order.total_comanda_cu_discount.toFixed(2)} RON</TableCell>
              <TableCell>
                <Badge variant={order.urgent === "true" ? "destructive" : "outline"}>
                  {order.urgent === "true" ? "Yes" : "No"}
                </Badge>
              </TableCell>
              <TableCell>{order.colectare_la_sediu === "da" ? "Yes" : "No"}</TableCell>
              <TableCell>{order.returnare_la_sediu === "da" ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>)
  );
}

