"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SystemReveal({ children }: { children: React.ReactNode }) {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.from(revealRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return <div ref={revealRef}>{children}</div>;
}