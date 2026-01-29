"use client";

import { useLanguageStore } from "@/zustand/store";
import SectionTitle from "./SectionTitle";
import ProjectItem from "./ProjectItem";
import Linkbrary from "./descriptions/Linkbrary";
import Openmind from "./descriptions/Openmind";
import Taskify from "./descriptions/Taskify";
import Yeogiya from "./descriptions/Yeogiya";
import Slidtodo from "./descriptions/Slidtodo";
import Netplix from "./descriptions/Netplix";
import Shuren from "./descriptions/Shuren";
import Startupbuilder from "./descriptions/Startupbuilder";

export default function Projects() {
  const lang = useLanguageStore((state) => state.language);

  return (
    <section
      id="section4"
      className="w-screen py-[10px] md:py-[80px] text-center bg-black"
    >
      <SectionTitle title="PROJECTS" dark />
      <div className="flex flex-col gap-10">
        <ProjectItem
          type="personal"
          title={lang === "korean" ? "슈렌" : "修練"}
          images={[
            "/projects/shuren-1.png",
            "/projects/shuren-2.png",
            "/projects/shuren-3.png",
            "/projects/shuren-4.png",
            "/projects/shuren-5.png",
          ]}
          description={<Shuren />}
          link="https://shuren.vercel.app/"
          git="https://github.com/mocking-tiger/shuren"
        />
        <ProjectItem
          type="company"
          title={lang === "korean" ? "스타트업-빌더" : "スタートアップ・ビルダー"}
          images={[
            "/projects/startupbuilder-1.png",
            "/projects/startupbuilder-2.png",
            "/projects/startupbuilder-3.png",
            "/projects/startupbuilder-4.png",
            "/projects/startupbuilder-5.png",
            "/projects/startupbuilder-6.png",
            "/projects/startupbuilder-7.png",
            "/projects/startupbuilder-8.png",
            "/projects/startupbuilder-9.png",
          ]}
          description={<Startupbuilder />}
          link="https://startupbuilder.co.kr/"
          git=""
        />
      </div>
    </section>
  );
}
