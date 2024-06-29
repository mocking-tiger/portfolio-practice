import SectionTitle from "./SectionTitle";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import Linkbrary from "./descriptions/Linkbrary";
import Openmind from "./descriptions/Openmind";

export default function Projects() {
  return (
    <section
      id="section4"
      className="w-screen py-[10px] md:py-[80px] text-center bg-black"
    >
      <SectionTitle title="PROJECTS" dark />
      <div className="flex flex-col gap-10">
        <ProjectItem
          title="링크브러리"
          images={["/linkbrary-1.png", "/linkbrary-2.png", "/linkbrary-3.png"]}
          description={<Linkbrary />}
          link="https://linkbrary-remaster.vercel.app/"
          git="https://github.com/mocking-tiger/linkbrary_remaster"
        />
        <ProjectItem
          title="오픈마인드"
          images={[
            "/openmind-1.png",
            "/openmind-2.png",
            "/openmind-3.png",
            "/openmind-4.png",
            "/openmind-5.png",
          ]}
          description={<Openmind />}
          link="https://openmind-phi.vercel.app/"
          git="https://github.com/OPENMIND-TFT/OPENMIND"
          team
        />
      </div>
    </section>
  );
}
