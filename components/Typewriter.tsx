"use client";

import { useEffect, useState } from "react";
import { useLanguageStore } from "@/zustand/store";
import useInterval from "@/hooks/useInterval";

export default function Typewriter() {
  const lang = useLanguageStore((state) => state.language);
  const text =
    lang === "korean"
      ? "안녕하세요. 어제도 개발한 예비 개발자, 박준용입니다."
      : "こんにちは。昨日も開発を致した、パク・ジュニョンと申します。";
  const [landingText, setLandingText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLandingText("");
    setCount(0);
  }, [lang]);

  useInterval(() => {
    if (count >= text.length) {
      return;
    }

    setLandingText((prev) => {
      let result = prev ? prev + text[count] : text[0];
      return result;
    });
    setCount((prev) => prev + 1);
  }, 100);

  return (
    <p className="mb-10 pr-2 text-gray-300 font-pretendard text-center text-md md:text-4xl">
      {landingText}
      <span className="animate-typingCursor"> </span>
    </p>
  );
}
