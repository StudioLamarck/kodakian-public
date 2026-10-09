import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Reveal from "@/components/Reveal";
import FilmLook from "@/components/FilmLook";
import Occasions from "@/components/Occasions";
import Faq from "@/components/Faq";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Steps />
        <Reveal />
        <FilmLook />
        <Occasions />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
