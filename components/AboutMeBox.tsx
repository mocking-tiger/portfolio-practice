import Image from "next/image";

export default function AboutMeBox({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  switch (icon) {
    case "이름": {
      icon = "/icon-person.svg";
      break;
    }
    case "생년월일": {
      icon = "/icon-calendar.svg";
      break;
    }
    case "주소지": {
      icon = "/icon-location.svg";
      break;
    }
    case "연락처": {
      icon = "/icon-phone.svg";
      break;
    }
    case "이메일": {
      icon = "/icon-mail.svg";
      break;
    }
    case "학력": {
      icon = "/icon-pencil.svg";
      break;
    }
  }
  return (
    <div className="flex justify-center gap-0 md:gap-10">
      <div className="w-fit">
        <Image src={icon} width={32} height={32} alt="사람 아이콘" />
      </div>
      <div className="w-[150px] flex flex-col">
        <div className="text-[1.5rem] text-gray-600">{title}</div>
        <div className="text-[1.2rem]">{content}</div>
      </div>
    </div>
  );
}
