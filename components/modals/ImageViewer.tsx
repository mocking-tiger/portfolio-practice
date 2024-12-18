"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageViewer({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const imageController = (type: String) => {
    if (type === "next") {
      current === length - 1 ? setCurrent(0) : setCurrent((prev) => prev + 1);
    } else {
      current === 0 ? setCurrent(length - 1) : setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-full">
      <Image src={images[current]} fill sizes="auto" alt="image" />
      <div>
        <button
          className="p-3 bg-black text-white text-[2rem] absolute top-[45%] rounded-lg"
          onClick={() => imageController("prev")}
        >
          {"<"}
        </button>
        <button
          className="p-3 bg-black text-white text-[2rem] absolute top-[45%] right-0 rounded-lg"
          onClick={() => imageController("next")}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
