import { Hero } from "@/components/pageComponents/Hero";
import { AboutMe } from "@/components/pageComponents/AboutMe";
import { Header } from "@/components/pageComponents/Header";
import { Project } from "@/components/pageComponents/Project";
import { Awards } from "@/components/pageComponents/Awards";
import { Contact } from "@/components/pageComponents/Contact";
import { Footer } from "@/components/pageComponents/Footer";
import { SectionSeparator } from "@/components/SectionSeparator";
import { Experience } from "@/components/pageComponents/Experience";

const infoLinks = [
  {
    label: "Home",
    url: "#home",
    id: "home",
    isSamePage: true,
  },
  {
    label: "About",
    url: "#about",
    id: "about",
    isSamePage: true,
  },
  // {
  //   label: "Experience",
  //   url: "#experience",
  //   id: "experience",
  //   isSamePage: true,
  // },
  {
    label: "Projects",
    url: "#projects",
    id: "projects",
    isSamePage: true,
  },
  {
    label: "Awards",
    url: "#awards",
    id: "awards",
    isSamePage: true,
  },
  {
    label: "Contact",
    url: "#contact",
    id: "contact",
    isSamePage: true,
  },
];

export default function Home() {
  return (
    <>
      <Header infoLinks={infoLinks}></Header>
      <main id="home">
        <Hero></Hero>
        <SectionSeparator />
        <AboutMe></AboutMe>
        <SectionSeparator />
        {/* <Experience></Experience>
        <SectionSeparator /> */}
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
