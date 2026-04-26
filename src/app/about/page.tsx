"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs tracking-[0.4em] text-green">:: ABOUT US ::</p>
          <h1 className="text-3xl font-bold tracking-wider text-amber glow-amber sm:text-4xl lg:text-5xl">
            STARLINE SPACECRAFT CO.
          </h1>
          <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-amber-dim to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Our Story */}
          <section>
            <h2 className="mb-4 text-xl font-bold tracking-wider text-amber">OUR STORY</h2>
            <div className="space-y-4 text-retro-text">
              <p className="leading-relaxed">
                Founded in 2187 by Captain Elena Vasquez, Starline Spacecraft Co. began as a
                small repair shop on Orbital Station Theta. What started as a passion for keeping
                vintage ships flying has grown into the most trusted name in pre-owned
                interstellar vessels.
              </p>
              <p className="leading-relaxed">
                Over three decades later, we continue to serve spacefarers across 200+ sectors.
                Our team of expert engineers and pilots personally inspects every vessel that
                bears the Starline name, ensuring that each ship meets our rigorous standards
                before it reaches our catalog.
              </p>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="mb-4 text-xl font-bold tracking-wider text-amber">OUR VALUES</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "INTEGRITY",
                  desc: "Every ship comes with a complete service history. We never hide defects or inflate specifications.",
                },
                {
                  title: "EXCELLENCE",
                  desc: "Our engineers perform 200+ point inspections on every vessel. Only ships meeting our standards make the cut.",
                },
                {
                  title: "COMMUNITY",
                  desc: "We support the interstellar community through scholarships, repair clinics, and free navigation workshops.",
                },
                {
                  title: "INNOVATION",
                  desc: "We embrace the latest in spacefaring technology while honoring the classics that started it all.",
                },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="rounded border border-retro-border bg-retro-panel p-5"
                >
                  <h3 className="mb-2 text-sm font-bold text-amber tracking-wider">{value.title}</h3>
                  <p className="text-sm text-retro-text-dim leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="mb-4 text-xl font-bold tracking-wider text-amber">SERVICES</h2>
            <div className="space-y-3">
              {[
                "Complete pre-flight inspections",
                "Financing & lease-to-own programs",
                "Trade-in evaluations",
                "Custom modifications & upgrades",
                "Crew training programs",
                "Extended warranty packages",
                "Quantum communication setup",
                "Hyperspace lane planning",
              ].map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  className="flex items-center gap-3 border-b border-retro-border pb-3"
                >
                  <span className="text-xs text-green">&gt;</span>
                  <span className="text-sm text-retro-text">{service}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="rounded border border-retro-border bg-retro-panel p-8 text-center">
            <h2 className="mb-4 text-xl font-bold tracking-wider text-amber">GET IN TOUCH</h2>
            <div className="space-y-2 text-sm text-retro-text-dim">
              <p><span className="text-amber">Location:</span> Orbital Station Theta, Docking Bay 7</p>
              <p><span className="text-amber">Comm Frequency:</span> STARLINE-2187</p>
              <p><span className="text-amber">Quantum Fax:</span> 0xSTARLINE</p>
              <p><span className="text-amber">Operating Hours:</span> 0600-2200 Station Standard Time</p>
            </div>
            <p className="mt-6 text-xs text-retro-text-dim">
              Walk-ins welcome. Appointments recommended for private viewings.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
