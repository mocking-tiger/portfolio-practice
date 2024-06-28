"use client";

import useInterval from "@/hooks/useInterval";
import { useState } from "react";

export default function Typewriter() {
  const text = "안녕하세요. 어제도 개발한 예비 개발자, 박준용입니다.";
  const [landingText, setLandingText] = useState("");
  const [count, setCount] = useState(0);

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
    <p className="mb-10 pr-2 text-gray-300 font-pretendard text-center text-md md:text-4xl animate-typingCursor">
      {landingText}
    </p>
  );
}
