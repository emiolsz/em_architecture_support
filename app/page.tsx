import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import Categories from "@/components/Categories";
import PartnerLogos from "@/components/PartnerLogos";

export default function HomePage() {
  return (
    <main className="bg-white text-zinc-900">
      <Hero />

      <FeaturedStories />

      <Categories />

      <PartnerLogos />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light mb-6">
          Arch-Support Journal
        </h2>

        <p className="text-zinc-600 max-w-2xl">
          Wywiady z architektami, wykonawcami oraz producentami.
          Praktyczna wiedza o materiałach, konserwacji i trwałości.
        </p>
      </section>
    </main>
  );
}
