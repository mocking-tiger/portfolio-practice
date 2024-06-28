import Image from "next/image";

export default function ImageSlider({ images }: { images: string[] }) {
  return (
    <div>
      <div className="w-[400px] h-[400px] flex overflow-hidden">
        {images &&
          images.map((image, index) => (
            <Image
              src={image}
              width={400}
              height={400}
              alt={`슬라이더 ${index + 1}번째 이미지`}
              key={index}
            ></Image>
          ))}
      </div>
    </div>
  );
}
