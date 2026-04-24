"use client";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MagazineBlock({ img, title, text, side = "left", number = "02" }: any) {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 01. SNAP-FOCUS IMAGE REVEAL
    const images = document.querySelectorAll(".mag-image-reveal");
    images.forEach((img) => {
      gsap.fromTo(img, 
        { scale: 1.25, filter: "blur(15px) grayscale(100%)", opacity: 0 },
        {
          scrollTrigger: {
            trigger: img,
            start: "top 95%", 
            end: "top 35%",   
            scrub: 0.8,
          },
          scale: 1,
          filter: "blur(0px) grayscale(0%)",
          opacity: 1,
          ease: "power2.out"
        }
      );
    });

    // 02. 3D HEADER FLIP
    const headers = document.querySelectorAll(".mag-reveal-header");
    headers.forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 92%",
        },
        rotateX: -90,
        y: 80,
        opacity: 0,
        duration: 1.4,
        transformOrigin: "top center",
        ease: "expo.out",
      });
    });

    // 03. TEXT STAGGER
    const textBlocks = document.querySelectorAll(".mag-text-reveal");
    textBlocks.forEach((block) => {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section className="py-24 lg:py-56 px-6 lg:px-20 divider bg-transparent relative overflow-hidden">
      {/* Background Watermark for Depth */}
      <div className={`absolute top-20 ${side === "left" ? "right-0" : "left-0"} text-[20vw] font-display font-bold opacity-[0.02] uppercase italic pointer-events-none whitespace-nowrap`}>
        {title}
      </div>

      <div className={`max-w-[1600px] mx-auto flex flex-col ${side === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-20 lg:gap-40 items-center relative z-10`}>
        
        {/* ASYMMETRICAL IMAGE FRAME */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="aspect-[4/5] border border-[var(--border-color)] overflow-hidden relative shadow-2xl">
            <img 
              src={img} 
              className="mag-image-reveal w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              alt={title} 
            />
            <div className="absolute top-4 right-4 font-mono text-[8px] opacity-40 uppercase tracking-widest [writing-mode:vertical-rl]">Laboratory_Asset_{number}</div>
          </div>
        </div>

        {/* CONTENT BLOCK */}
        <div className="w-full lg:w-1/2">
          <div className="mag-text-reveal flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.4em]">{number}_System_Dossier</span>
            <div className="h-[1px] w-12 bg-nurtree-accent opacity-50" />
          </div>
          
          <h2 className="mag-reveal-header text-[14vw] lg:text-[10rem] mb-12 italic leading-[0.8] tracking-tighter uppercase">{title}</h2>
          
          <div className="max-w-md space-y-10">
            <p className="mag-text-reveal text-xl lg:text-3xl font-light opacity-80 leading-relaxed tracking-tight">
              {text}
            </p>
            
            <div className="mag-text-reveal pt-8">
              {/* TAKES US DIRECTLY TO THE ACORN PAGE */}
              <Link href="/acorn" className="group flex items-center gap-8">
                <div className="relative w-16 h-16 border border-[var(--border-color)] rounded-full flex items-center justify-center group-hover:border-nurtree-accent transition-all duration-500">
                  <div className="w-2.5 h-2.5 bg-[var(--text-color)] rounded-full group-hover:bg-nurtree-accent animate-pulse" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] group-hover:text-nurtree-accent transition-all">Enter Laboratory</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}