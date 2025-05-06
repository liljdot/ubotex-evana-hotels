import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import RedefinedSection from "./components/home/LuxurySection";
import RoomsSection from "./components/home/RoomsSection";

export default function Home() {
  return (
    <main className="p-0 bg-neutral w-full">
      <div className="max-w-450 mx-auto">
        <HeroSection />
        <AboutSection />
        <RedefinedSection />
        <RoomsSection />
      </div>
    </main>
  );
}
