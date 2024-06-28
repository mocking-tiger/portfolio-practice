"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(1);
  const [x, setX] = useState(0);
  const [position, setPosition] = useState("translate-x-[0px]");

  const handleImageMoving = (direction: string) => {
    if (direction === "left") {
      setCurrent((prev) => prev + 1);
      if (current >= images.length) {
        setX(0);
        setCurrent(1);
        setPosition("translate-x-[0px]");
        return;
      }
      const newX = x - 400;
      setX(newX);
      setPosition(`translate-x-[${newX}px]`);
    } else {
      if (current === 1) {
        const endOfArray = 400 * -(images.length - 1);
        setX(endOfArray);
        setCurrent(images.length);
        setPosition(`translate-x-[${endOfArray}px]`);
        return;
      }
      setCurrent((prev) => prev - 1);
      const newX = x + 400;
      setX(newX);
      setPosition(`translate-x-[${newX}px]`);
    }
  };

  return (
    <div className="relative">
      <div className="w-[400px] h-[400px] flex overflow-hidden">
        {images &&
          images.map((image, index) => (
            <Image
              className={`${position} transition-all duration-150`}
              src={image}
              width={400}
              height={400}
              alt={`슬라이더 ${index + 1}번째 이미지`}
              key={index}
            ></Image>
          ))}
      </div>
      <span>
        {current}/{images.length}
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
