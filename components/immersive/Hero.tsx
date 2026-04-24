"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { y: 100, opacity: 0, duration: 2, ease: "expo.out", stagger: 0.2 });
      gsap.to(imageRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-screen flex flex-col justify-end overflow-hidden px-6 lg:px-12 pb-12 lg:pb-20">
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef} 
          src="/images/nur-2.jpg" 
          alt="Nurtree Hero" 
          className="w-full h-[115%] object-cover object-[center_25%] contrast-[1.05]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-end gap-10">
        <div className="lg:col-span-8"> 
          <h1 className="hero-content text-[clamp(4rem,22vw,16rem)] leading-[0.8] tracking-tighter text-white italic mix-blend-difference">
            Nur<span className="text-outline-white">Trēë</span>
          </h1>
        </div>
        <div className="lg:col-span-4 pb-4">
          <p className="hero-content text-white text-sm lg:text-lg font-light leading-snug max-w-sm border-l border-white/30 pl-5">
            Translating disappearing African heritage and marine biodiversity into wearable, physical narratives.
          </p>
        </div>
      </div>
    </section>
  );
}