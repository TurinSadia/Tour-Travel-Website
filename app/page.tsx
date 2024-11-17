import Feature from "@/components/Feature";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <Packages />
      <Testimonial />
      <GetApp />

    </main>
  );
}
