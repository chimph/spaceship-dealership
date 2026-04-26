"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/catalog", label: "CATALOG" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-retro-border bg-retro-black/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-amber glow-amber"
        >
          <span className="text-2xl">&#9670;</span>
          <span className="tracking-widest">STARLINE</span>
          <span className="hidden text-sm text-retro-text-dim sm:inline-block">
            SPACECRAFT CO.
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-1.5 text-sm tracking-wider transition-colors ${
                  isActive
                    ? "bg-retro-panel text-amber border border-amber-dim glow-box-amber"
                    : "text-retro-text-dim hover:text-amber hover:border-amber-dim border border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
