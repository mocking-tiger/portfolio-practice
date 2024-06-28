import AboutMeBox from "./AboutMeBox";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  return (
    <section
      id="section1"
      className="w-screen py-[10px] md:py-[80px] text-center"
    >
      <SectionTitle title="ABOUT ME" />
      <div className="lg:max-w-[1000px] md:max-w-[700px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <AboutMeBox icon="이름" title="이름" content="박준용" />
        <AboutMeBox icon="생년월일" title="생년월일" content="1991.09.12" />
        <AboutMeBox icon="주소지" title="주소지" content="서울특별시 중랑구" />
        <AboutMeBox icon="연락처" title="연락처" content="010-3469-7095" />
        <AboutMeBox icon="이메일" title="이메일" content="dyden119@gmail.com" />
        <AboutMeBox
          icon="학력"
          title="학력"
          content="한국방송통신대학교(일본학과)"
        />
      </div>
    </section>
  );
}
