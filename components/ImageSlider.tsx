"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const test = [
    "translate-x-[0px]",
    "translate-x-[-300px] md:translate-x-[-400px]",
    "translate-x-[-600px] md:translate-x-[-800px]",
    "translate-x-[-900px] md:translate-x-[-1200px]",
    "translate-x-[-1200px] md:translate-x-[-1600px]",
  ];

  const handleImageMoving = (direction: string) => {
    if (direction === "left") {
      current + 1 === images.length
        ? setCurrent(0)
        : setCurrent((prev) => prev + 1);
    } else {
      current + 1 === 1
        ? setCurrent(images.length - 1)
        : setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="h-fit relative">
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto flex overflow-hidden">
        {images &&
          images.map((image, index) => (
            <Image
              className={`w-[300px] h-[300px] md:w-[400px] md:h-[400px] ${test[current]} transition-all duration-150 rounded-lg`}
              src={image}
              width={400}
              height={400}
              alt={`슬라이더 ${index + 1}번째 이미지`}
              key={index}
            ></Image>
          ))}
      </div>
      <span>
        {current + 1}/{images.length}
      </span>
      <Image
        className="absolute left-1 top-[45%] cursor-pointer"
        src="/icon-left.svg"
        width={20}
        height={20}
        alt="슬라이더 왼쪽이동 버튼"
        onClick={() => handleImageMoving("right")}
      />
      <Image
        className="absolute right-1 top-[45%] cursor-pointer"
        src="/icon-right.svg"
        width={20}
        height={20}
        alt="슬라이더 오른쪽이동 버튼"
        onClick={() => handleImageMoving("left")}
      />
    </div>
  );
}
