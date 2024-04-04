export default function MethodUse() {
  return (
    <div className="w-full h-full flex justify-center p-4">
      {/* 컨테이너 */}
      <div
        id="container"
        className="w-full h-screen max-w-[1300px] flex flex-col justify-center items-center"
      >
        {/* 사용방법 타이틀 */}
        <div className="mt-[4%] text-center mb-[6%]">
          <h2 className="font-bold xl:text-[48px] text-[#333C47]">
            케어키즈를 사용해보세요!
          </h2>
        </div>
        {/* 방법 과정 */}
        <div className="w-full h-full">
          {/* 첫번째 방법 */}
          <div className=" w-full h-1/2 flex md:flex-row flex-col items-center justify-center">
            {/* 왼쪽 그림 */}
            <div className="md:w-1/3 w-2/3 h-full  flex justify-center items-center">
              <div className="w-[90%] h-[90%] bg-slate-500 rounded-xl"></div>
            </div>
            {/* 오른쪽 텍스트 */}
            <div className="md:w-2/3 w-full h-full  flex flex-col justify-center items-center p-4">
              <div className="flex flex-col justify-center items-center md:items-start">
                <h3 className=" text-start">회원가입을 클릭후</h3>
                <h3>정보를 입력하고 신청해주세요!</h3>
              </div>
            </div>
          </div>
          {/* 두번째 방법 */}
          <div className=" w-full h-1/2 flex md:flex-row flex-col items-center justify-center">
            {/* 오른쪽 텍스트 */}
            <div className="md:w-2/3 w-full h-full  md:flex flex-col justify-center items-center p-4 hidden">
              <div className="flex flex-col justify-center items-center md:items-start">
                <h3>마이페이지에서 언제라도</h3>
                <h3>정보 수정이 가능합니다!</h3>
              </div>
            </div>
            {/* 왼쪽 그림 */}
            <div className="md:w-1/3 w-2/3  h-full  flex justify-center items-center">
              <div className="w-[90%] h-[90%] bg-slate-500 rounded-xl"></div>
            </div>
            <div className="md:w-2/3 w-full h-full  flex flex-col justify-center items-center p-4 md:hidden ">
              <h3>마이페이지에서 언제라도</h3>
              <h3>정보 수정이 가능합니다!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
