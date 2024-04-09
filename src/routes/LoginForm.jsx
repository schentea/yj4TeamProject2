import React, { useState } from "react";
import ModalComponent from "./SignupModal";
import Kakao from "../img/kakao_login_large_narrow.png";
import Google from "../img/web_neutral_sq_SU@2x.png";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostUserRegister } from "../Api";

export default function LoginForm() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 상태 변수들을 정의
  const [isChecked, setIsChecked] = useState(false); // 상태 변수들을 정의
  const { mutate } = useMutation(apiPostUserRegister);
  const { register, handleSubmit } = useForm();
  const onValid = (data) => mutate(data);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div id="form" className="w-full h-screen flex justify-center items-center">
      {/* 중앙 정렬 한 박스 */}
      <div
        className="w-full max-w-4xl h-[550px] flex rounded-lg overflow-hidden "
        style={{
          background: "rgba(186, 226, 239, 0.5)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        {/* 왼쪽 이미지 박스 */}
        <div className="w-1/2 relative h-full">
          {/* 배경 이미지 */}
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2023/05/30/22/17/ai-generated-8030105_1280.jpg"
            alt="FormImg"
          />
          {/* 배경을 어둡게 처리 */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* text  */}
          <span className="text-white text-2xl font-semibold absolute left-[50%] top-[20%] translate-x-[-50%] shadow-lg">
            행복한 가정을 위해
          </span>
          <span className=" text-white text-2xl font-semibold absolute left-[50%] top-[40%] translate-x-[-50%] shadow-lg">
            키즈케어가
          </span>
          <span className="text-white text-2xl font-semibold absolute left-[50%] top-[60%] translate-x-[-50%]">
            노력 하겠습니다
          </span>
        </div>
        {/* 오른쪽 로그인 박스 */}
        <form
          className="w-1/2 h-full  flex flex-col gap-4 items-center "
          onSubmit={handleSubmit(onValid)}
        >
          <span className="text-2xl font-semibold py-16">로그인</span>

          <input
            className="w-[250px] h-[40px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="email"
            placeholder="아이디"
            {...register("email")}
          />
          <input
            className="w-[250px] h-[40px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />

          <button className="w-[250px] h-[40px] flex justify-center items-center rounded-md border-2 border-gray-800  font-semibold cursor-pointer text-black bg-slate-200 ">
            로그인
          </button>
          <img
            className="w-[250px] h-[40px] cursor-pointer object-cover"
            src={Kakao}
          />
          <img
            className="w-[250px] h-[40px] cursor-pointer object-cover"
            src={Google}
          />
        </form>
      </div>
      {isModalOpen && (
        <ModalComponent
          closeModal={() => setIsModalOpen(false)}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
    </div>
  );
}
