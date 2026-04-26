"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Spaceship } from "@/data/spaceships";

interface Props {
  ship: Spaceship;
}

export default function ShipDetailClient({ ship }: Props) {
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const getConditionColor = (score: number) => {
    if (score >= 8) return "text-green";
    if (score >= 6) return "text-amber";
    return "text-red";
  };

  const getConditionBg = (score: number) => {
    if (score >= 8) return "bg-green";
    if (score >= 6) return "bg-amber";
    return "bg-red";
  };

  const specs = [
    { label: "HULL", value: ship.specs.hull },
    { label: "ENGINE", value: ship.specs.engine },
    { label: "MAX SPEED", value: ship.specs.speed },
    { label: "CARGO CAPACITY", value: ship.specs.cargo },
    { label: "CREW", value: ship.specs.crew },
    { label: "OPERATIONAL RANGE", value: ship.specs.range },
    { label: "ARMAMENT", value: ship.specs.armament },
    { label: "SHIELDS", value: ship.specs.shields },
  ];

  const relatedShips = spaceships.filter((s) => s.class === ship.class && s.id !== ship.id).slice(0, 3);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm text-retro-text-dim transition-colors hover:text-amber"
          >
            <span>&larr;</span>
            <span>BACK TO CATALOG</span>
          </Link>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="relative h-72 w-full overflow-hidden border border-retro-border bg-retro-panel sm:h-96 lg:h-full lg:min-h-[500px]">
              <Image
                src={ship.image}
                alt={ship.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 border-t-2 border-b-2 border-retro-border" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                {ship.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-retro-border bg-retro-black/80 px-2 py-0.5 text-[10px] text-retro-text-dim uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 space-y-6">
              <div>
                <p className="mb-1 text-xs tracking-widest text-green">:: VESSEL SPEC ::</p>
                <h1 className="text-3xl font-bold tracking-wider text-amber glow-amber">
                  {ship.name}
                </h1>
                <p className="mt-1 text-sm text-retro-text-dim">
                  {ship.manufacturer} &bull; {ship.model}
                </p>
              </div>

              <div className="flex items-end justify-between border-b border-retro-border pb-4">
                <div>
                  <p className="text-xs tracking-wider text-retro-text-dim">PRICE</p>
                  <p className="text-3xl font-bold text-amber glow-amber">
                    {formatPrice(ship.price)}
                  </p>
                  <p className="text-xs text-retro-text-dim">CREDITS</p>
                </div>
                <div className="text-right">
                  <p className="text-xs tracking-wider text-retro-text-dim">YEAR</p>
                  <p className="text-xl font-bold text-amber">{ship.year}</p>
                </div>
              </div>

              {/* Condition */}
              <div className="border-b border-retro-border pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs tracking-wider text-retro-text-dim">CONDITION</span>
                  <span className={`text-sm font-bold ${getConditionColor(ship.conditionScore)}`}>
                    {ship.condition}
                  </span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-sm ${
                        i < ship.conditionScore
                          ? getConditionBg(ship.conditionScore)
                          : "bg-retro-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-1 text-right text-xs text-retro-text-dim">
                  {ship.conditionScore}/10
                </p>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <button className="w-full rounded border border-amber bg-amber/10 py-3 text-sm font-bold tracking-widest text-amber transition-all hover:bg-amber/20 glow-box-amber">
                  INQUIRE ABOUT THIS VESSEL
                </button>
                <button className="w-full rounded border border-retro-border py-3 text-sm font-bold tracking-widest text-retro-text-dim transition-colors hover:border-amber-dim hover:text-amber">
                  SCHEDULE VIEWING
                </button>
              </div>

              <div className="text-center text-xs text-retro-text-dim">
                <p>Financing available. Trade-ins accepted.</p>
                <p>Full pre-flight inspection included.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t border-retro-border pt-8"
        >
          <p className="text-xs tracking-[0.3em] text-green mb-4">:: VESSEL DESCRIPTION ::</p>
          <p className="max-w-3xl leading-relaxed text-retro-text">{ship.description}</p>
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 border-t border-retro-border pt-8"
        >
          <p className="mb-6 text-xs tracking-[0.3em] text-green">:: TECHNICAL SPECIFICATIONS ::</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded border border-retro-border bg-retro-panel p-4"
              >
                <p className="mb-1 text-[10px] tracking-widest text-retro-text-dim">
                  {spec.label}
                </p>
                <p className="text-sm font-bold text-amber">{spec.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related Ships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 border-t border-retro-border pt-8"
        >
          <p className="mb-6 text-xs tracking-[0.3em] text-green">:: SIMILAR VESSELS ::</p>
          {relatedShips.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedShips.map((relatedShip, index) => (
                <RelatedShip key={relatedShip.id} ship={relatedShip} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-retro-text-dim">
              No other vessels in this class currently available.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

import { spaceships } from "@/data/spaceships";

function RelatedShip({
  ship,
  index,
}: {
  ship: Spaceship;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/ships/${ship.id}`}>
        <div className="group cursor-pointer border border-retro-border bg-retro-panel p-4 transition-all hover:border-amber-dim glow-box-amber">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-amber tracking-wide group-hover:glow-amber">
              {ship.name}
            </h3>
            <p className="text-sm font-bold text-amber">
              {ship.price.toLocaleString()} CR
            </p>
          </div>
          <p className="text-xs text-retro-text-dim">{ship.manufacturer} {ship.model}</p>
          <div className="mt-2 flex gap-1">
            {ship.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded border border-retro-border bg-retro-dark px-1.5 py-0.5 text-[10px] text-retro-text-dim uppercase"
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
