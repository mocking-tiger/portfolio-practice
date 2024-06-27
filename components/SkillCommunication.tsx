import Image from "next/image";

export default function SkillCommunication() {
  return (
    <div className="mb-6 pb-6 border-b flex gap-10 items-center">
      <Image
        src="/skills/github.svg"
        width={60}
        height={60}
        alt="github아이콘"
        title="github"
      />
      <Image
        src="/skills/figma.svg"
        width={40}
        height={40}
        alt="figma아이콘"
        title="figma"
      />
      <Image
        src="/skills/discord.svg"
        width={60}
        height={60}
        alt="discord아이콘"
        title="discord"
      />
    </div>
  );
}
