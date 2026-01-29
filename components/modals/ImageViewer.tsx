"use client";

import { useState } from "react";
import Image from "next/image";

const ImageViewer = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const imageController = (type: String) => {
    if (type === "next") {
      current === length - 1 ? setCurrent(0) : setCurrent((prev) => prev + 1);
    } else {
      current === 0 ? setCurrent(length - 1) : setCurrent((prev) => prev - 1);
    }
  };

  // 동적으로 translate 값 계산
  const getTranslateValue = () => {
    return -(current * 100);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full relative transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${getTranslateValue()}%)` }}
          >
            <Image
              src={image}
              fill
              sizes="100vw"
              alt={`이미지 ${index + 1}`}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div>
        <button
          className="p-3 bg-black text-white text-[2rem] absolute top-[45%] left-4 rounded-lg hover:bg-gray-800 transition-colors z-10"
          onClick={() => imageController("prev")}
        >
          {"<"}
        </button>
        <button
          className="p-3 bg-black text-white text-[2rem] absolute top-[45%] right-4 rounded-lg hover:bg-gray-800 transition-colors z-10"
          onClick={() => imageController("next")}
        >
          {">"}
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
          {current + 1} / {length}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
