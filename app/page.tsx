import AboutMe from "@/components/AboutMe";
import NavContents from "@/components/NavContents";
import SectionTitle from "@/components/SectionTitle";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="select-none relative overflow-hidden">
      <NavContents />
      <div className="w-screen h-[400px] bg-home bg-center bg-cover bg-no-repeat flex justify-center items-end">
        <p className="pb-10 text-gray-300 font-pretendard text-center text-2xl">
          안녕하세요.
          <br />
          어제도 개발한 예비 개발자, 박준용입니다.
        </p>
      </div>
      <AboutMe />
      <Skills />
    </main>
  );
}
