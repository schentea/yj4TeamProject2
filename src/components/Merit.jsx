import { useEffect, useState } from "react";
import img1 from "../img/food.png";
import img2 from "../img/talk.png";

export default function Merit() {
  const [isVisible, setIsVisible] = useState(false);
  const [istopVisible, setIstopVisible] = useState(false);
  const [isbottomVisible, setIsbottomVisible] = useState(false);
  console.log(isVisible);
  //  메인 타이틀
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("top_img");

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
  //   위 이미지
  useEffect(() => {
    const handleScroll = () => {
      const tops = document.getElementById("top_img");
      if (tops) {
        const { top } = tops.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // 섹션이 화면에 나타나면 isVisible 값을 true로 설정
        setIstopVisible(top < windowHeight);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   아래 이미지
  useEffect(() => {
    const handleScroll = () => {
      const tops = document.getElementById("bottom_img");
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
    <div
      id="merit"
      className="w-full h-auto flex justify-center bg-cover bg-center pb-64"
    >
      {/* 컨테이너 */}
      <div id="container" className="w-full h-full max-w-[1300px] p-4">
        {/* 통괄 */}
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* 위쪽 타이틀 */}
          <div className="md:w-4/5 w-full max-w-[1000px] xl:h-full flex flex-col xl:items-start items-center justify-center gap-4">
            <div className="mt-[4%] mb-[12%] w-full ">
              <h2
                className={`font-bold text-center xl:text-[48px] text-[25px]  text-[#333C47] `}
              >
                우리 기업은 알림톡 서비스를
              </h2>
              <h2
                className={`font-bold xl:text-[48px] text-[25px] mt-4 text-center text-[#333C47] `}
              >
                사용하여 알레르기 유발을 방지합니다
              </h2>
            </div>
          </div>
          {/* 위쪽 이미지 */}
          <div
            id="top_img"
            className={`w-full xl:h-[60vh] h-[45vh]  rounded-2xl flex flex-col md:flex-row justify-center items-center gap-4 ${
              istopVisible ? "fade-in" : ""
            }`}
          >
            {/* 왼쪽 사진 */}
            <div className="w-1/2 h-full  flex justify-center items-center">
              <img
                className="w-[85%] h-[100%] object-cotain object-center"
                src={img1}
                alt="a"
              />
            </div>
            {/* 오른쪽 글 */}
            <div className="md:w-2/3 w-full h-full  flex flex-col md:items-baseline items-center justify-center xl:pl-8 ">
              <h3 className="xl:text-3xl md:text-xl text-[20px] font-semibold">
                식단표에 알레르기 성분이 검출되면
              </h3>
              <h3 className=" xl:text-3xl md:text-xl text-[20px] font-semibold">
                식단표를 <span className=" text-red-500">붉은색</span>으로
                표시해 보기가 쉬워요!
              </h3>
            </div>
          </div>
          {/* 아래쪽 이미지 */}
          <div
            id="bottom_img"
            className={`w-full xl:h-[60vh] h-[45vh] mt-4  rounded-2xl flex flex-col md:flex-row justify-center items-center gap-4 ${
              isbottomVisible ? "fade-intwo" : ""
            }`}
          >
            {/* 왼쪽 사진 */}
            <div className="w-1/2 h-full  flex justify-center items-center">
              <img
                className="w-[70%] h-[100%] object-cover object-center"
                src={img2}
                alt="a"
              />
            </div>
            {/* 오른쪽 글 */}
            <div className="md:w-2/3 w-full h-full  flex flex-col md:items-baseline items-center justify-center xl:pl-8 ">
              <h3 className="xl:text-3xl md:text-xl text-[20px] font-semibold">
                알레르기가 포함된 식품이 나오면
              </h3>
              <h3 className=" xl:text-3xl md:text-xl text-[20px] font-semibold">
                바로전날 <span className=" text-red-500">알림톡</span>을
                전송해드려요!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
