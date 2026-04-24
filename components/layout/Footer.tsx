"use client";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Staggered reveal for footer columns
    gsap.from(".footer-reveal", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer className="relative py-20 lg:py-32 px-6 lg:px-20 bg-transparent overflow-hidden border-t border-[var(--border-color)]">
      {/* Dynamic Watermark - Scales with viewport */}
      <div className="absolute -bottom-6 lg:-bottom-10 -left-10 lg:-left-20 text-[20vw] font-display font-bold opacity-[0.03] uppercase italic whitespace-nowrap pointer-events-none leading-none">
        System Scientist
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* Brand Block */}
        <div className="lg:col-span-6 footer-reveal">
          {/* Fluid Typography: text-[18vw] for mobile, text-[11rem] for desktop */}
          <h2 className="text-[18vw] lg:text-[11rem] font-display italic tracking-tighter uppercase mb-8 lg:mb-12 leading-[0.8]">
            NurTrēë
          </h2>
          <div className="max-w-xs space-y-6">
            <p className="font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.4em] opacity-40 leading-relaxed">
              Translating disappearing African heritage and marine biodiversity into wearable, physical narratives.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="w-2 h-2 bg-nurtree-accent rounded-full animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-20">Lagos HQ // Status: Operational</span>
            </div>
          </div>
        </div>

        {/* Portal Links */}
        <div className="lg:col-span-3 footer-reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-20 mb-8 lg:mb-12 text-black dark:text-white">Portal_Access</p>
          <div className="flex flex-col gap-6 lg:gap-8 font-display text-3xl lg:text-5xl uppercase italic">
            <Link href="/" className="hover:text-nurtree-accent hover:pl-4 transition-all duration-500">Home</Link>
            <Link href="/acorn" className="hover:text-nurtree-accent hover:pl-4 transition-all duration-500">Acorn Lab</Link>
            <Link href="/collections" className="hover:text-nurtree-accent hover:pl-4 transition-all duration-500">Collections</Link>
            <Link href="/archives" className="hover:text-nurtree-accent hover:pl-4 transition-all duration-500">Archives</Link>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between footer-reveal">
          <div className="flex flex-col items-start lg:items-end gap-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-20 text-black dark:text-white">Social_Interface</p>
            <div className="flex flex-wrap gap-8 lg:gap-10 font-display text-3xl lg:text-4xl uppercase italic">
              <a href="#" className="hover:text-nurtree-accent transition-all duration-500 underline underline-offset-8 decoration-1 decoration-[var(--border-color)]">Instagram</a>
              {/* WhatsApp Addition */}
              <a href="https://wa.me/yournumber" className="hover:text-nurtree-accent transition-all duration-500 underline underline-offset-8 decoration-1 decoration-[var(--border-color)]">WhatsApp</a>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-32 text-left lg:text-right">
             <p className="font-mono text-[9px] opacity-20 uppercase tracking-[0.6em] leading-loose">
               © 2026 NURTRĒË SYSTEM.<br />
               All Rights Processed.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}