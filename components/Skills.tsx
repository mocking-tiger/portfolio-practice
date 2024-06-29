import SectionTitle from "./SectionTitle";
import SkillForntend from "./SkillFrontend";
import SkillDeployment from "./SkillDeployment";
import SkillCommunication from "./SkillCommunication";
import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="section2"
      className="w-screen py-[10px] md:py-[80px] text-center bg-black"
    >
      <SectionTitle title="SKILLS" dark />
      <div className="max-w-[350px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[950px] mx-auto mb-20 md:mb-0 p-[24px] bg-white rounded-lg">
        <div>
          <h3 className="text-3xl mb-6">・Frontend</h3>
          <SkillForntend />
          <h3 className="text-3xl mb-6">・Deployment</h3>
          <SkillDeployment />
          <h3 className="text-3xl mb-6">・Communication</h3>
          <SkillCommunication />
          <div className="flex flex-col justify-center items-center">
            ・ <br />・<br /> ・<br />
            <Image
              className="mt-5"
              src="/whats-next.png"
              width={100}
              height={100}
              alt="다음은 뭘까?아이콘"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
