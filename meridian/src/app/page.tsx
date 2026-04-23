import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Customers } from "@/components/Customers";
import { Team } from "@/components/Team";
import { Reviews } from "@/components/Reviews";
import { Security } from "@/components/Security";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Customers />
        <Team />
        <Reviews />
        <Security />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
