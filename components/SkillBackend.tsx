import Image from "next/image";

export default function SkillBackend() {
  return (
    <div className="mb-6 pb-6 border-b flex gap-10 items-center flex-wrap">
      <Image
        src="/skills/node.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "80px", height: "auto" }}
        alt="tailwind아이콘"
        title="node.js"
      />
      <Image
        src="/skills/prisma.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "80px", height: "auto" }}
        alt="tailwind아이콘"
        title="prisma"
      />
      <Image
        src="/skills/mysql.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "80px", height: "auto" }}
        alt="tailwind아이콘"
        title="MySQL"
      />
    </div>
  );
}
