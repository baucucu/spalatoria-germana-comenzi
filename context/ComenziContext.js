// context/OrderContext.js
'use client';

import { createContext, useState } from 'react';

export const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <OrderContext.Provider value={{ selectedOrder, setSelectedOrder }}>
            {children}
        </OrderContext.Provider>
    );
}
