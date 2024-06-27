import Image from "next/image";

export default function SkillDeployment() {
  return (
    <div className="mb-6 pb-6 border-b flex gap-10 items-center">
      <Image
        src="/skills/netlify.png"
        width={60}
        height={60}
        alt="netlify아이콘"
        title="netlify"
      />
      <Image
        src="/skills/vercel.png"
        width={60}
        height={60}
        alt="vercel아이콘"
        title="vercel"
      />
    </div>
  );
}
