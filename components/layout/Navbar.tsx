"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { X, Menu, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power4.inOut" });
    } else {
      gsap.to(menuRef.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.6, ease: "power4.inOut" });
    }
  }, [menuOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "The Root", href: "/#root" },
    { name: "Acorn Lab", href: "/acorn" },
    { name: "Collections", href: "/collections" },
    { name: "Archives", href: "/archives" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[120] h-20 flex items-center justify-between px-6 md:px-16 mix-blend-difference text-white">
        <Link href="/" className="font-display text-xl tracking-widest uppercase italic">NurTrēë</Link>
        <div className="flex items-center gap-10">
          <button onClick={toggleTheme} className="p-2 cursor-pointer">{isDark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setMenuOpen(true)} className="group flex items-center gap-3 py-2 cursor-pointer">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">Menu</span>
            <div className="w-5 h-[1px] bg-white opacity-50 group-hover:w-8 transition-all" />
          </button>
        </div>
      </nav>

      <div ref={menuRef} className="fixed inset-0 z-[130] bg-white text-black dark:bg-[#050505] dark:text-white flex flex-col p-8 lg:p-20 overflow-hidden menu-overlay" style={{ clipPath: "inset(0% 0% 100% 0%)" }}>
        <div className="flex justify-between items-center w-full border-b border-black/5 dark:border-white/5 pb-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">Begin the tour here—</p>
          <button onClick={() => setMenuOpen(false)} className="p-2 cursor-pointer"><X size={28} /></button>
        </div>
        <div className="flex-grow flex flex-col justify-center gap-4">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-4xl lg:text-7xl font-display uppercase italic hover:text-nurtree-accent transition-all">
                {link.name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}