export default async function Client({ params }) {
    const { id } = await params

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-3xl font-bold underline">Client {id}</h1>
        </main>
    );
}