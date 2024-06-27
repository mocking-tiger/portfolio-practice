import SectionTitle from "./SectionTitle";
import SkillForntend from "./SkillFrontend";
import SkillDeployment from "./SkillDeployment";
import SkillCommunication from "./SkillCommunication";

export default function Skills() {
  return (
    <section id="section2" className="w-screen py-[80px] text-center bg-black">
      <SectionTitle title="SKILLS" dark />
      <div className="max-w-[1200px] mx-auto p-[24px] bg-white rounded-lg">
        <div>
          <h3 className="text-3xl mb-6">・Frontend</h3>
          <SkillForntend />
          <h3 className="text-3xl mb-6">・Deployment</h3>
          <SkillDeployment />
          <h3 className="text-3xl mb-6">・Communication</h3>
          <SkillCommunication />
        </div>
      </div>
    </section>
  );
}
