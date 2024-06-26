import Image from "next/image";
import NavButton from "./NavButton";

export default function NavContents() {
  return (
    <nav className="w-[15%] min-w-[240px] h-screen pt-28 flex flex-col text-white bg-[#0898CF] overflow-hidden float-left">
      <Image
        className="relative left-10 -top-4"
        src="/island.png"
        width={60}
        height={60}
        alt="야자나무 이미지"
      />
      <header className="w-full mb-10 pl-10 text-[32px]">
        안녕하세요, <br />
        박준용입니다.
      </header>
      <div className="flex flex-col gap-12">
        <NavButton>About me</NavButton>
        <NavButton>Skills</NavButton>
        <NavButton>Archiving</NavButton>
        <NavButton>Projects</NavButton>
      </div>
    </nav>
  );
}
