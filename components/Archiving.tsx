import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

export default function Archiving() {
  return (
    <section id="section3" className="w-screen py-[80px] text-center">
      <SectionTitle title="ARCHIVING" />
      <div className="max-w-[1200px] mx-auto p-[24px] flex justify-center gap-20">
        <div className="min-w-[410px] p-[24px] flex flex-col items-start bg-black rounded-lg text-white">
          <Image
            src="/github-logo.svg"
            width={200}
            height={100}
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
            프로젝트 소스코드뿐 아니라 실습, 회고 등 <br />
            모든 개발 관련 자료의 클라우드처럼 사용하고 있습니다.
          </p>
        </div>
        <div className="min-w-[410px] p-[24px] flex flex-col items-start bg-black rounded-lg text-white">
          <Image
            className="py-20"
            src="/linktree.svg"
            width={200}
            height={200}
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
            배포 단계까지 구현된 프로젝트 아카이브입니다.
            <br /> 앞으로 계속 추가 될 계획입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
