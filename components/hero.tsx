export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">

      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-white text-7xl font-light max-w-4xl leading-tight">
            Rozwiązania dla architektów.
            Nie katalog wykonawców.
          </h1>

          <p className="text-white/80 mt-8 text-xl max-w-xl">
            Odkrywamy ludzi, materiały i technologie stojące za
            najlepszymi realizacjami wnętrz.
          </p>

        </div>

      </div>

    </section>
  );
}
