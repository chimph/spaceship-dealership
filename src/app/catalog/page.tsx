"use client";

import { useState, useMemo } from "react";
import { spaceships, shipClasses } from "@/data/spaceships";
import ShipCard from "@/components/ShipCard";
import { motion } from "framer-motion";

export default function CatalogPage() {
  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("price-asc");

  const filteredShips = useMemo(() => {
    const filtered = selectedClass === "All"
      ? [...spaceships]
      : spaceships.filter((s) => s.class === selectedClass);

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "year-new":
        filtered.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        filtered.sort((a, b) => a.year - b.year);
        break;
      case "condition":
        filtered.sort((a, b) => b.conditionScore - a.conditionScore);
        break;
    }

    return filtered;
  }, [selectedClass, sortBy]);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs tracking-[0.4em] text-green">:: VESSEL INVENTORY ::</p>
          <h1 className="text-3xl font-bold tracking-wider text-amber glow-amber sm:text-4xl lg:text-5xl">
            CATALOG
          </h1>
          <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-amber-dim to-transparent" />
          <p className="mt-4 text-sm text-retro-text-dim">
            {filteredShips.length} vessel{filteredShips.length !== 1 ? "s" : ""} available
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-col gap-4 border-b border-retro-border pb-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedClass("All")}
              className={`rounded border px-3 py-1.5 text-xs tracking-wider transition-all ${
                selectedClass === "All"
                  ? "border-amber bg-amber/10 text-amber glow-box-amber"
                  : "border-retro-border text-retro-text-dim hover:border-amber-dim hover:text-amber"
              }`}
            >
              ALL
            </button>
            {shipClasses.map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`rounded border px-3 py-1.5 text-xs tracking-wider transition-all ${
                  selectedClass === cls
                    ? "border-amber bg-amber/10 text-amber glow-box-amber"
                    : "border-retro-border text-retro-text-dim hover:border-amber-dim hover:text-amber"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-retro-text-dim">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded border border-retro-border bg-retro-panel px-3 py-1.5 text-xs text-retro-text tracking-wider focus:border-amber-dim focus:outline-none"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-new">Year: Newest</option>
              <option value="year-old">Year: Oldest</option>
              <option value="condition">Condition: Best</option>
            </select>
          </div>
        </motion.div>

        {/* Ship Grid */}
        {filteredShips.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredShips.map((ship, index) => (
              <ShipCard key={ship.id} ship={ship} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-retro-text-dim">
              No vessels found matching your criteria.
            </p>
            <button
              onClick={() => setSelectedClass("All")}
              className="mt-4 text-sm text-amber underline hover:text-amber-glow"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
