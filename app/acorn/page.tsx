"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AcornLab() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 01. Reveal animations for data segments
    gsap.from(".reveal", { 
      opacity: 0, 
      y: 30, 
      stagger: 0.2, 
      duration: 1.2, 
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".reveal",
        start: "top 90%",
      }
    });

    // 02. Image Snap-Focus
    gsap.fromTo(".image-reveal", 
      { scale: 1.2, filter: "blur(15px) grayscale(100%)", opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".image-reveal",
          start: "top 95%",
          end: "top 40%",
          scrub: 1,
        },
        scale: 1,
        filter: "blur(0px) grayscale(0%)",
        opacity: 1,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      
      {/* 01. TERMINAL HEADER */}
      <section className="pt-40 pb-24 px-6 lg:px-20 divider">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="w-3 h-3 bg-nurtree-accent rounded-full animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase opacity-40">
              System_Identity: Research_Engine_v4.0
            </span>
          </div>
          {/* RESPONSIVE FIX: text-[15vw] added to prevent mobile break */}
          <h1 className="text-[15vw] lg:text-[11rem] italic leading-[0.8] tracking-tighter mb-16 reveal">
            Acorn <br /> Project
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 reveal">
            <div className="lg:col-span-7">
              <p className="text-3xl lg:text-6xl font-light leading-[1.05] tracking-tight">
                Small beginnings holding the potential for <span className="italic">vast ecosystems</span>. 
                This is where knowledge becomes creation.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="font-mono text-[11px] uppercase tracking-widest opacity-40 border-l border-[var(--border-color)] pl-6 leading-relaxed">
                NurTrēë is not a brand. It is a response. A digital and physical archivist for a changing planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. THE PIPELINE (TECHNICAL GRID) */}
      <section className="py-24 lg:py-48 px-6 lg:px-20 divider">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
            {[
              { step: "01", title: "Intelligence", desc: "Studying marine biomes and disappearing African cultural data." },
              { step: "02", title: "Translation", desc: "Insights transformed into symbols, design language, and narratives." },
              { step: "03", title: "Synthesis", desc: "Sustainable materials and craftsmanship bring the story to life." },
              { step: "04", title: "Interface", desc: "Garments become a bridge between the wearer and the ecosystem." }
            ].map((item) => (
              <div key={item.step} className="reveal bg-[var(--bg-color)] p-10 lg:p-16 space-y-8 group hover:bg-nurtree-accent transition-colors duration-700">
                <span className="font-mono text-[10px] opacity-30 group-hover:text-black transition-colors">{item.step}</span>
                <h3 className="text-4xl font-display group-hover:text-black transition-colors">{item.title}</h3>
                <p className="text-sm font-light opacity-60 leading-relaxed group-hover:text-black transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. MISSION DOSSIER (THE DEEP COPY) */}
      <section className="py-24 lg:py-48 px-6 lg:px-20 bg-transparent">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40 aspect-[3/4] border border-[var(--border-color)] overflow-hidden group">
               <img 
                 src="/images/cyberpunk-woman-warrior-portrait.jpg" 
                 className="image-reveal w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 transition-all duration-1000" 
                 alt="The Researcher" 
               />
               <div className="absolute inset-0 bg-nurtree-accent/5 mix-blend-overlay" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-24">
            <div className="reveal">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 block">Section_01 // The Problem</span>
              <h2 className="text-5xl lg:text-8xl italic mb-8">Quiet Erosion.</h2>
              <p className="text-xl lg:text-3xl font-light leading-relaxed opacity-80">
                Oceans are losing biodiversity. African traditions are fading. These losses don’t always arrive loudly—they happen quietly, until they are gone. People don’t feel these problems emotionally. <span className="italic">We fix the disconnection.</span>
              </p>
            </div>

            <div className="reveal">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 block">Section_02 // The Strategy</span>
              <h2 className="text-5xl lg:text-8xl italic mb-8">Behavioral Design.</h2>
              <p className="text-xl lg:text-3xl font-light leading-relaxed opacity-80">
                NurTrēë is a Behavioral Design System. We are influencing what people wear, what they value, and how they perceive the link between nature and identity.
              </p>
            </div>

            <div className="reveal pb-20">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 block">Section_03 // The Engine</span>
              <h2 className="text-5xl lg:text-8xl italic mb-8">Making the Invisible, Visible.</h2>
              <p className="text-xl lg:text-3xl font-light leading-relaxed opacity-80">
                Through the Acorn Project, we integrate marine biology, environmental science, and genetics. We translate data into insights, stories into fabrics, and fabrics into human awareness.
              </p>
              <div className="mt-12 flex gap-10">
                 <div className="flex flex-col">
                    <span className="font-mono text-[20px] font-bold">1,442</span>
                    <span className="font-mono text-[9px] uppercase opacity-40">Archived_Patterns</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-mono text-[20px] font-bold">08</span>
                    <span className="font-mono text-[9px] uppercase opacity-40">Marine_Biomes_Tracked</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. DATA STRIP MARQUEE */}
      <div className="py-8 bg-nurtree-accent text-black overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-20 font-mono text-[10px] font-bold uppercase tracking-[0.5em]">
          <span>Culture Translated // Nature Preserved // Marine Bio Mapping // System Scientist // Acorn Project v4.0</span>
          <span>Culture Translated // Nature Preserved // Marine Bio Mapping // System Scientist // Acorn Project v4.0</span>
        </div>
      </div>

      <Footer />
    </main>
  );
}