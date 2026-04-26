import Image from "next/image";
import Link from "next/link";
import type { Spaceship } from "@/data/spaceships";
import { motion } from "framer-motion";

interface ShipCardProps {
  ship: Spaceship;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function ShipCard({ ship, index }: ShipCardProps) {
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

  return (
    <div className="group cursor-pointer overflow-hidden border border-retro-border bg-retro-panel glow-box-amber transition-all hover:-translate-y-1.5 hover:border-amber-dim">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Link href={`/ships/${ship.id}`}>
          <div className="relative h-48 w-full overflow-hidden sm:h-56">
            <Image
              src={ship.image}
              alt={ship.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-retro-panel to-transparent" />
            <div className="absolute right-3 top-3 rounded border border-amber-dim bg-retro-black/80 px-2 py-1 text-xs text-amber">
              {ship.class}
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="mb-1 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-amber glow-amber tracking-wide">
                  {ship.name}
                </h3>
                <p className="text-xs text-retro-text-dim">
                  {ship.manufacturer} {ship.model}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-lg font-bold text-amber glow-amber">
                  {formatPrice(ship.price)}
                </p>
                <p className="text-xs text-retro-text-dim">CREDITS</p>
              </div>
            </div>

            <div className="mb-3 flex flex-wrap gap-1.5">
              {ship.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-retro-border bg-retro-dark px-2 py-0.5 text-[10px] text-retro-text-dim uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-retro-border pt-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-retro-text-dim">CONDITION:</span>
                <span className={`text-xs font-bold ${getConditionColor(ship.conditionScore)}`}>
                  {ship.condition}
                </span>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-2 rounded-sm ${
                      i < ship.conditionScore ? getConditionBg(ship.conditionScore) : "bg-retro-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
