export default function Merit() {
  return (
    <div className="w-full h-auto flex justify-center bg-[#F1F6FF]">
      {/* 컨테이너 */}
      <div id="container" className="w-full h-full max-w-[1300px] p-4">
        {/* 통괄 */}
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* 위쪽 타이틀 */}
          <div className="md:w-4/5 w-full max-w-[1000px] xl:h-full flex flex-col xl:items-start items-center justify-center gap-4">
            <div className="mt-[4%] mb-[6%] w-full ">
              <h2 className="font-bold xl:text-[48px] text-[#333C47]">
                우리 기업은 알림톡 서비스를
              </h2>
              <h2 className="font-bold xl:text-[48px] mt-4 text-right text-[#333C47]">
                사용하여 알레르기 유발을 방지합니다
              </h2>
            </div>
          </div>
          {/* 위쪽 이미지 */}
          <div className="w-full xl:h-[60vh] h-[45vh]  rounded-2xl flex flex-col md:flex-row justify-center items-center gap-4">
            {/* 왼쪽 사진 */}
            <div className="w-1/2 h-full  flex justify-center items-center">
              <img
                className="w-[70%] h-[100%] object-contain object-center"
                src="https://www.kidsnote.com/_next/image?url=https%3A%2F%2Fmk.kakaocdn.net%2Fdn%2Fkidsnote%2Fweb%2Fkn-www%2F_next%2Fstatic%2Fmedia%2Fwork1%402x.36791b9b.png&w=992&q=75"
                alt=""
              />
            </div>
            {/* 오른쪽 글 */}
            <div className="md:w-2/3 w-full h-full  flex flex-col md:items-baseline items-center justify-center xl:pl-8 ">
              <h3 className="xl:text-3xl md:text-xl text-[20px] font-semibold">
                식단표에 알레르기 성분이 검출되면
              </h3>
              <h3 className=" xl:text-3xl md:text-xl text-[20px] font-semibold">
                식단표를 붉은색으로 표시해 보기가 쉬워요!
              </h3>
            </div>
          </div>
          {/* 아래쪽 이미지 */}
          <div className="w-full xl:h-[60vh] h-[45vh] mt-4  rounded-2xl flex flex-col md:flex-row justify-center items-center gap-4">
            {/* 왼쪽 사진 */}
            <div className="w-1/2 h-full  flex justify-center items-center">
              <img
                className="w-[70%] h-[100%] object-contain object-center"
                src="https://www.kidsnote.com/_next/image?url=https%3A%2F%2Fmk.kakaocdn.net%2Fdn%2Fkidsnote%2Fweb%2Fkn-www%2F_next%2Fstatic%2Fmedia%2Fwork2%402x.d90307ba.png&w=992&q=75"
                alt=""
              />
            </div>
            {/* 오른쪽 글 */}
            <div className="md:w-2/3 w-full h-full  flex flex-col md:items-baseline items-center justify-center xl:pl-8 ">
              <h3 className="xl:text-3xl md:text-xl text-[20px] font-semibold">
                알레르기가 포함된 식품이 나오면
              </h3>
              <h3 className=" xl:text-3xl md:text-xl text-[20px] font-semibold">
                바로전날 알림톡을 전송해드려요!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
