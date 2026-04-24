"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-zinc-900 border border-white/5">
      <img ref={imageRef} src={src} alt={alt} className="absolute inset-0 w-full h-[140%] object-cover scale-110 grayscale brightness-75" />
    </div>
  );
}