"use client";

import { useLanguageStore } from "@/zustand/store";
import Link from "next/link";

export default function Netplix() {
  const lang = useLanguageStore((state) => state.language);

  if (lang === "korean") {
    return (
      <p>
        넷플릭스 클론코딩 프로젝트
        <br />
        <br />
        마지막 프로젝트 이후 공부한 react-hook-form, react-query, framer-motion
        등을 실제 프로젝트에 활용하며 만든 간단한 작업물입니다.
        <br />
        <br />
        react-hook-form에서 자체적으로 제공하는 에러객체를 활용한 입력값 유효성
        검사 및 framer-motion의 variants를 활용한 일관성있는 애니메이션 속성
        부여, layoutId를 통한 서로 다른 컴포넌트에 있는 요소들의 애니메이션
        연결등을 경험해볼 수 있었고, react-query를 통해서 useEffect없는 비동기
        호출 및 데이터 핸들링을 통해 프론트엔드 기술의 인사이트가 조금 더 넓어질
        수 있는 값진 시간이었습니다.
        <br />
        <br />
        영상물의 자료는
        <Link
          className="text-blue-400"
          href={"https://www.themoviedb.org/?language=ko"}
          target="_blank"
        >
          TMDB
        </Link>
        오픈 api를 활용했고 현재 PC사이즈만 지원합니다.
      </p>
    );
  } else {
    return (
      <p>
        ネットフリックスのクローンコーディングプロジェクト
        <br />
        <br />
        最後のプロジェクトが終わった後勉強をし始めたreact-hook-form,
        react-query, framer-motionなどを活用した簡単な作業物であります。
        <br />
        <br />
        react-hook-formの内部から提供するエラーオブジェクトを通って入力値検査および、framer-motionの
        variantを活用した一貫性のあるプロパティーの付与、layouIdで違うコンポネントにある要素の
        アニメーションの連結などを経験することができましたし、react-queryでuseEffectなしの非同期呼び出しや、
        データのハンドリングを通ってフロントエンド技術のインサイトがもう少し広がる有益な時間でございました。
        <br />
        <br />
        営造物のデータは
        <Link
          className="text-blue-400"
          href={"https://www.themoviedb.org/?language=ko"}
          target="_blank"
        >
          TMDB
        </Link>
        のオープンAPIを活用したし、現在PCのサイズでけ支援しております。
      </p>
    );
  }
}
