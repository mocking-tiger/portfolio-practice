import Image from "next/image";

export default function SkillForntend() {
  return (
    <div className="mb-6 pb-6 border-b flex gap-10 items-center flex-wrap">
      <Image
        src="/skills/html5.svg"
        width={60}
        height={60}
        alt="html아이콘"
        title="html5"
      />
      <Image
        src="/skills/css3.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "43px", height: "auto" }}
        alt="css아이콘"
        title="css3"
      />
      <Image
        src="/skills/javascript.svg"
        width={60}
        height={60}
        alt="JS아이콘"
        title="JavaScript"
      />
      <Image
        src="/skills/typescript.svg"
        width={60}
        height={60}
        alt="TS아이콘"
        title="TypeScript"
      />
      <Image
        src="/skills/react.svg"
        width={60}
        height={60}
        alt="react아이콘"
        title="React"
      />
      <Image
        src="/skills/nextjs.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100px", height: "auto" }}
        alt="nextjs아이콘"
        title="Next.js"
      />
      <Image
        src="/skills/styled-components.svg"
        width={60}
        height={60}
        alt="styled-components아이콘"
        title="Styled-Components"
      />
      <Image
        src="/skills/tailwind.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "60px", height: "auto" }}
        alt="tailwind아이콘"
        title="tailwindCSS"
      />
    </div>
  );
}
