"use client";
import { useEffect } from "react";
import Hero from "@/components/immersive/Hero";
import MagazineBlock from "@/components/immersive/MagazineBlock";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll(".image-reveal");
    images.forEach((img) => {
      gsap.fromTo(img, 
        { scale: 1.3, filter: "blur(20px) grayscale(100%) brightness(0.5)", opacity: 0 },
        {
          scrollTrigger: {
            trigger: img,
            start: "top 98%",
            end: "top 30%",
            scrub: 0.8,
          },
          scale: 1,
          filter: "blur(0px) grayscale(0%) brightness(1)",
          opacity: 1,
          ease: "power2.out"
        }
      );
    });

    const headers = document.querySelectorAll(".reveal-header");
    headers.forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 90%",
        },
        rotateX: -90,
        y: 100,
        opacity: 0,
        duration: 1.5,
        transformOrigin: "top center",
        ease: "expo.out",
      });
    });

    gsap.to(".parallax-slow", {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      y: -150,
      ease: "none"
    });

    gsap.to(".parallax-fast", {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      y: 100,
      ease: "none"
    });

  }, []);

  return (
    <main className="bg-transparent overflow-x-hidden perspective-container">
      <Navbar />
      <Hero />

      {/* 01. THE ROOT PORTAL */}
      <section id="root" className="relative py-24 lg:py-64 px-6 lg:px-20 divider overflow-hidden">
        <div className="parallax-slow absolute top-20 right-0 text-[20vw] font-display font-bold opacity-[0.02] uppercase italic pointer-events-none whitespace-nowrap">
          SYSTEM_SCIENTIST_V4
        </div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:col-span-7 parallax-fast">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 block mb-6">[ 01_ARCHAEOLOGY ]</span>
            <h2 className="reveal-header text-outline text-[18vw] lg:text-[14rem] italic mb-10">The Root</h2>
            
            <div className="max-w-2xl space-y-12">
              <p className="text-4xl lg:text-7xl font-light tracking-tight leading-[0.95]">
                Translating <span className="italic font-normal">invisible systems</span> into physical artifacts.
              </p>
              <div className="w-20 h-[1px] bg-nurtree-accent" />
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-60">
                Oceans temperatures, biodiversity loss, and disappearing African heritage. We don't just design; we archive the pulse of the Earth.
              </p>
              <Link href="/archives" className="group flex items-center gap-6 pt-6">
                <div className="w-12 h-12 border border-[var(--border-color)] rounded-full flex items-center justify-center group-hover:border-nurtree-accent transition-all duration-500">
                   <div className="w-1.5 h-1.5 bg-[var(--text-color)] rounded-full group-hover:bg-nurtree-accent animate-ping" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] group-hover:text-nurtree-accent transition-all">Read The Manifesto</span>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] w-full lg:w-[120%] lg:-ml-10 border border-[var(--border-color)] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative group">
                <img src="/images/nur-1.avif" className="image-reveal w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="Root Concept" />
                <div className="absolute top-4 right-4 font-mono text-[8px] opacity-40 uppercase vertical-text">SCAN_ACTIVE_REF_01</div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <MagazineBlock 
          img="/images/cyberpunk-woman-warrior-portrait.jpg" 
          title="Acorn Lab" 
          text="A research-driven design engine studying marine biomes and ancestral Nigerian textiles. This is the synthesis." 
          side="right"
          number="02"
        />
      </div>

      {/* 03. COLLECTIONS PREVIEW */}
      <section className="py-24 lg:py-64 px-6 lg:px-20 divider relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 lg:mb-32 gap-10">
            <div className="max-w-4xl w-full">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8 block">03_SYSTEM_OUTPUT</span>
              {/* FIXED: Added fluid sizing text-[15vw] for mobile */}
              <h2 className="reveal-header text-[15vw] lg:text-[12rem] leading-[0.8] lg:leading-[0.75] italic uppercase tracking-tighter">Current <br className="hidden lg:block" /> Expressiōns</h2>
            </div>
            <Link href="/collections" className="group flex flex-col items-end mb-4 shrink-0">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">Request Access</p>
              <div className="w-32 h-[1px] bg-[var(--text-color)] mt-4 group-hover:w-64 transition-all duration-1000" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
            <div className="aspect-[3/4] border border-[var(--border-color)] p-4 lg:p-12 group overflow-hidden relative">
               <img src="/images/nur-3.jpeg" className="image-reveal w-full h-full object-cover grayscale group-hover:scale-110 transition-all duration-[1.5s]" alt="01" />
               <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[9px] uppercase tracking-widest">Specimen_TX_44</div>
            </div>
            <div className="aspect-[3/4] border border-[var(--border-color)] p-4 lg:p-12 group overflow-hidden relative">
               <img src="/images/nur-2.jpg" className="image-reveal w-full h-full object-cover grayscale group-hover:scale-110 transition-all duration-[1.5s]" alt="02" />
               <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[9px] uppercase tracking-widest">Specimen_WAT_09</div>
            </div>
            
            <div className="aspect-[3/4] border border-[var(--border-color)] flex flex-col justify-center items-center text-center p-8 lg:p-12 bg-[var(--text-color)] text-[var(--bg-color)] overflow-hidden relative">
               <div className="absolute top-0 left-0 w-full h-full bg-nurtree-accent opacity-0 hover:opacity-5 transition-opacity" />
               {/* FIXED: Changed text-6xl to fluid text-[12vw] lg:text-6xl */}
               <p className="font-display text-[12vw] lg:text-6xl italic mb-10 lg:mb-12 leading-none uppercase">Archetype <br /> Ledger</p>
               <Link href="/collections" className="px-12 py-5 border border-[var(--bg-color)] text-[10px] font-mono uppercase tracking-[0.4em] hover:bg-nurtree-accent hover:text-black hover:border-nurtree-accent transition-all duration-500">
                  Enter Shop
               </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}