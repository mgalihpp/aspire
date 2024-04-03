import About from "@/components/About";
import Banner from "@/components/Banner";
import Call from "@/components/Call";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/Newsletter";
import Stats from "@/components/Stats";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <About />
      <Stats />
      <Call />
      <Team />
      <NewsLetter />
      <Footer/>
    </main>
  );
}
