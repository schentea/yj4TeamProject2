import { apiAlimtalk } from "../Api";
import "../Button.scss";
import useUser from "./useUser";
import icon from "../img/2Cheerful_happy_cute_girl_waving_raised_hand_to_say_hello_logo_hand_drawn_cartoon_art_illustration.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function AllimSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const userData = useUser();
  const openModal = () => {
    setModalOpen(true);
  };
  console.log(userData);
  const closeModal = () => {
    setModalOpen(false);
  };

  const onClick = async () => {
    // 비동기 함수로 변경합니다.
    alert("신청이 완료되었습니다");

    try {
      if (!userData || !userData.user) {
        console.error("사용자 데이터가 없습니다.");
        return;
      }
      const uid = userData.user.userid;
      const name = userData.user.username;
      const tel = userData.user.tel;
      const subscribe = true;

      // 데이터를 API로 보냅니다.
      const response = await apiAlimtalk({
        uid: uid,
        username: name,
        tel: tel,
        subscribe: subscribe,
      }); // username을 데이터로 전달합니다.

      // 응답을 확인하고 필요한 작업을 수행합니다.
      if (response.ok) {
        console.log("API 호출이 성공했습니다.");
        // 성공했을 때의 처리를 여기에 추가합니다.
      } else {
        console.log("API 호출이 실패했습니다.");
        // 실패했을 때의 처리를 여기에 추가합니다.
      }
      setModalOpen(false);
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다.", error);
      // 오류가 발생했을 때의 처리를 여기에 추가합니다.
    }
  };
  return (
    <div
      id="section2"
      className="w-full h-2/3 pb-16 relative flex justify-center bg-[#E6F3FE] items-center pt-16"
    >
      {/* 공간 총괄 */}
      <div
        id="container"
        className="w-full h-full max-w-[1300px] flex justify-center items-center z-1 overflow-hidden md:ml-[15%]"
      >
        {/* 왼쪽 공간 */}
        <div className="md:w-1/2 w-full h-1/2 flex flex-col p-8 gap-3 items-center justify-center lg:ml-[10%] md:items-start ">
          <h5 className="font-semibold">알레르기로 인해 고민이신가요?</h5>
          <div>
            <h3 id="h31" className="text-[45px] xl:text-5xl font-bold ">
              <span className="text-[#208DF9] ">케어키즈</span>로 스마트한
            </h3>
            <h3
              id="h31"
              className="xl:text-[45px] w-[510px] xl:text-4xl text-3xl font-bold"
            >
              급식 관리를 시작해 보세요!
            </h3>
          </div>
          <p className="text-[#666] text-sm w-full">
            학부모 소통, 급식 관리까지 효율적으로 관리할 수 있어요.{" "}
          </p>
          <button class="w-1/2 btn btn-primary btn-jelly" onClick={openModal}>
            신청하기
          </button>
          {modalOpen ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
              <div className="bg-white rounded-lg w-[400px] h-[600px] relative">
                <div className="w-full h-12 flex justify-center items-center rounded-t-md bg-blue-400">
                  <p className="text-white font-bold mt-3">
                    입력하신 정보가 맞나요?
                  </p>
                </div>

                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white hover:text-gray-800 transition duration-300 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className="p-4">
                  <p className="text-lg">
                    알레르기: {userData?.user.allergies}
                  </p>
                  <p className="text-lg">
                    학교정보:{" "}
                    {userData?.user.schoolNM &&
                      userData?.user.schoolNM.split(",")[0]}
                  </p>{" "}
                  <p className="text-lg">전화번호: {userData?.user.tel}</p>
                  <div className="w-full flex gap-2">
                    <Link to="/mypage" className="w-1/2">
                      <button class="w-full h-full rounded-md btn-primary btn-jelly bg-[#E0E3EB] text-black">
                        수정하기
                      </button>
                    </Link>
                    <button
                      class="w-1/2 btn btn-primary btn-jelly"
                      onClick={onClick}
                    >
                      신청하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        {/* 오른쪽 공간 */}
        <div className="w-1/2 h-1/2 hidden md:flex">
          {/* 이미지 */}
          <div className="w-full h-full md:flex justify-start items-center hidden">
            <div className="w-[50%] h-[50%]">
              <img src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
