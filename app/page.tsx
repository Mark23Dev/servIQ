import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import EmailSubscription from "@/components/sections/EmailSubscription";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Services />
      <Testimonials />
      <EmailSubscription />
    </main>
  );
}
