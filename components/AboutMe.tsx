"use client";

import { useLanguageStore } from "@/zustand/store";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  const lang = useLanguageStore((state) => state.language);

  return (
    <section
      id="section1"
      className="w-screen py-[10px] md:py-[80px] text-center"
    >
      <SectionTitle title="ABOUT ME" />
      <div className="max-w-[350px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[800px] mx-auto px-4 sm:px-6 mb-20 md:mb-0">
        <div className="space-y-6 md:space-y-8 text-center">
          {lang === "korean" ? (
            <>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
                사용자 경험을 최우선으로 생각하는<br />
                프론트엔드 개발자입니다
              </p>
              
              <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-4 md:space-y-5 leading-relaxed">
                <p>
                  일본학을 전공하며 언어와 문화를 배웠고, 
                  현재는 컴퓨터과학을 공부하며 기술로 사람들과 소통하는 방법을 익히고 있습니다.
                </p>
                
                <p>
                  개발하면서 가장 즐거운 순간은 <span className="font-semibold text-blue-600 dark:text-blue-400">사용자 입장에서 서비스를 꼼꼼히 테스트하며 개선점을 찾아낼 때</span>입니다. 
                  완벽한 코드보다는 실제로 잘 작동하는 서비스를 만드는 데 집중합니다.
                </p>
                
                <p>
                  특히 <span className="font-semibold text-blue-600 dark:text-blue-400">사회에 의미 있는 기여를 할 수 있는 서비스</span>를 만들고 싶습니다. 
                  기술이 누군가의 일상을 더 편리하게 만들거나, 문제를 해결할 수 있다고 믿습니다.
                </p>
                
                <p>
                  협업할 때는 <span className="font-semibold text-blue-600 dark:text-blue-400">모르는 것을 솔직하게 말하고 빠르게 배우는 것</span>을 중요하게 생각합니다. 
                  팀과의 투명한 커뮤니케이션이 더 나은 결과를 만든다고 믿습니다.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
                ユーザー体験を最優先に考える<br />
                フロントエンド開発者です
              </p>
              
              <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-4 md:space-y-5 leading-relaxed">
                <p>
                  日本学を専攻して言語と文化を学び、
                  現在はコンピュータサイエンスを勉強しながら技術で人々とコミュニケーションする方法を学んでいます。
                </p>
                
                <p>
                  開発で最も楽しい瞬間は、<span className="font-semibold text-blue-600 dark:text-blue-400">ユーザーの立場でサービスを綿密にテストし改善点を見つける時</span>です。
                  完璧なコードよりも実際によく動くサービスを作ることに集中します。
                </p>
                
                <p>
                  特に<span className="font-semibold text-blue-600 dark:text-blue-400">社会に意味のある貢献ができるサービス</span>を作りたいです。
                  技術が誰かの日常をより便利にしたり、問題を解決できると信じています。
                </p>
                
                <p>
                  協業する際には<span className="font-semibold text-blue-600 dark:text-blue-400">分からないことを正直に話し、早く学ぶこと</span>を大切にしています。
                  チームとの透明なコミュニケーションがより良い結果を作ると信じています。
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
