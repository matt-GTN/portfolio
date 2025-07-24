import Image from "next/image";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center justify-between">
      <Navbar/>
      <Hero />
      <Footer />
    </main>
  );
}
