import { GridBackground } from "./components/gridBackground";
import { Hero } from "./components/hero";
import Navbar from "./components/navBar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[100svh] overflow-hidden">
      <GridBackground />
      <section className="relative mx-auto flex min-h-[100svh] max-w-5xl items-center justify-center px-6">
      <div className="-translate-y-20">
        <Hero />
      </div>
      </section>
    </main>
    </>
  );
}
