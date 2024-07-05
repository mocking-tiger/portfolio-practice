"use client";

import { useState } from "react";
import { useLanguageStore } from "@/zustand/store";
import Image from "next/image";
import NavButton from "./NavButton";
import Link from "next/link";

export default function NavContents() {
  const [isClicked, setIsClicked] = useState(false);
  const [boxPosition, setBoxPosition] = useState(0);
  const [opacity, setOpacity] = useState("opacity-0");
  const lang = useLanguageStore((state) => state.language);
  const setLang = useLanguageStore((state) => state.setLanguage);
  const xValue = [
    "right-[332px]",
    "right-[246px]",
    "right-[162px]",
    "right-[76px]",
  ];

  return (
    <>
      <nav className="min-w-[200px] h-fit pt-20 pb-10 hidden flex-col text-black bg-white fixed left-10 top-[20%] rounded-lg border z-50 2xl:flex">
        <Image
          className="relative left-[65px] -top-10"
          src="/buddha.png"
          width={60}
          height={60}
          alt="부처 아이콘"
          onClick={() => setIsClicked((prev) => !prev)}
        />
        {isClicked && (
          <div className="w-full p-3 text-center text-white rounded-3xl absolute -top-10 bg-[#27BCF3] after:absolute after:content-[''] after:border-[#27BCF3] after:border-t-[30px] after:top-[40px] after:right-[82px] after:border-l-[20px] after:border-r-[20px] after:border-l-transparent after:border-r-transparent transition-all duration-700">
            {lang === "korean" ? "항상 행복하세요" : "いつもお幸せに"}
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
        <div className="mt-10 flex justify-center">
          <Image
            className="cursor-pointer"
            src={lang === "korean" ? "/korean.png" : "/japanese.png"}
            width={60}
            height={60}
            alt="현재 언어 아이콘"
            onClick={() => {
              lang === "korean" ? setLang("japanese") : setLang("korean");
            }}
          />
        </div>
      </nav>
      <nav className="w-full h-10 fixed 2xl:hidden bg-white shadow-xl z-50">
        <Image
          className="absolute top-1 left-3 cursor-pointer z-50"
          src="/buddha.png"
          width={30}
          height={30}
          alt="부처 아이콘"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <div className="w-full h-full pr-16 sm:pr-20 flex justify-end items-center gap-1 sm:gap-5 relative">
          <div
            className={`w-[72px] h-[90%] absolute ${xValue[boxPosition]} ${opacity} hidden sm:block bg-black z-[-1] transition-all duration-150 rounded-md`}
          ></div>
          <Link href="#section1">
            <div
              className={`sm:w-[65px] h-full flex justify-center items-center text-center cursor-pointer ${
                opacity === "opacity-100" &&
                boxPosition === 0 &&
                "sm:text-white"
              }`}
              onMouseEnter={() => {
                setBoxPosition(0);
                setOpacity("opacity-100");
              }}
              onMouseLeave={() => setOpacity("opacity-0")}
            >
              <span className="hidden sm:inline">About me</span>
              <span className="p-3 sm:hidden">A</span>
            </div>
          </Link>
          <Link href="#section2">
            <div
              className={`sm:w-[65px] h-full flex justify-center items-center text-center cursor-pointer ${
                opacity === "opacity-100" &&
                boxPosition === 1 &&
                "sm:text-white"
              }`}
              onMouseEnter={() => {
                setBoxPosition(1);
                setOpacity("opacity-100");
              }}
              onMouseLeave={() => setOpacity("opacity-0")}
            >
              <span className="hidden sm:inline">Skills</span>
              <span className="p-3 sm:hidden">S</span>
            </div>
          </Link>
          <Link href="#section3">
            <div
              className={`sm:w-[65px] h-full flex justify-center items-center text-center cursor-pointer ${
                opacity === "opacity-100" &&
                boxPosition === 2 &&
                "sm:text-white"
              }`}
              onMouseEnter={() => {
                setBoxPosition(2);
                setOpacity("opacity-100");
              }}
              onMouseLeave={() => setOpacity("opacity-0")}
            >
              <span className="hidden sm:inline">Archiving</span>
              <span className="p-3 sm:hidden">A</span>
            </div>
          </Link>
          <Link href="#section4">
            <div
              className={`sm:w-[65px] h-full flex justify-center items-center text-center cursor-pointer ${
                opacity === "opacity-100" &&
                boxPosition === 3 &&
                "sm:text-white"
              }`}
              onMouseEnter={() => {
                setBoxPosition(3);
                setOpacity("opacity-100");
              }}
              onMouseLeave={() => setOpacity("opacity-0")}
            >
              <span className="hidden sm:inline">Projects</span>
              <span className="p-3 sm:hidden">P</span>
            </div>
          </Link>
        </div>
        <div>
          <Image
            className="absolute right-5 top-1 cursor-pointer"
            src={lang === "korean" ? "/korean.png" : "/japanese.png"}
            width={40}
            height={40}
            alt="현재 언어 아이콘"
            onClick={() => {
              lang === "korean" ? setLang("japanese") : setLang("korean");
            }}
          />
        </div>
      </nav>
    </>
  );
}
