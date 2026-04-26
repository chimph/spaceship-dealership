"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-retro-black via-retro-dark/50 to-retro-black" />

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm tracking-[0.5em] text-retro-text-dim sm:text-base">
              EST. 2187 &bull; ORBITAL STATION THETA
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-5xl font-black tracking-wider text-amber glow-amber sm:text-7xl lg:text-8xl"
          >
            STARLINE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-2 text-lg tracking-widest text-retro-text-dim sm:text-xl"
          >
            SPACECRAFT COMPANY
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mb-10 h-px w-64 bg-gradient-to-r from-transparent via-amber-dim to-transparent sm:w-96"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-retro-text-dim sm:text-lg"
          >
            Premium vintage interstellar vessels for the discerning spacefarer.
            From nimble fighters to luxury yachts, find your perfect ship among
            the stars.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/catalog"
              className="group relative overflow-hidden rounded border border-amber bg-amber/10 px-8 py-3 text-sm font-bold tracking-widest text-amber transition-all hover:bg-amber/20 glow-box-amber"
            >
              <span className="relative z-10">BROWSE CATALOG</span>
              <span className="absolute inset-0 h-full w-full translate-x-full bg-amber/10 transition-transform duration-300 group-hover:translate-x-0" />
            </Link>

            <Link
              href="/about"
              className="rounded border border-retro-border px-8 py-3 text-sm font-bold tracking-widest text-retro-text-dim transition-colors hover:border-amber-dim hover:text-amber"
            >
              LEARN MORE
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 grid grid-cols-3 gap-4 text-center sm:gap-8"
          >
            <div>
              <p className="text-2xl font-bold text-amber glow-amber sm:text-3xl">8</p>
              <p className="text-xs tracking-wider text-retro-text-dim sm:text-sm">VESSELS IN STOCK</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber glow-amber sm:text-3xl">8</p>
              <p className="text-xs tracking-wider text-retro-text-dim sm:text-sm">MANUFACTURERS</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber glow-amber sm:text-3xl">200+</p>
              <p className="text-xs tracking-wider text-retro-text-dim sm:text-sm">SECTORS SERVED</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Ships Teaser */}
      <section className="border-t border-retro-border bg-retro-dark py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-xs tracking-[0.4em] text-green">:: FEATURED VESSELS ::</p>
            <h2 className="text-3xl font-bold tracking-wider text-amber glow-amber sm:text-4xl">
              THIS WEEK&apos;S SELECTION
            </h2>
            <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-amber-dim to-transparent" />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "phantom-stealth", name: "Phantom", model: "ST-X Recon", price: 2750000, tags: ["stealth", "rare"], image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80" },
              { id: "nova-collector", name: "Nova", model: "NC-1 Luxury Yacht", price: 5200000, tags: ["luxury", "yacht"], image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80" },
              { id: "peregrine-fighter", name: "Peregrine", model: "MK-IV Interceptor", price: 425000, tags: ["fast", "light"], image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80" },
            ].map((ship) => (
              <FeaturedShip key={ship.id} ship={ship} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/catalog"
              className="inline-block border-b border-amber-dim pb-1 text-sm text-amber transition-colors hover:text-amber-glow"
            >
              VIEW ALL VESSELS &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-retro-border bg-retro-panel py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-bold tracking-wider text-amber glow-amber sm:text-3xl">
              READY TO LAUNCH?
            </h2>
            <p className="mb-8 text-retro-text-dim sm:text-lg">
              Contact our sales team for a private viewing. We offer financing,
              trade-ins, and complete pre-flight inspections.
            </p>
            <div className="flex flex-col items-center gap-3 text-sm text-retro-text-dim">
              <p>Comm: STARLINE-2187</p>
              <p>Quantum Fax: 0xSTARLINE</p>
              <p>Visit us at Orbital Station Theta, Docking Bay 7</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeaturedShip({
  ship,
}: {
  ship: { id: string; name: string; model: string; price: number; tags: string[]; image: string };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer border border-retro-border bg-retro-black border-solid hover:border-amber-dim glow-box-amber"
    >
      <Link href={`/ships/${ship.id}`}>
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={ship.image}
            alt={ship.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-retro-black via-transparent to-transparent" />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-amber tracking-wide group-hover:glow-amber">
                {ship.name}
              </h3>
              <p className="text-xs text-retro-text-dim">{ship.model}</p>
            </div>
            <p className="text-sm font-bold text-amber">
              {ship.price.toLocaleString()} CR
            </p>
          </div>
          <div className="flex gap-2">
            {ship.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-retro-border bg-retro-panel px-2 py-0.5 text-[10px] text-retro-text-dim uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
