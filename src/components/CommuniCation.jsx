import { FaUser } from "react-icons/fa6";
import { HiDesktopComputer } from "react-icons/hi";
import { FaMobile } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { PiHandshakeBold } from "react-icons/pi";

export default function CommuniCation() {
  return (
    <div id="section1" className="w-full h-full flex justify-center p-8">
      {/* 컨테이너 */}
      <div
        id="container"
        className="w-full h-screen max-w-[1300px] flex flex-col justify-center items-center"
      >
        {/* 커뮤니케이션 타이틀 */}
        <div className="mt-[4%] text-center mb-[6%]">
          <h2 className="font-bold xl:text-[48px] text-[#333C47]">
            원과 가정의 커뮤니케이션을 위한
          </h2>
          <h2 className="font-bold xl:text-[48px] text-[#333C47]">
            최적의 솔류션, 키즈케어!
          </h2>
        </div>
        {/* 아래 그리드 */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          {/* 위쪽 그리드 */}
          <div className="flex md:flex-row flex-col w-full h-1/2 items-center gap-4">
            {/* 왼쪽 */}
            <div className="xl:w-1/2 w-1/2 md:h-full h-[200px] relative bg-[#E6F3FE] rounded-2xl md:p-14 p-6">
              <h3 className="xl:text-[34px] md:text-[25px] text-[20px]  font-semibold">
                누구나
              </h3>
              <h3 className="xl:text-[34px] md:text-[25px] text-[20px]  font-semibold">
                무료로 사용가능
              </h3>
              <FaUser className=" absolute bottom-3 right-14 text-6xl text-[#57A9FB]" />
              <FaUser className=" absolute bottom-3 right-1 text-7xl text-[#208DF9]" />
            </div>
            {/* 오른쪽 */}
            <div className="xl:w-1/2 w-1/2 md:h-full h-[200px] bg-slate-200 rounded-2xl">
              <div className="w-full md:h-full h-[200px] relative bg-[#FFF8D6] rounded-2xl md:p-14 p-6">
                <h3 className="xl:text-[34px] md:text-[25px] text-[20px] font-semibold">
                  PC,모바일
                </h3>
                <h3 className="xl:text-[34px] md:text-[25px] text-[20px] font-semibold">
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
          <div className="flex md:flex-row flex-col w-full h-1/2 items-center  gap-4">
            <div className="xl:w-1/2 w-1/2 h-full bg-slate-400 rounded-2xl">
              {" "}
              <div className="w-full md:h-full h-[200px] relative bg-[#FFF8D6] rounded-2xl md:p-14 p-6">
                <h3 className="xl:text-[34px]  md:text-[25px] text-[20px]  font-semibold">
                  케어키즈와 가정을
                </h3>
                <h3 className="xl:text-[34px]  md:text-[25px] text-[20px]  font-semibold">
                  잇는 바른소통
                </h3>
                <div className=" absolute bottom-3 right-3 text-6xl flex">
                  <MdMessage className="text-[#57A9FB] text-7xl" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/2 w-1/2 h-full bg-slate-300 rounded-2xl">
              {" "}
              <div className="w-full md:h-full h-[200px] relative bg-[#E6F3FE] rounded-2xl md:p-10 p-6">
                <h3 className="xl:text-[34px]  md:text-[25px] text-[20px]  font-semibold">
                  교육부와 함께하는
                </h3>
                <h3 className="xl:text-[34px]  md:text-[25px] text-[20px]  font-semibold">
                  안전성있는 서비스를
                </h3>
                <h3 className="xl:text-[34px] md:text-[25px] text-[20px]  font-semibold">
                  제공합니다
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
