"use client";

import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapContainer from "@/components/MapContainer";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Reservation />
      <MapContainer />
      <Footer />
    </main>
  );
}
