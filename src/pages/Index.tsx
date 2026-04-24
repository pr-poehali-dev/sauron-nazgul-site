import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import { galleryItems, GalleryItem } from "@/pages/data";
import {
  HeroSection,
  SauronSection,
  NazgulSection,
  HistorySection,
  ArtifactsSection,
  GallerySection,
  GalleryModal,
  FooterSection,
} from "@/pages/Sections";

export default function Index() {
  const [galleryFilter, setGalleryFilter] = useState("все");
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredGallery = galleryFilter === "все"
    ? galleryItems
    : galleryItems.filter(i => i.category === galleryFilter);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-mordor-texture min-h-screen text-[#d4b896]">
      <NavBar scrollY={scrollY} scrollTo={scrollTo} />
      <HeroSection scrollY={scrollY} scrollTo={scrollTo} />
      <SauronSection />
      <NazgulSection />
      <HistorySection />
      <ArtifactsSection />
      <GallerySection
        filter={galleryFilter}
        setFilter={setGalleryFilter}
        filteredGallery={filteredGallery}
        onSelect={setSelectedGallery}
      />
      <FooterSection />
      <GalleryModal item={selectedGallery} onClose={() => setSelectedGallery(null)} />
    </div>
  );
}
