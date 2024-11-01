"use client";

import { useLanguageStore } from "@/zustand/store";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

export default function Archiving() {
  const lang = useLanguageStore((state) => state.language);
  return (
    <section
      id="section3"
      className="w-screen py-[10px] md:py-[80px] text-center"
    >
      <SectionTitle title="ARCHIVING" />
      <div className="max-w-[1200px] mx-auto p-[24px] flex flex-wrap justify-center gap-5 lg:gap-20">
        <div className="w-[350px] md:min-w-[410px] p-[24px] flex flex-col items-start bg-black rounded-lg text-white">
          <Image
            src="/github-logo.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "200px", height: "auto" }}
            alt="github로고"
          />
          <Link
            href="https://github.com/mocking-tiger"
            target="_blank"
            className="mb-5 underline"
          >
            https://github.com/mocking-tiger
          </Link>
          <p className="text-left text-lg">
            {lang === "korean" ? (
              <>
                프로젝트 소스코드뿐 아니라 연습, 회고 등
                <br />
                모든 개발 관련 자료의 클라우드처럼 사용하고 있습니다.
              </>
            ) : (
              <>
                プロジェクトのソースコードだけでなく練習、回顧など
                <br />
                全ての開発関連のクラウドのようにお使いしています。
              </>
            )}
          </p>
        </div>
        <div className="w-[350px] md:min-w-[410px] mb-20 md:mb-0 p-[24px] flex flex-col items-start bg-black rounded-lg text-white">
          <Image
            className="py-20"
            src="/linktree.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "200px", height: "auto" }}
            alt="github로고"
          />
          <Link
            href="https://linktr.ee/mockingTiger"
            target="_blank"
            className="mb-5 underline"
          >
            https://linktr.ee/mockingTiger
          </Link>
          <p className="text-left text-lg">
            {lang === "korean" ? (
              <>
                배포 단계까지 구현된 프로젝트 아카이브입니다.
                <br /> 앞으로 제가 개발을 하는 동안 계속 추가해 나갈 계획입니다.
              </>
            ) : (
              <>
                配布段階まで具現されているアーカイブでございます。
                <br />
                これから私が開発を致す内にずっと追加し続けていく予定です。
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
