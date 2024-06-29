import AboutMe from "@/components/AboutMe";
import Archiving from "@/components/Archiving";
import NavContents from "@/components/NavContents";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="select-none relative overflow-hidden">
      <NavContents />
      <header className="w-screen h-[200px] md:h-[300px] bg-home bg-center bg-cover bg-no-repeat flex justify-center items-end">
        <Typewriter />
      </header>
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
    </main>
  );
}
