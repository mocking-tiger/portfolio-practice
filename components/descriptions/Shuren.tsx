"use client";

import { useLanguageStore } from "@/zustand/store";

export default function Shuren() {
  const lang = useLanguageStore((state) => state.language);

  if (lang === "korean") {
    return (
      <p>
        일본어 어휘를 게임화된 방식으로 학습할 수 있는 웹 애플리케이션입니다.
        <br />
        <br />
        9급부터 1급까지 단계별로 학습하며, 각 단계마다 시험을 통과해야 다음
        등급의 어휘에 접근할 수 있게 설계 했습니다. 단순한 암기 앱이 아닌
        성취감과 동기부여를 제공하는 학습 플랫폼을 만들고자 했으며, 최신 기술
        스택을 활용한 풀스택 개인 프로젝트를 해보고 싶어서 만들었습니다.
        <br />
        <br />
        회원가입 없이도 즉시 체험할 수 있도록 데모 계정을 제공하며, 데모 계정은
        Vercel Cron Jobs를 통해 매일 자동으로 초기 상태로 리셋됩니다. <br />
        <br />
      </p>
    );
  } else {
    return <p>
      日本語の形容詞を学習するためのウェブアプリケーションです。
      <br />
      <br />
      9級から1級までの段階別に学習を進め、各段階で試験を合格する必要があります。
      <br />
      <br />
      単なる暗記アプリではなく、ゲーム化された方法で学習できるように設計されています。
      <br />
      <br />
      デモアカウントを提供し、デモアカウントはVercel Cron Jobsを使用して毎日自動的にリセットされます。
    </p>;
  }
}
