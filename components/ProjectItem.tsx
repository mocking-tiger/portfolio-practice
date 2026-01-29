"use client";

import { useEffect, useState } from "react";
import { useLanguageStore } from "@/zustand/store";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import ImageViewer from "./modals/ImageViewer";

type ProjectType = "personal" | "team" | "company";

type ProjectItemType = {
  title: string;
  type?: ProjectType;
  images: string[];
  description: React.ReactNode;
  link: string;
  git: string;
};

export default function ProjectItem({
  title,
  type = "personal",
  images,
  description,
  link,
  git,
}: ProjectItemType) {
  const lang = useLanguageStore((state) => state.language);
  const { Modal, openModal } = useModal();
  const [currentWidth, setCurrentWidth] = useState<number | null>(null);

  const screenWidthSetter = () => {
    const tempWidth = window.innerWidth;
    setCurrentWidth(tempWidth);
  };

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    addEventListener("resize", screenWidthSetter);

    return () => {
      removeEventListener("resize", screenWidthSetter);
    };
  }, []);

  const getProjectLabel = () => {
    if (lang === "korean") {
      switch (type) {
        case "company":
          return "(회사 프로젝트)";
        case "team":
          return "(팀 프로젝트)";
        case "personal":
          return "(개인 프로젝트)";
      }
    } else {
      switch (type) {
        case "company":
          return "(会社プロジェクト)";
        case "team":
          return "(チームプロジェクト)";
        case "personal":
          return "(個人プロジェクト)";
      }
    }
  };

  return (
    <div className="max-w-[400px] md:max-w-[750px] lg:max-w-[1200px] mx-auto p-2 md:p-[24px] bg-white rounded-lg">
      <h2 className="w-fit mx-auto mb-[24px] text-2xl">
        {title} <span className="text-lg">{getProjectLabel()}</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <ImageSlider
          images={images}
          onClick={() =>
            currentWidth && currentWidth >= 830 && openModal("image-viewer")
          }
        />
        <div className="w-[350px] md:w-[400px]">
          <div className="p-5 font-pretendard text-left">{description}</div>
          <hr className="m-3" />
          <Link href={link} target="_blank" className="text-blue-400">
            {lang === "korean" ? "서비스 바로가기" : "サービスを見る"}
          </Link>
          <br />
          {type !== "company" ?<Link href={git} target="_blank" className="text-blue-400">
            github repository
          </Link> : <span className="text-gray-400">{lang === "korean" ? "회사 프로젝트는 git이 공개되지 않습니다." : "会社プロジェクトは git が公開されていません。"}</span>}
        </div>
      </div>
      <Modal name="image-viewer">
        <ImageViewer images={images} />
      </Modal>
    </div>
  );
}
