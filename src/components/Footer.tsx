import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-retro-border bg-retro-dark">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-bold text-amber tracking-widest">
              STARLINE SPACECRAFT CO.
            </h3>
            <p className="text-sm text-retro-text-dim">
              Serving the stars since 2187. Your trusted source for premium
              interstellar vessels.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-amber tracking-widest">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-retro-text-dim hover:text-amber transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-retro-text-dim hover:text-amber transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-retro-text-dim hover:text-amber transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-amber tracking-widest">
              SHIP CLASSES
            </h3>
            <ul className="space-y-2 text-sm text-retro-text-dim">
              <li>Fighters</li>
              <li>Cruisers</li>
              <li>Freighters</li>
              <li>Stealth</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-amber tracking-widest">
              CONTACT
            </h3>
            <ul className="space-y-2 text-sm text-retro-text-dim">
              <li>Orbital Station Theta, Docking Bay 7</li>
              <li>Comm: STARLINE-2187</li>
              <li>Quantum Fax: 0xSTARLINE</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-retro-border pt-6 text-center text-xs text-retro-text-dim">
          <p>
            &copy; 2187 Starline Spacecraft Co. All rights reserved. Not liable for
            hyperspace lane violations.
          </p>
          <p className="mt-1">
            <span className="text-green blink">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
