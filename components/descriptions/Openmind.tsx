"use client";

import { useLanguageStore } from "@/zustand/store";

export default function Openmind() {
  const lang = useLanguageStore((state) => state.language);

  if (lang === "korean") {
    return (
      <p>
        리액트로 진행한 첫 팀 프로젝트인 익명 질의응답 서비스 오픈마인드 입니다.{" "}
        <br />
        <br />
        스타일드 컴포넌트를 사용하여 props에 따른 동적 스타일링에 대해 알게
        되었고, 프로젝트 내내 유용하게 써먹었던 기억이 있습니다.
        <br />
        <br />
        클라이언트와 서버간의 비동기 통신에 의한 데이터의 CRUD가 어떻게
        이루어지는지 기본 개념을 잡을 수 있었으며, 로컬 스토리지로 사용자 정보를
        저장해서 다음에 접속할 때도 내가 개설했던 섹션에서 답변이 가능하게
        구현하였습니다.
        <br />
        <br />또 처음으로 진행한 팀 프로젝트였던 만큼 pr을 올려보고, 코드 리뷰에
        대한 피드백을 진행하고, disscusion에 회고를 작성하는 등 github를 통한
        협업이 어떻게 이루어지는지 경험하였으며, 팀원이 다 같이 모여 제공된
        시안의 화면흐름도나 백엔드api가 어떻게 설계되었는지 뜯어보면서 연구했던
        것들이 뜻깊은 경험들이었습니다.
      </p>
    );
  } else {
    return (
      <p>
        reactで作った初チームプロジェクトの匿名質疑応答サービス、オープンマインドです。
        <br />
        <br />
        STYLED
        COMPONENTを使ってPROPSによる動的スタイリングについて分かることになりましたし、プロジェクトの間とても役に立ちました。
        <br />
        <br />
        クライアントとサーバー間の非同期通信によるデータのCRUDがどう成り立っているのか基本概念をとることができましたし、local
        storageでユーザーの情報を貯蔵して次に接続する時にも自分が作ったセクションで答えができるように具現いたしました。
        <br />
        <br />
        また、初めてのチームプロジェクトだけに、PRを書いてみるし、コードのレビューに対するフィードバックも進行し、
        disscusionに回顧も作成するなど、githunを用いた協業がどう成り立つのか経験して、チーム員が集まって提供された
        apiがどう設計されているのかを観察しながら研究してみたなどが有意義な経験でありました。
      </p>
    );
  }
}
