import { Link } from "react-router-dom";
import New1 from "../img/New1.png";
import New2 from "../img/New2.png";
import New3 from "../img/New3.png";
import nail1 from "../img/sunmnail1.jpg";
import nail2 from "../img/sunmnail2.jpg";
import nail4 from "../img/sunmnail4.jpg";

export default function Dansurs() {
  return (
    <div
      id="dansurs"
      className="w-full h-[120vh]  flex flex-col items-center pb-16 "
    >
      {/* 컨테이너 */}
      <div id="container" className="w-full max-w-[1300px] h-full">
        {/* 알레르기 심각성 메인 타이틀 */}
        <div className="mt-[4%] text-center mb-[6%]">
          <h2 className="font-bold xl:text-[48px] text-[#333C47]">
            알레르기의 심각성
          </h2>
        </div>
        {/* 알레르기 심각성 뉴스 그리드 */}
        <div className="w-full h-[77%]    flex justify-center items-center gap-4">
          {/* 기사 첫번째 공간 */}
          <div className="xl:w-1/3 w-1/2 h-[100%]  flex flex-col justify-center items-center gap-4">
            {/* 위쪽 기사 */}
            <div className="w-full  h-1/2 flex flex-col justify-center items-center ">
              {/* 제일 큰 틀 */}
              <div className="w-[80%] relative border-t-4 border-black h-full group cursor-pointer ">
                <p className=" absolute -top-8 font-bold">유튜브</p>
                {/* 이미지 */}
                <div className="w-full h-2/5 bg-blue-400">
                  <img
                    src={nail1}
                    alt="img"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                {/* 아래 내용 */}
                <Link
                  to="https://www.youtube.com/watch?v=9RORKZSqwjs"
                  className="text-black "
                >
                  <div className=" absolute bottom-0 cursor-pointer duration-300 group-hover:h-4/6 w-full h-3/5 bg-white p-2 rounded-b-xl ">
                    <p className="text-[14px] font-semibold text-[#D39C4F]">
                      알레르기 방지
                    </p>
                    <h3 className="text-lg font-semibold group-hover:underline">
                      알레르기 없애는 법, 어릴 때부터 관리가 중요하다!
                    </h3>

                    <p className="text-[14px] text-gray-500">
                      만성질환인만큼 꾸준한 치료가 필요한 소아 알레르기에 대해
                      알아볼까요?
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* 아래쪽 기사 */}
            <div className="w-full  h-1/2 flex flex-col justify-center items-center group cursor-pointer ">
              {/* 제일 큰 틀 */}
              <div className="w-[80%] relative  h-full ">
                {/* 이미지 */}
                <div className="w-full h-2/5 bg-blue-400">
                  <img
                    src={nail2}
                    alt="img"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                {/* 아래 내용 */}
                <Link
                  to="https://www.youtube.com/watch?v=wKPcG1TiS98"
                  className="text-black"
                >
                  <div className=" absolute bottom-0 cursor-pointer duration-300 group-hover:h-4/6 w-full h-3/5 bg-white p-2 rounded-b-xl ">
                    <p className="text-[14px] font-semibold text-[#D39C4F]">
                      생활안전
                    </p>
                    <h3 className="text-lg font-semibold group-hover:underline">
                      식품 알레르기에 대해 알아야 할 7가지
                    </h3>
                    <p className="text-[14px] text-gray-500">
                      골치아픈 식품 알레르기! 필수로 알아야 할 7가지에 대해서
                      알아볼까요?
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* 기사 두번쨰 공간 */}
          <div className="xl:w-1/3 w-1/2 h-[100%] border-x border-gray-300 flex flex-col items-center gap-4 ">
            {/* 위쪽 기사 */}
            <div className="w-full  xl:h-[45%] h-1/2 flex flex-col justify-center items-center group cursor-pointer ">
              {/* 제일 큰 틀 */}
              <div className="w-[80%] relative border-t-4 border-black h-full ">
                <p className=" absolute -top-8 font-bold">뉴스</p>
                {/* 이미지 */}
                <div className="w-full h-2/5 bg-blue-400">
                  <img
                    src={New1}
                    alt="img"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                {/* 아래 내용 */}
                <Link
                  to="https://imnews.imbc.com/replay/2019/nwdesk/article/5128145_28802.html"
                  className="text-black"
                >
                  <div className=" absolute bottom-0 cursor-pointer duration-300 group-hover:h-4/6 w-full h-3/5 bg-white p-2 rounded-b-xl ">
                    <p className="text-[14px] font-semibold text-[#D39C4F]">
                      생활안전
                    </p>
                    <h3 className="text-lg font-semibold group-hover:underline">
                      '아몬드' 먹으면 안 되는 아이·· 포장지 봐선 몰라
                    </h3>
                    <p className="text-[14px] text-gray-500">
                      중증 식품 알레르기는 10세 미만 영유아에게서 가장 많이
                      발생하는데, 정작 어린이집은 알레르기 관리 대상에서 빠져
                      있습니다··
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* 아래쪽 기사 */}
            <div className="w-full  h-1/2 flex flex-col justify-center items-center group cursor-pointer">
              {/* 제일 큰 틀 */}
              <div className="w-[80%] relative  h-full ">
                {/* 이미지 */}
                <div className="w-full h-2/5 bg-blue-400">
                  <img
                    src={New2}
                    alt="img"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                {/* 아래 내용 */}
                <Link
                  to="https://imnews.imbc.com/replay/2017/nwtoday/article/4454969_31369.html"
                  className="text-black"
                >
                  <div className=" absolute bottom-0 cursor-pointer duration-300 group-hover:h-4/6 w-full h-3/5 bg-white p-2 rounded-b-xl ">
                    <p className="text-[14px] font-semibold text-[#D39C4F]">
                      생활안전
                    </p>
                    <h3 className="text-lg font-semibold group-hover:underline">
                      '유제품 알레르기' 유치원생, 샌드위치 먹고 사망
                    </h3>
                    <p className="text-[14px] text-gray-500">
                      유치원에서 나눠준 샌드위치를 먹은 이후 과민성 쇼크 증상을
                      보인 뒤 목숨을 잃었습니다
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* 기사 세번쨰 공간 */}
          <div className="xl:w-1/3 w-1/2 h-[100%] hidden  xl:flex flex-col justify-center items-center gap-4 ">
            {/* 위쪽 기사 */}
            <div className="w-full  h-1/2 flex flex-col justify-center items-center group cursor-pointer ">
              {/* 제일 큰 틀 */}
              <div className="w-[80%] relative border-t-4 border-black h-full ">
                <p className=" absolute -top-8 font-bold">뉴스</p>
                {/* 이미지 */}
                <div className="w-full h-2/5 ">
                  <img
                    src={New3}
                    alt="img"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                {/* 아래 내용 */}
                <Link
                  to="https://imnews.imbc.com/replay/2019/nwdesk/article/5128144_28802.html"
                  className="text-black rounded-b-md"
                >
                  <div className=" absolute bottom-0 cursor-pointer duration-300 group-hover:h-4/6 w-full h-3/5 bg-white p-2 rounded-b-xl   ">
                    <p className="text-[14px] font-semibold text-[#D39C4F]">
                      생활안전
                    </p>
                    <h3 className="text-lg font-semibold group-hover:underline">
                      유난 떤다고요? ·· 잘못 먹으면 "숨도 못 쉬어요"
                    </h3>
                    <p className="text-[14px] text-gray-500">
                      식품 알레르기가 있는 아이들은 원인 물질을 먹게 되면 자칫
                      생명까지 위협받을 수 있는데요. 이런 자녀를 둔 부모들은
                      아이가 밖에서 무엇을 먹게 될지 몰라 전전 긍긍해야 합니다.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* 아래쪽 기사 */}
            <div className="w-full  h-1/2 flex flex-col justify-center items-center group cursor-pointer ">
              {/* 제일 큰 틀 */}
              <div className="w-[80%] relative  h-full ">
                {/* 이미지 */}
                <div className="w-full h-2/5 bg-blue-400">
                  <img
                    src={nail4}
                    alt="img"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                {/* 아래 내용 */}
                <Link
                  to="https://www.k-health.com/news/articleView.html?idxno=69985"
                  className="text-black"
                >
                  <div className=" absolute bottom-0 cursor-pointer duration-300 group-hover:h-4/6 w-full h-3/5 bg-white p-2 rounded-b-xl ">
                    <p className="text-[14px] font-semibold text-[#D39C4F]">
                      알레르기 방지
                    </p>
                    <h3 className="text-lg font-semibold group-hover:underline">
                      설마 나도? 혹시 모를 ‘식품알레르기’, 이렇게 대비!
                    </h3>
                    <p className="text-[14px] text-gray-500">
                      알레르기 유발물질을 포함한 제품은 별도로 해당 재료를
                      표시하게 돼 있다. 식품알레르기가 있는 소비자라면 이를 꼭
                      확인 후 제품을 구입하는 것이 좋다
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
