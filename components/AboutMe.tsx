"use client";

import { useLanguageStore } from "@/zustand/store";
import AboutMeBox from "./AboutMeBox";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  const lang = useLanguageStore((state) => state.language);

  return (
    <section
      id="section1"
      className="w-screen py-[10px] md:py-[80px] text-center"
    >
      <SectionTitle title="ABOUT ME" />
      <div className="lg:max-w-[1000px] md:max-w-[700px] mx-auto mb-20 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-16">
        <AboutMeBox
          icon="이름"
          title={lang === "korean" ? "이름" : "氏名"}
          content={lang === "korean" ? "박준용" : "パク・ジュニョン"}
        />
        <AboutMeBox
          icon="생년월일"
          title={lang === "korean" ? "생년월일" : "生年月日"}
          content="1991.09.12"
        />
        <AboutMeBox
          icon="주소지"
          title={lang === "korean" ? "주소지" : "住所"}
          content={
            lang === "korean" ? "서울특별시 중랑구" : "ソウル特別市・中浪区"
          }
        />
        <AboutMeBox
          icon="연락처"
          title={lang === "korean" ? "연락처" : "連絡先"}
          content="010-3469-7095"
        />
        <AboutMeBox
          icon="이메일"
          title={lang === "korean" ? "이메일" : "メール"}
          content="dyden119@gmail.com"
        />
        <AboutMeBox
          icon="학력"
          title={lang === "korean" ? "학력" : "学歴"}
          content={
            lang === "korean"
              ? "한국방송통신대학교(일본학과)"
              : "韓国放送通信大学（日本学科）"
          }
        />
      </div>
    </section>
  );
}
