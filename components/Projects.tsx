import SectionTitle from "./SectionTitle";
import ImageSlider from "./ImageSlider";

export default function Projects() {
  return (
    <section id="section4" className="w-screen py-[80px] text-center bg-black">
      <SectionTitle title="PROJECTS" dark />
      <div className="flex flex-col gap-10">
        <div className="max-w-[1200px] mx-auto p-[24px] bg-white rounded-lg">
          <h2>링크브러리</h2>
          <ImageSlider
            images={[
              "/linkbrary-1.png",
              "/linkbrary-2.png",
              "/linkbrary-3.png",
            ]}
          />
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
