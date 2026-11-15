<tsx>
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SECTIONS } from "@/lib/catalog";
import { productsQuery } from "@/lib/products";
import { HeroSlider } from "@/components/home/hero-slider";
import { CategorySection } from "@/components/home/category-section";
import { TrainFightPerform } from "@/components/home/train-fight-perform";
import { QuoteSection } from "@/components/home/quote-section";
import { FaqSection } from "@/components/home/faq-section";
import { WholesaleCta } from "@/components/home/wholesale-cta";
import { Testimonials } from "@/components/home/testimonials";
import { ShippingPayments } from "@/components/home/shipping-payments";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Goods Sports Wear — Martial Arts Uniforms, Rashguards & Combat Gear" },
      { name: "description", content: "Premium Karate, Judo, BJJ and Taekwondo uniforms, custom rashguards, boxing & MMA gear, apparel and team uniforms with worldwide shipping." },
      { property: "og:title", content: "Nexora Goods Sports Wear — Custom Martial Arts & Sportswear" },
      { property: "og:description", content: "Custom martial arts uniforms, rashguards, boxing & MMA gear and team sportswear, manufactured for academies and brands worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQuery()),
  component: Index,
});

function Index() {
  const { data: products } = useSuspenseQuery(productsQuery());
  const [martial, rash, boxing, apparel, sports] = SECTIONS;
  return (
    <>
      <HeroSlider />
      <CategorySection section={martial} products={products} />
      <CategorySection section={rash} products={products} />
      <TrainFightPerform />
      <CategorySection section={boxing} products={products} />
      <CategorySection section={apparel} products={products} />
      <QuoteSection />
      <CategorySection section={sports} products={products} />
      <FaqSection />
      <WholesaleCta />
      <Testimonials />
      <ShippingPayments />
    </>
  );
}
</tsx>