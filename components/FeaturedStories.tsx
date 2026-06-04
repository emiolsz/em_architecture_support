import ArticleCard from "./ArticleCard";

const stories = [
  {
    title: "Jak połączyć wykładzinę bez widocznego łączenia?",
    category: "Wykładziny",
    image: "/images/story-1.png",
  },
  {
    title: "Światło, które nie razi. Rozmowa z ekspertami ILUM",
    category: "Oświetlenie",
    image: "/images/story-2.png",
  },
  {
    title: "Kamień wielkoformatowy — błędy wykonawcze",
    category: "Kamień",
    image: "/images/story-3.png",
  },
  {
    title: "Czy luksusowy dywan wymaga specjalistycznej konserwacji?",
    category: "Konserwacja",
    image: "/images/story-4.png",
  },
];

export default function FeaturedStories() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-light">
          Historie i rozwiązania
        </h2>

        <a
          href="#"
          className="text-sm uppercase tracking-[0.2em] text-zinc-500 hover:text-black"
        >
          Wszystkie artykuły
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stories.map((story) => (
          <ArticleCard
            key={story.title}
            title={story.title}
            category={story.category}
            image={story.image}
          />
        ))}
      </div>
    </section>
  );
}
