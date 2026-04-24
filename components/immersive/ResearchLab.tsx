"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const archiveData = [
  { id: "01", title: "Cultural Intelligence", img: "/images/nur-3.jpeg", tag: "Textile_Mapping" },
  { id: "02", title: "Marine Biodiversity", img: "/images/nur-4.jpg", tag: "Bio_Translation" },
  { id: "03", title: "The Acorn Engine", img: "/images/cyberpunk-woman-warrior-portrait.jpg", tag: "System_Core" },
];

export default function ResearchLab() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: "-200vw", // Moves based on the number of panels (3 panels = -200vw)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top", // Duration of the scroll
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-nurtree-dark">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex h-screen w-[300vw] relative">
          
          {/* Panel 0: Introduction */}
          <section className="h-screen w-screen flex flex-col justify-center px-10 lg:px-20 border-r border-white/5">
            <span className="font-mono text-nurtree-accent text-xs mb-4 uppercase tracking-[0.4em]">Section_02 // The_Lab</span>
            <h2 className="text-6xl lg:text-8xl font-bold text-white italic uppercase leading-none">
              Research <br /> <span className="text-outline">Archives</span>
            </h2>
            <p className="text-nurtree-earth mt-8 max-w-lg font-light text-lg">
              Every garment is a decoded signal. We study marine biomes and 
              disappearing African lineages to create the blueprint of the future.
            </p>
          </section>

          {/* Panels 1-3: The Data Slides */}
          {archiveData.map((item) => (
            <section key={item.id} className="h-screen w-screen flex items-center justify-center px-10 lg:px-40 relative border-r border-white/5">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 group">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute top-4 left-4 font-mono text-[10px] text-nurtree-accent bg-black/80 px-2 py-1 uppercase">
                      ID: {item.tag}_{item.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-6xl font-bold text-white uppercase italic">{item.title}</h3>
                    <p className="text-nurtree-earth mt-6 font-light max-w-sm">
                      Translating raw data points from the {item.title.toLowerCase()} ecosystem into physical luxury.
                    </p>
                    <button className="mt-10 font-mono text-xs text-nurtree-accent hover:tracking-widest transition-all">
                      [ ACCESS_ENCRYPTED_DATA ]
                    </button>
                  </div>
               </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}