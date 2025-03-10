import Image from "next/image";

export default function SkillCommunication() {
  return (
    <div className="mb-6 pb-6 border-b flex flex-wrap gap-10 items-center">
      <Image
        src="/skills/github.svg"
        width={60}
        height={60}
        alt="github아이콘"
        title="github"
      />
      <Image
        src="/skills/notion.png"
        width={60}
        height={60}
        alt="notion아이콘"
        title="notion"
      />
      <Image
        src="/skills/figma.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "40px", height: "auto" }}
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
      <Image
        src="/skills/slack.svg"
        width={60}
        height={60}
        alt="slack아이콘"
        title="slack"
      />
      <Image
        src="/skills/miro.png"
        width={60}
        height={60}
        alt="slack아이콘"
        title="miro"
      />
    </div>
  );
}
