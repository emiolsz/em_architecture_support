import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-zinc-900">
      <Hero />
      <FeaturedStories />
      <Footer />
    </main>
  );
}
