import { Hero } from "@/components/pageComponents/Hero";
import { AboutMe } from "@/components/pageComponents/AboutMe";
import { NavBar } from "@/components/pageComponents/NavBar";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/components/pageComponents/Project";
import { Awards } from "@/components/pageComponents/Awards";
import { Contact } from "@/components/pageComponents/Contact";
import { Footer } from "@/components/pageComponents/Footer";

const SectionSeparator = () => {
  return (
    <div className="px-4 md:px-12 mt-8">
      <Separator />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main id="home">
        <Hero></Hero>
        <SectionSeparator />
        <AboutMe></AboutMe>
        <SectionSeparator />
        <Project></Project>
        <SectionSeparator />
        <Awards></Awards>
        <SectionSeparator />
        <Contact></Contact>
      </main>
      <SectionSeparator />
      <Footer></Footer>
    </>
  );
}
