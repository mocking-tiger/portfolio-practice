"use client";

import { useLanguageStore } from "@/zustand/store";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

type ProjectItemType = {
  title: string;
  team?: boolean;
  images: string[];
  description: React.ReactNode;
  link: string;
  git: string;
};

export default function ProjectItem({
  title,
  team = false,
  images,
  description,
  link,
  git,
}: ProjectItemType) {
  const lang = useLanguageStore((state) => state.language);
  return (
    <div className="max-w-[400px] md:max-w-[750px] lg:max-w-[1200px] mx-auto p-2 md:p-[24px] bg-white rounded-lg">
      <h2 className="w-fit mx-auto mb-[24px] text-2xl">
        {title}{" "}
        <span className="text-lg">
          {lang === "korean"
            ? team
              ? "(팀프로젝트)"
              : "(개인프로젝트)"
            : team
            ? "(チームプロジェクト)"
            : "(個人プロジェクト)"}
        </span>
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <ImageSlider images={images} />
        <div className="w-[350px] md:w-[400px]">
          <div className="p-5 font-pretendard text-left">{description}</div>
          <hr className="m-3" />
          <Link href={link} target="_blank" className="text-blue-400">
            {lang === "korean" ? "서비스 바로가기" : "サービスを見る"}
          </Link>
          <br />
          <Link href={git} target="_blank" className="text-blue-400">
            github repository
          </Link>
        </div>
      </div>
    </div>
  );
}
