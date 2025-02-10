import { OrderList } from "@/components/OrderList"

// This is a mock function to simulate fetching data from an API
async function getOrders() {
    // In a real application, you would fetch this data from your API
    return [
        {
            id: 16,
            status: "noua",
            date_created: "2025-01-31T14:49:58.019Z",
            total_comanda_cu_discount: 219.6,
            urgent: "true",
            colectare_la_sediu: "da",
            returnare_la_sediu: "da",
            nume: "Andreea",
            telefon: "0741111111"
        },
        {
            id: 17,
            status: "noua",
            date_created: "2025-01-31T14:49:58.019Z",
            total_comanda_cu_discount: 219.6,
            urgent: "true",
            colectare_la_sediu: "da",
            returnare_la_sediu: "da",
            nume: "Ionut Popescu",
            telefon: "0741111111"
        }
    ]
}

export default async function Comenzi() {
    const orders = await getOrders();

    return (
        <main className="flex min-h-screen flex-col w-full">
            {/* <h1 className="text-4xl font-bold mb-8">Comenzi</h1> */}
            <OrderList orders={orders} />
        </main>
    );
}

