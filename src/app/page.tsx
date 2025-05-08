import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import RedefinedSection from "./components/home/LuxurySection";
import RoomsSection from "./components/home/RoomsSection";
import StorySection from "./components/home/StorySection";
import FacilitiesSection from "./components/home/FacilitiesSection";
import GallerySection from "./components/home/GallerySection";

export default function Home() {
  return (
    <main className="p-0 bg-neutral w-full">
      <div className="max-w-450 mx-auto">
        <HeroSection />
        <AboutSection />
        <RedefinedSection />
        <RoomsSection />
        <StorySection />
        <FacilitiesSection />
        <GallerySection />
      </div>
    </main>
  );
}
