import { useState } from "react";
import logo from "../img/logo.svg";

export default function MyPage() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <div>
      {/* 마이페이지 나브 */}
      <div className="w-full h-[80px] border flex  justify-between p-4 items-center">
        {/* 왼쪽 로고 */}
        <img className="w-[180px]" src={logo} alt="sss" />
        {/* 오른쪽 프로필 사진 */}
        <div>프로필 사진</div>
      </div>
      {/* 아래쪽 컨텐츠 */}
      <div className="w-full h-[91.5vh] flex justify-center ">
        {/* 왼쪽 정보 */}
        <div className="w-[15%] h-full border">
          {/* 왼쪽 상단 */}
          <div className="w-full h-60  border-b flex flex-col justify-center items-center gap-3">
            {/* 프로필 사진 */}
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-full flex items-center justify-center ">
              프로필 사진
            </div>
            {/* 회원이름 */}
            <div>
              <h4>이승민</h4>
              <p>19.05.08</p>
            </div>
          </div>
          {/* 왼족 하단 */}
          <div className="p-4 flex flex-col justify-center items-start gap-4">
            <div onClick={() => setSelectedMenu("profile")}>내 정보 수정</div>
            <div onClick={() => setSelectedMenu("school")}>
              학교정보 정보수정
            </div>
            <div onClick={() => setSelectedMenu("allergy")}>
              알레르기 정보수정
            </div>
            <div onClick={() => setSelectedMenu("region")}>
              지역정보 정보수정
            </div>
          </div>
        </div>
        {/* 오른쪽 바꿀수 있는 폼  */}
        <div className="h-full w-[85%] bg-[#F9FAFB] p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {selectedMenu === "profile" && "내 정보 수정"}
            {selectedMenu === "school" && "학교 정보 수정"}
            {selectedMenu === "allergy" && "알레르기 정보 수정"}
            {selectedMenu === "region" && "지역 정보 수정"}
          </h2>
          <div className="w-full h-full flex justify-center">
            {selectedMenu === "profile" && (
              <form className="flex flex-col w-full h-full">
                {/* 입력 폼들 추가 */}
                <div className="w-full flex flex-col items-center">
                  {/* 이름 */}
                  <div className="flex w-1/2 items-center  border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-20 flex items-center p-4">
                      이름
                    </div>
                    <div className="pl-2">이승민</div>
                  </div>
                  {/* 아이디 */}
                  <div className="flex w-1/2 items-center   border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-10 flex items-center p-4">
                      아이디
                    </div>
                    <input
                      type="email"
                      placeholder="이메일"
                      className="pl-8 h-[90%] w-[40%] border  placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                    />
                  </div>
                  {/* 비밀번호 */}
                  <div className="flex w-1/2 items-center  border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-10 flex items-center p-4">
                      비밀번호
                    </div>
                    <input
                      type="password"
                      placeholder="비밀번호"
                      className="pl-8 h-[90%] w-[40%] border  placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                    />{" "}
                  </div>
                  {/* 비밀번호 확인 */}
                  <div className="flex w-1/2 items-center   border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-10 flex items-center p-4">
                      비밀번호 확인
                    </div>
                    <input
                      type="password"
                      placeholder="비밀번호 확인"
                      className="pl-8 h-[90%] w-[40%] border  placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                    />{" "}
                  </div>
                  {/* 저장 버튼 */}
                  <div className="w-full flex justify-center m-4">
                    <button className="bg-blue-500 w-[50%] text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      저장
                    </button>
                  </div>
                </div>
              </form>
            )}
            {/* 학교 */}
            {selectedMenu === "school" && (
              <div className="w-full h-full flex justify-center">
                <div className="text-2xl font-semibold">zz</div>
              </div>
            )}
            {/* 알레르기 */}
            {selectedMenu === "allergy" && (
              <div className="w-full h-full flex justify-center">
                <div className="text-2xl font-semibold">zzgg</div>
              </div>
            )}
            {/* 지역 */}
            {selectedMenu === "region" && (
              <div className="w-full h-full flex justify-center">
                <div className="text-2xl font-semibold">지역</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
