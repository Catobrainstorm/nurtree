"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Archives() {
  const tableRef = useRef(null);

  useEffect(() => {
    gsap.from(".archive-row", {
      opacity: 0,
      x: -30,
      stagger: 0.08,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  const systemArchives = [
    { id: "BIO_77", subject: "Benthic_Crustacean_Silk", origin: "6.45°N 3.38°E", status: "STABLE", type: "Marine_Fiber" },
    { id: "CLT_12", subject: "Kano_Indigo_Molecular_Vat", origin: "12.00°N 8.59°E", status: "VANISHING", type: "Pigment_Data" },
    { id: "TX_902", subject: "Adire_Fractal_Geometry", origin: "7.15°N 3.35°E", status: "ARCHIVED", type: "Pattern_Alg" },
    { id: "WAT_04", subject: "Atlantic_Salinity_Shift", origin: "0.00°N 0.00°E", status: "CRITICAL", type: "Environmental" },
    { id: "GEO_55", subject: "Harmattan_Dust_Silicon", origin: "13.51°N 2.11°E", status: "SEASONAL", type: "Mineral_Data" },
    { id: "BIO_102", subject: "Mangrove_Root_Reinforcement", origin: "4.75°N 7.00°E", status: "RESTORING", type: "Bio_Structural" },
    { id: "CLT_88", subject: "Disappearing_Igbo_Uli_Symbols", origin: "6.45°N 7.50°E", status: "THREATENED", type: "Cultural_Intel" },
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* 01. DATABASE HEADER */}
      <section className="pt-40 pb-24 px-6 lg:px-20 divider relative overflow-hidden">
        {/* Background Terminal ID */}
        <div className="absolute top-10 right-10 font-mono text-[8px] opacity-20 uppercase tracking-[0.8em] vertical-text">
          System_Archives_v4.0.01 // Restricted_Access
        </div>

        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-baseline gap-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-2 h-2 bg-nurtree-accent rounded-full animate-pulse" />
                 <span className="font-mono text-[10px] tracking-[0.5em] opacity-40 uppercase">Archivist_Interface</span>
              </div>
              <h1 className="text-[15vw] lg:text-[13rem] italic leading-[0.8] tracking-tighter uppercase">The Ledger</h1>
            </div>
            <div className="max-w-md">
              <p className="text-xl lg:text-3xl font-light leading-snug opacity-70">
                A permanent record of <span className="italic">environmental intelligence</span> and <span className="italic">vanishing cultural artifacts</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. DATA INTERFACE GRID */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: Technical Table */}
          <div className="lg:col-span-9">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-color)] font-mono text-[9px] uppercase tracking-[0.5em] opacity-30">
                    <th className="pb-8">Specimen_ID</th>
                    <th className="pb-8">Research_Subject</th>
                    <th className="pb-8">Geo_Coordinates</th>
                    <th className="pb-8">Status</th>
                    <th className="pb-8 text-right">Classification</th>
                  </tr>
                </thead>
                <tbody ref={tableRef}>
                  {systemArchives.map((entry) => (
                    <tr key={entry.id} className="archive-row group border-b border-[var(--border-color)] hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-500 cursor-crosshair">
                      <td className="py-10 font-mono text-[10px] opacity-40">{entry.id}</td>
                      <td className="py-10 text-2xl lg:text-5xl font-display uppercase italic tracking-tighter group-hover:pl-4 transition-all">{entry.subject}</td>
                      <td className="py-10 font-mono text-[10px] opacity-40">{entry.origin}</td>
                      <td className="py-10 font-mono text-[10px]">
                        <span className={`px-2 py-1 border border-[var(--border-color)] ${entry.status === 'CRITICAL' ? 'text-red-500' : 'text-nurtree-accent'}`}>
                          {entry.status}
                        </span>
                      </td>
                      <td className="py-10 text-right font-mono text-[10px] opacity-40 italic">{entry.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Specimen Preview */}
          <div className="lg:col-span-3 self-start sticky top-40 space-y-12">
            <div className="aspect-[3/4] border border-[var(--border-color)] overflow-hidden relative grayscale shadow-2xl">
              <img src="/images/nur-3.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" alt="Specimen Preview" />
              <div className="absolute top-4 right-4 font-mono text-[8px] bg-nurtree-accent text-black px-2 py-1 font-bold">LIVE_SCAN</div>
            </div>
            
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block">Archivist_Note:</span>
              <p className="text-sm font-light leading-relaxed opacity-60 italic">
                "Specimen CLT_12 represents the last stable fermentation vat in the Old Kano Indigo district. Transitioning data into TX_Pattern_09 for garment integration."
              </p>
              <div className="w-12 h-[1px] bg-nurtree-accent" />
            </div>
          </div>

        </div>
      </section>

      {/* 03. LIVE SYSTEM STRIP */}
      <section className="py-10 bg-[var(--text-color)] text-[var(--bg-color)] overflow-hidden">
        <div className="flex animate-marquee gap-20 font-mono text-[10px] font-bold uppercase tracking-[0.6em] whitespace-nowrap">
           <span>Atlantic_Salinity: 35.5 PSU // Biodiversity_Loss: -2.4% // Cultural_Archive_Active // NurTrēë System Scientist // Marine_Biome: 04 //</span>
           <span>Atlantic_Salinity: 35.5 PSU // Biodiversity_Loss: -2.4% // Cultural_Archive_Active // NurTrēë System Scientist // Marine_Biome: 04 //</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}