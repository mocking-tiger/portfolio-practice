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
          title={lang === "korean" ? "링크브러리" : "リンクブラリー"}
          images={[
            "/linkbrary-1.png",
            "/linkbrary-2.png",
            "/linkbrary-3.png",
            "/linkbrary-4.png",
            "/linkbrary-5.png",
          ]}
          description={<Linkbrary />}
          link="https://linkbrary-remaster.vercel.app/"
          git="https://github.com/mocking-tiger/linkbrary_remaster"
        />
        <ProjectItem
          title={lang === "korean" ? "오픈마인드" : "オープンマインド"}
          images={[
            "/openmind-1.png",
            "/openmind-2.png",
            "/openmind-3.png",
            "/openmind-4.png",
            "/openmind-5.png",
          ]}
          description={<Openmind />}
          link="https://openmind-phi.vercel.app/"
          git="https://github.com/OPENMIND-TFT/OPENMIND"
          team
        />
        <ProjectItem
          title={lang === "korean" ? "태스키파이" : "タスキファイー"}
          images={[
            "/taskify-1.png",
            "/taskify-2.png",
            "/taskify-3.png",
            "/taskify-4.png",
            "/taskify-5.png",
          ]}
          description={<Taskify />}
          link="https://taskify-team-7.netlify.app/"
          git="https://github.com/HappyDevelopers-team7/team7-taskify"
          team
        />
        <ProjectItem
          title={lang === "korean" ? "여기야" : "ヨギヤ(ここだよ)"}
          images={[
            "/yeogiya-1.png",
            "/yeogiya-2.png",
            "/yeogiya-3.png",
            "/yeogiya-4.png",
            "/yeogiya-5.png",
          ]}
          description={<Yeogiya />}
          link="https://yeogiya.es6.kr/"
          git="https://github.com/Sprint3-6/yeogiya"
          team
        />
        <ProjectItem
          title={lang === "korean" ? "슬리드 투두" : "スリッドトゥドゥ"}
          images={[
            "/slidtodo-1.png",
            "/slidtodo-2.png",
            "/slidtodo-3.png",
            "/slidtodo-4.png",
            "/slidtodo-5.png",
          ]}
          description={<Slidtodo />}
          link="https://slid-todo.vercel.app/"
          git="https://github.com/mocking-tiger/slid-todo"
        />
        <ProjectItem
          title={lang === "korean" ? "NETPLIX" : "NETPLIX"}
          images={[
            "/netplix-1.png",
            "/netplix-2.png",
            "/netplix-3.png",
            "/netplix-4.png",
            "/netplix-5.png",
          ]}
          description={<Netplix />}
          link="https://netplix-three.vercel.app/tv"
          git="https://github.com/mocking-tiger/NETPLIX"
        />
      </div>
    </section>
  );
}
