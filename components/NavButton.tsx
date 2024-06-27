import Image from "next/image";
import { ReactNode } from "react";

export default function NavButton({ children }: { children: ReactNode }) {
  return (
    <article className="w-full flex items-center flex-nowrap cursor-pointer -translate-x-10 hover:translate-x-3 transition-all duration-700 relative">
      <Image
        src="/icon-arrow-right.svg"
        width={32}
        height={32}
        alt="화살표 아이콘"
      />
      <span className="min-w-fit ml-12 text-[24px]">{children}</span>
      <Image
        className="absolute -right-7"
        src="/icon-arrow-right.svg"
        width={32}
        height={32}
        alt="화살표 아이콘"
      />
    </article>
  );
}
