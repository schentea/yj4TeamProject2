import { useEffect, useState } from "react";
import bg1 from "../img/testbg-1.png";
import bg2 from "../img/testbg-2.png";
import bg3 from "../img/testbg-3.png";
import bg4 from "../img/testbg-4.png";
import bg5 from "../img/testbg-5.png";
import bg6 from "../img/testbg-6.png";

export default function MethodUse() {
  const [isVisible, setIsVisible] = useState(false);
  const [isbottomVisible, setIsbottomVisible] = useState(false);
  //   첫번쨰
  useEffect(() => {
    const handleScroll = () => {
      const tops = document.getElementById("step1");
      if (tops) {
        const { top } = tops.getBoundingClientRect();
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

  //   두번쨰
  useEffect(() => {
    const handleScroll = () => {
      const tops = document.getElementById("step2");
      if (tops) {
        const { top } = tops.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // 섹션이 화면에 나타나면 isVisible 값을 true로 설정
        setIsbottomVisible(top < windowHeight);
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
    <div id="methode" className="w-full h-full flex justify-center p-4">
      {/* 컨테이너 */}
      <div
        id="container"
        className="w-full h-full max-w-[1300px] pt-16 flex flex-col justify-center items-center pb-32"
      >
        {/* 사용방법 타이틀 */}
        <div className="mt-[4%] text-center mb-[6%]">
          <h2 className="font-bold xl:text-[48px] text-[35px] pb-[8%] pt-[8%] text-[#333C47]">
            케어키즈를 사용해보세요!
          </h2>
        </div>
        {/* 방법 과정 */}
        <div className="w-full h-full">
          {/* 첫번째 방법 */}
          <div id="step1" className=" w-full h-1/2 flex flex-col gap-4">
            {/* 위쪽 STEP.1 */}
            <div>
              <h4 className={`text-[#518CFF] font-semibold `}>SOLUTION.1</h4>
            </div>
            {/* 오른쪽 텍스트 */}
            <div className="">
              <div
                className={`flex flex-col md:items-start ${
                  isVisible ? "fade-in" : ""
                }`}
              >
                <h3 className=" md:text-4xl text-3xl font-bold ">
                  회원가입을 클릭후
                </h3>
                <h3 className=" md:text-4xl text-3xl font-bold ">
                  정보를 입력하고 신청해주세요!
                </h3>
              </div>
            </div>
            {/* 아래쪽 그림 */}
            <div className="w-full h-[400px]  flex justify-center items-center">
              <div className="w-[100%] h-[100%] flex justify-center rounded-xl overflow-hidden gap-3">
               <div className="w-[33%] h-full border-1">
                <img className="w-full h-full" src={bg1} alt=" " />
               </div>
               <div className="w-[33%] h-full bg-red-300 border-1">
               <img className="w-full h-full" src={bg2} alt=" " />
               </div>
               <div className="w-[33%] h-full bg-red-300 border-1">
               <img className="w-full h-full" src={bg3} alt=" " />
               </div>
              </div>
            </div>
          </div>
          {/* 두번째 방법 */}
          <div id="step2" className=" w-full h-1/2 flex flex-col gap-4 mt-48">
            {/* 위쪽 STEP.2 */}
            <div>
              <h4 className={`text-[#518CFF] font-semibold`}>SOLUTION.2</h4>
            </div>
            {/* 오른쪽 텍스트 */}
            <div className="">
              <div
                className={`flex flex-col  md:items-start ${
                  isbottomVisible ? "fade-in" : ""
                }`}
              >
                <h3 className=" md:text-4xl text-3xl font-bold ">
                  마이페이지에서 언제든지
                </h3>
                <h3 className=" md:text-4xl text-3xl font-bold ">
                  정보 수정이 가능합니다
                </h3>
              </div>
            </div>
            {/* 아래쪽 그림 */}
            <div className="w-full h-[400px]  flex justify-center items-center">
              <div className="w-[100%] h-[100%] flex justify-center rounded-xl overflow-hidden gap-3">
               <div className="w-[33%] h-full border-1 ">
                <img className="w-full h-full" src={bg4} alt="1 " />
               </div>
               <div className="w-[33%] h-full bg-red-300 border-1">
               <img className="w-full h-full" src={bg5} alt=" 2" />
               </div>
               <div className="w-[33%] h-full bg-red-300 border-1">
               <img className="w-full h-full" src={bg6} alt=" 3" />
               </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
