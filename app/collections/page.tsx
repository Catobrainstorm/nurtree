"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function Collections() {
  useEffect(() => {
    // Standard system reveal for the ledger entries
    gsap.from(".product-card", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1.2,
      ease: "expo.out",
    });
  }, []);

  const collection = [
    {
      id: "EXP_01",
      name: "Benthic Shell",
      category: "Outerwear",
      img: "/images/nur-1.avif",
      data: "Depth: 4000m // Pressure: 400atm",
    },
    {
      id: "EXP_02",
      name: "Indigo Fragment",
      category: "Textile",
      img: "/images/nur-3.jpeg",
      data: "Fermentation: 21 Days // Origin: Kano",
    },
    {
      id: "EXP_03",
      name: "Coral Structure",
      category: "Knitwear",
      img: "/images/nur-2.jpg",
      data: "Pattern: Calcified Fractal // v2.0",
    },
    {
      id: "EXP_04",
      name: "Salinity Drape",
      category: "Silk",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000",
      data: "Solute: 35.5 PSU // Atlantic_Drift",
    },
    {
      id: "EXP_05",
      name: "The Archivist Suit",
      category: "Tailoring",
      // THE FIX: Linked to your specific image asset
      img: "/images/nur-4.jpg",
      // System data updated to reflect the visual artifact
      data: "System: Heritage_Archive // Synthesis",
    },
    {
      id: "EXP_06",
      name: "Thermal Mesh",
      category: "Layering",
      img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000",
      data: "Anomaly: +1.2°C // Heat_Signature",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* 01. EDITORIAL HEADER */}
      <section className="pt-40 pb-20 px-6 lg:px-20 divider">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row justify-between items-end gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.5em] opacity-40 uppercase">Volume_01 // expressions</span>
              <div className="w-12 h-[1px] bg-nurtree-accent opacity-50" />
            </div>
            <h1 className="text-[14vw] lg:text-[11rem] italic leading-[0.8] tracking-tighter">Collections</h1>
          </div>
          <div className="max-w-xs text-right space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-30 leading-relaxed">
              Every expression is a translation of environmental and cultural data into a physical blueprint.
            </p>
            <div className="font-mono text-[9px] text-nurtree-accent uppercase tracking-[0.3em]">
              [ Inventory: Active_Archive ]
            </div>
          </div>
        </div>
      </section>

      {/* 02. TECHNICAL GRID */}
      <section className="py-20 lg:py-40 px-6 lg:px-20">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 lg:gap-y-40">
          {collection.map((item) => (
            <div key={item.id} className="product-card group">
              {/* Asymmetrical Image Frame (Responsive) */}
              <div className="relative aspect-[3/4] overflow-hidden border border-[var(--border-color)] bg-zinc-100 dark:bg-zinc-900 transition-transform duration-700">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  alt={item.name} 
                />
                
                {/* Scientific Metadata Overlays */}
                <div className="absolute top-4 left-4 bg-[var(--bg-color)] px-3 py-1 font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.id}
                </div>
                <div className="absolute bottom-4 right-4 bg-nurtree-accent text-black px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Data_Verified
                </div>
              </div>

              {/* Inscription Block */}
              <div className="mt-8 flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl lg:text-4xl font-display uppercase italic tracking-tighter group-hover:text-nurtree-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-[9px] opacity-30 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
                <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">
                  {item.data}
                </p>
                <div className="w-0 h-[1px] bg-nurtree-accent group-hover:w-full transition-all duration-700 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. SYSTEM PARTICIPATION SECTION */}
      <section className="py-24 lg:py-48 px-6 lg:px-20 border-t border-[var(--border-color)] bg-transparent transition-colors duration-700">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-6xl lg:text-[10rem] italic leading-[0.8] uppercase tracking-tighter mb-8">
              Become a <br /> Participant.
            </h2>
            <p className="text-xl lg:text-3xl font-light opacity-80 max-w-2xl leading-relaxed">
              Wearing NurTrēë is an act of archiving. Each garment connects you to the specific biome and cultural expression it translates.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link 
              href="/contact" 
              className="px-12 py-6 border border-[var(--text-color)] bg-[var(--text-color)] text-[var(--bg-color)] font-mono text-[10px] uppercase tracking-[0.4em] hover:bg-nurtree-accent hover:text-black hover:border-nurtree-accent transition-all duration-500"
            >
              Request Lab Access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}