import SectionTitle from "./SectionTitle";
import ImageSlider from "./ImageSlider";

export default function Projects() {
  return (
    <section
      id="section4"
      className="w-screen py-[10px] md:py-[80px] text-center bg-black"
    >
      <SectionTitle title="PROJECTS" dark />
      <div className="flex flex-col gap-10">
        <div className="max-w-[1200px] mx-auto p-[24px] bg-white rounded-lg">
          <h2 className="w-fit mx-auto mb-[24px] text-2xl">
            링크브러리 <span className="text-lg">(개인프로젝트)</span>
          </h2>
          <div className="flex gap-10">
            <ImageSlider
              images={[
                "/linkbrary-1.png",
                "/linkbrary-2.png",
                "/linkbrary-3.png",
              ]}
            />
            <div className="w-[400px]">
              <p className="font-pretendard text-left">
                부트캠프 시작과 동시에 진행되어, 수료할때까지 매주 과제가
                추가되는 식으로 기능이 더해진 프로젝트입니다.
                <br />
                <br /> 바닐라 자바스크립트부터 리액트와 타입스크립트를 거쳐
                next.js까지, 6개월동안 배운 기술의 파일형식과 문법이 마구
                섞여버려 수료 후, next.js 14버전으로 전체적인 마이그레이션을
                진행했습니다.
                <br />
                <br /> 즐겨찾기를 추가하고 폴더별로 관리하는 간단한 서비스지만,
                웹개발을 배우고 만든 첫 프로젝트이기도 하고, 지금도 많이
                부족하지만 당시엔 정말 미지의 영역이었던 css의 속성들을 하나하나
                검색해가며 만들어 나갔던 추억이 많이 남은 프로젝트입니다.
                <br />
                <br />
                마이그레이션을 진행하면서 next.js 14버전의 서버컴포넌트와
                클라이언트 컴포넌트 개념을 이해하고, 새로 추가된 App
                Router방식을 공부하는데 많은 도움이 되었습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto p-[24px] bg-white rounded-lg">
          <h2>오픈마인드</h2>
        </div>
        <div className="max-w-[1200px] mx-auto p-[24px] bg-white rounded-lg">
          <h2>태스키파이</h2>
        </div>
        <div className="max-w-[1200px] mx-auto p-[24px] bg-white rounded-lg">
          <h2>여기야</h2>
        </div>
      </div>
    </section>
  );
}
