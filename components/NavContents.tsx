"use client";

import Image from "next/image";
import NavButton from "./NavButton";
import Link from "next/link";
import { useState } from "react";

export default function NavContents() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="min-w-[240px] h-fit py-20 flex flex-col text-black bg-white fixed left-10 top-[20%] rounded-lg border">
      <Image
        className="relative left-[80px] -top-10"
        src="/buddha.png"
        width={60}
        height={60}
        alt="부처 아이콘"
        onClick={() => setIsClicked((prev) => !prev)}
      />
      {isClicked && (
        <div className="w-full p-3 text-center text-white rounded-3xl absolute -top-10 bg-[#27BCF3] after:absolute after:content-[''] after:border-[#27BCF3] after:border-t-[30px] after:top-[40px] after:right-[105px] after:border-l-[20px] after:border-r-[20px] after:border-l-transparent after:border-r-transparent transition-all duration-700">
          항상 행복하세요
        </div>
      )}
      <div className="flex flex-col gap-12 overflow-hidden">
        <Link href="#section1">
          <NavButton>About me</NavButton>
        </Link>
        <Link href="#section2">
          <NavButton>Skills</NavButton>
        </Link>
        <Link href="#section3">
          <NavButton>Archiving</NavButton>
        </Link>
        <Link href="#section4">
          <NavButton>Projects</NavButton>
        </Link>
      </div>
    </nav>
  );
}
