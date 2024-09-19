"use client";

import { useLanguageStore } from "@/zustand/store";

export default function Slidtodo() {
  const lang = useLanguageStore((state) => state.language);

  if (lang === "korean") {
    return (
      <p>
        콘텐츠 기반 할일 관리 서비스 슬리드 투두 입니다.
        <br />
        <br />
        팀 프로젝트에서 R&R분배를 할 때마다 제가 담당하지 않은 기능은 구현해
        보지 못한 채 그냥 지나가 버리는 것이 항상 아쉬웠습니다. 그래서 원래
        팀용으로 주어진 시안이었지만 혼자 만들어보기로 했고, 시간은 보다 오래
        걸렸지만, 한 서비스의 모든 기능을 직접 만들어 본 좋은 경험이 되었습니다.
        <br />
        <br />
        포트폴리오를 만들 때 공부했던 tailwind를 본격적으로 사용해 만들었고,
        텍스트뿐 아니라 목표별 할 일에 파일이나 링크를 같이 첨부해 참고가 가능
        하며 각 목표 , 할 일 별 진행 상황을 그래프로 한눈에 알 수 있게
        구현했습니다.
        <br />
        <br />팀 프로젝트를 하면서 제가 직접 다뤄보고 싶던 intersection
        observer를 활용하여 스크롤 위치에 따른 조건부 api호출 구현 및 context
        api기능을 통해 자식 컴포넌트가 아니어도 업데이트 상태를 전달하여
        업데이트가 있을 때마다 모든 컴포넌트에서 api호출을 하는 불필요한 패칭을
        최소화하였습니다.
        <br />
        <br />
        이전까지 netlify와 vercel로 자동배포만 했던것과 달리 수동배포 경험이 꼭
        필요하다고 생각해서 이번에는 aws 의 ec2로 클라우드 인스턴스를 생성,
        수동으로 배포 했고 CodePipeline으로 지속 배포 환경도 구현했습니다.
        <br />
        <br />
        <a
          className="text-blue-600 underline"
          href="https://slid-todo.vercel.app/"
          target="_blank"
        >
          서비스 임시링크(aws 이메일 인증을 깜빡해서 잠시 suspend 됨)
        </a>
      </p>
    );
  } else {
    return (
      <p>
        コンテンツ基盤の務め管理サービス、スリッドトゥドゥ（slid-todo）です。
        <br />
        <br />
        前にチームでプロジェクトするたびに私が扱ってみることができない機能に対して未練が残って、
        元々チーム向けの試案でしたが、今回は一人で作ってみようと思って時間はかなりかかりましたけど
        一つのサービスの全ての機能を全部作ってみた貴い経験になりました。
        <br />
        <br />
        前から直接扱ってみたかったIntersection
        Observerを通ってスクロールの位置による条件付きのapi呼び出しの具現および
        context
        API機能で親コンポネントでなくてもアップデートの状態を渡して、アップデートがあるたびに全てのコンポーネントでapi呼び出しをする
        不必要なデータfetchingを最小化いたしました。
        <br />
        <br />
        元々netlifyとvercelで自動でデプロイしたこととは違い、手動デプロイの経験が必ず必要だと思って
        今回はawsのec2で直接インスタンスを作ってデプロイしてみました。その上、CodePipilineを通って
        持続的なデプロイの環境を構築しておきました。
      </p>
    );
  }
}
