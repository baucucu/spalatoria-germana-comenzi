import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16">
      <h1 className="text-3xl font-bold underline">Spalatoria Germana</h1>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Link href="/manager">
            <div className="aspect-video rounded-xl bg-muted/50 flex flex-col items-center justify-center" >
              Manager
            </div>
          </Link>
          <Link href="/comenzi">
            <div className="aspect-video rounded-xl bg-muted/50 flex flex-col items-center justify-center" >
              Comenzi
            </div>
          </Link>
          <Link href="/curier">
            <div className="aspect-video rounded-xl bg-muted/50 flex flex-col items-center justify-center" >
              Curier
            </div>
          </Link>
        </div>
        {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
      </div>
    </main>
  );
}
