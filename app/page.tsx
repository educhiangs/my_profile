import Hero from "../components/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-violet-500 text-white">
      <Hero/>
      <div className="p-10 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold">Mi Currículum Vitae</h1>
        <p className="mt-2 opacity-80">Diseñando mi futuro profesional.</p>
      </div>
    </main>
  );
}
