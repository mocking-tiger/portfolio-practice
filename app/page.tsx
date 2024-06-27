import AboutMe from "@/components/AboutMe";
import NavContents from "@/components/NavContents";
import Skills from "@/components/Skills";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="select-none relative overflow-hidden">
      <NavContents />
      <div className="w-screen h-[400px] bg-home bg-center bg-cover bg-no-repeat flex justify-center items-end">
        <Typewriter />
      </div>
      <AboutMe />
      <Skills />
    </main>
  );
}
