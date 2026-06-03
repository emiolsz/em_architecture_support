export default function Footer() {
  return (
    <footer className="mt-40 border-t border-zinc-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* GÓRNA CZĘŚĆ */}
        <div className="py-24 grid md:grid-cols-2 gap-16">

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
              Arch-Support
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight leading-tight text-zinc-950">
              Rozwiązania.
              <br />
              Materiały.
              <br />
              Ludzie.
            </h2>

            <p className="mt-8 max-w-md text-zinc-500 leading-relaxed">
              Niezależna platforma wiedzy dla architektów,
              projektantów wnętrz, wykonawców oraz producentów
              materiałów premium.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-6">
                Odkrywaj
              </h3>

              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/articles"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Artykuły
                  </a>
                </li>

                <li>
                  <a
                    href="/interviews"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Wywiady
                  </a>
                </li>

                <li>
                  <a
                    href="/materials"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Materiały
                  </a>
                </li>

                <li>
                  <a
                    href="/knowledge"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Baza wiedzy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-6">
                Społeczność
              </h3>

              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/experts"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Eksperci
                  </a>
                </li>

                <li>
                  <a
                    href="/partners"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Partnerzy
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Kontakt
                  </a>
                </li>

                <li>
                  <a
                    href="/newsletter"
                    className="text-zinc-700 hover:text-black transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* LINIA TECHNICZNA */}
        <div className="border-t border-zinc-200" />

        {/* DOLNA CZĘŚĆ */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">
            Arch-Support © {new Date().getFullYear()}
          </span>

          <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">
            Designed by Emilia Olszewska
          </span>

          <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">
            All Rights Reserved
          </span>

        </div>

      </div>
    </footer>
  );
}
