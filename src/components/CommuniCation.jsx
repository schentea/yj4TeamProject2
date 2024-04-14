import { FaUser } from "react-icons/fa6";
import { HiDesktopComputer } from "react-icons/hi";
import { FaMobile } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { PiHandshakeBold } from "react-icons/pi";
import React, { useState, useEffect } from "react";

export default function CommuniCation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section1");
      if (section) {
        const { top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // 섹션이 화면에 나타나면 isVisible 값을 true로 설정
        setIsVisible(top < windowHeight);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="section1"
      className={`w-full h-full flex justify-center p-8 mb-12 `}
    >
      {/* 컨테이너 */}
      <div
        id="container"
        className="w-full h-screen max-w-[1300px] flex flex-col justify-center items-center"
      >
        {/* 커뮤니케이션 타이틀 */}
        <div className="mt-[4%] text-center mb-[6%]">
          <h2 className="font-bold xl:text-[48px] text-[#333C47]">
            학교와 가정의 커뮤니케이션을 위한
          </h2>
          <h2 className="font-bold xl:text-[48px] xl:mt-8 text-[#333C47]">
            최적의 솔루션, 케어키즈!
          </h2>
        </div>
        {/* 아래 그리드 */}
        <div className="w-full h-full max-w-[1100px]  flex flex-col justify-center items-center gap-4">
          {/* 위쪽 그리드 */}
          <div
            id="left_grid1"
            className="flex  md:flex-row flex-col w-full h-1/2 items-center gap-4 "
          >
            {/* 왼쪽 */}
            <div
              className={`md:w-1/2 w-full md:h-full h-[200px] relative bg-[#E6F3FE] rounded-2xl md:p-14 p-6 ${
                isVisible ? "fade-in" : ""
              }`}
            >
              <h3 className="xl:text-[30px] md:text-[25px] text-[20px]  font-semibold">
                누구나
              </h3>
              <h3 className="xl:text-[30px] md:text-[25px] text-[20px]  font-semibold">
                무료로 사용가능
              </h3>
              <FaUser className=" absolute bottom-3 right-14 text-6xl text-[#57A9FB]" />
              <FaUser className=" absolute bottom-3 right-1 text-7xl text-[#208DF9]" />
            </div>
            {/* 오른쪽 */}
            <div
              className={`md:w-1/2 w-full md:h-full h-[200px] bg-slate-200 rounded-2xl ${
                isVisible ? "fade-intwo" : ""
              }`}
            >
              <div className="w-full md:h-full h-[200px] relative bg-[#FFF8D6] rounded-2xl md:p-14 p-6">
                <h3 className="xl:text-[30px] md:text-[25px] text-[20px] font-semibold">
                  PC,모바일
                </h3>
                <h3 className="xl:text-[30px] md:text-[25px] text-[20px] font-semibold">
                  어디서든 간편하게
                </h3>
                <div className=" absolute bottom-3 right-3 text-6xl flex">
                  <HiDesktopComputer className="text-[#57A9FB] text-6xl" />
                  <FaMobile className="text-[#57A9FB]" />
                </div>
              </div>
            </div>
          </div>
          {/* 아래쪽 그리드 */}
          <div
            id="left_grid2"
            className={`flex  md:flex-row flex-col w-full h-1/2 items-center gap-4 `}
          >
            <div
              className={`md:w-1/2 w-full h-full bg-slate-400 rounded-2xl ${
                isVisible ? "fade-inthree" : ""
              }`}
            >
              {" "}
              <div className="w-full md:h-full h-[200px] relative bg-[#FFF8D6] rounded-2xl md:p-14 p-6">
                <h3 className="xl:text-[30px]  md:text-[25px] text-[20px]  font-semibold">
                  케어키즈와 가정을
                </h3>
                <h3 className="xl:text-[30px]  md:text-[25px] text-[20px]  font-semibold">
                  잇는 바른소통
                </h3>
                <div className=" absolute bottom-3 right-3 text-6xl flex">
                  <MdMessage className="text-[#57A9FB] text-7xl" />
                </div>
              </div>
            </div>
            <div
              className={`md:w-1/2 w-full h-full bg-slate-300 rounded-2xl ${
                isVisible ? "fade-infour" : ""
              }`}
            >
              {" "}
              <div className="w-full md:h-full h-[200px] relative bg-[#E6F3FE] rounded-2xl md:p-10 p-6">
                <h3 className="xl:text-[30px]  md:text-[25px] text-[20px]  font-semibold">
                  교육부와 함께하는
                </h3>
                <h3 className="xl:text-[30px]  md:text-[25px] text-[20px]  font-semibold">
                  안전성있는 서비스
                </h3>

                <div className=" absolute bottom-3 right-3 text-6xl flex">
                  <PiHandshakeBold className="text-[#57A9FB] text-7xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
