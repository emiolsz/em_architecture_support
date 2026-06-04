export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Zdjęcie tła */}
      <img
        src="/images/hero.png"
        alt="Arch Support"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Przyciemnienie */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Treść */}
      <div className="relative z-10 flex h-full items-end">
        <div className="max-w-7xl px-8 pb-24 md:px-12 md:pb-32">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
            ARCH SUPPORT
          </div>

          <h1 className="max-w-5xl text-6xl md:text-8xl font-light leading-[0.95] text-white">
            Od problemu
            <br />
            do rozwiązania.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
            Odkrywamy ludzi, technologie i materiały stojące za
            najbardziej wymagającymi realizacjami wnętrz.
            Łączymy architektów z wiedzą, doświadczeniem i sprawdzonymi
            specjalistami.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="border border-white px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">
              Czytaj historie
            </button>

            <button className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white">
              Poznaj wykonawców →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
