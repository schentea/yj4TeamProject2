import React, { useState } from "react";
import ModalComponent from "./SignupModal";
import Kakao from "../img/kakaoLogo.png";
import Google from "../img/googleLogo.svg";
import Push from "../img/push.jpg";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostUserRegister } from "../Api";
import AllergyModalComponent from "./SignupAllergy";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isAllergyModalOpen, setIsAllergyModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isChecked, setIsChecked] = useState({
    서울: false,
    부산: false,
    대구: false,
    인천: false,
    광주: false,
    대전: false,
    울산: false,
    세종시: false,
    경기도: false,
    강원도: false,
    충청북도: false,
    충청남도: false,
    전라북도: false,
    전라남도: false,
    경상북도: false,
    경상남도: false,
    제주도: false,
  });
  const [isAllergyChecked, setIsAllergyChecked] = useState({
    달걀: false,
    우유: false,
    메밀: false,
    땅콩: false,
    대두: false,
    밀: false,
    고등어: false,
    게: false,
    새우: false,
    돼지고기: false,
    복숭아: false,
    토마토: false,
    아황산: false,
    호두: false,
    닭고기: false,
    쇠고기: false,
    오징어: false,
    조개류: false,
    잣: false,
  });
  const handleRadioChange = (city) => {
    setSelectedRegion(city);
    console.log("지역", city);
    const updatedState = {};
    Object.keys(isChecked).forEach((key) => {
      updatedState[key] = key === city;
    });
    setIsChecked(updatedState);
  };
  const handleCheckChange = (allergy) => {
    setIsAllergyChecked({
      ...isAllergyChecked,
      [allergy]: !isAllergyChecked[allergy],
    });
  };

  const { mutate } = useMutation(apiPostUserRegister);
  const { register, handleSubmit } = useForm();
  const onValid = (data) => {
    const selectedAllergies = Object.keys(isAllergyChecked).filter(
      (allergy) => isAllergyChecked[allergy]
    );
    mutate({ data, selectedRegion, selectedAllergies });
  };
  return (
    <div
      id="form"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      {/* 중앙 정렬 한 박스 */}
      <div
        className="w-full max-w-5xl h-[850px] flex rounded-lg overflow-hidden "
        style={{
          background: "#7FC9EF",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        {/* 왼쪽 이미지 박스 */}
        <div className="w-1/2 relative h-full hidden md:block">
          {/* 배경 이미지 */}
          <img
            className="w-full h-full object-cover object-center"
            src={Push}
            alt="FormImg"
          />
          {/* 배경을 어둡게 처리 */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* text  */}

          <Link to="/">
            <span className=" text-white w-full text-left pl-4 text-3xl font-semibold absolute left-[50%] top-[2%] translate-x-[-50%] ">
              CareKids
            </span>
          </Link>
        </div>
        {/* 오른쪽 로그인 박스 */}
        <form
          className="md:w-1/2 w-full h-full px-10  flex flex-col gap-3 items-center "
          onSubmit={handleSubmit(onValid)}
        >
          <span className="text-2xl font-semibold py-8">회원가입</span>
          <input
            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
            type="text"
            placeholder="아이디"
            {...register("userid")}
          />
          <input
            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
            type="text"
            placeholder="이름"
            {...register("username")}
          />
          <input
            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
            type="email"
            placeholder="이메일"
            {...register("email")}
          />
          <input
            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          <input
            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
            type="password"
            placeholder="비밀번호 확인"
            {...register("password2")}
          />
          <input
            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
            type="text"
            placeholder="전화번호"
            {...register("tel")}
          />
          <div className="w-full h-[50px] flex gap-2 ">
            <div
              onClick={() => setIsRegionModalOpen(true)}
              className="w-1/2 h-full border text-[13px] rounded-lg flex justify-center items-center font-semibold text-center bg-slate-100 cursor-pointer duration-500  hover:bg-slate-300"
            >
              지역을 선택해주세요
            </div>
            <div
              onClick={() => setIsAllergyModalOpen(true)}
              className="w-1/2 h-full border text-[13px] rounded-lg flex justify-center items-center font-semibold text-center bg-slate-100 cursor-pointer duration-500 hover:bg-slate-300"
            >
              알레르기 식품을 선택해주세요
            </div>
          </div>
          <input
            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
            type="text"
            placeholder="학교명"
            {...register("schoolNM")}
          />
          <button className="w-full h-[50px] border text-[17px] rounded-lg flex justify-center items-center font-bold text-center bg-slate-100 cursor-pointer duration-500 hover:bg-slate-300">
            회원가입
          </button>
          <div className="w-full h-[55px] flex justify-center items-center gap-2">
            <div className="w-1/2 h-full bg-[#FEE500] rounded-lg md:h-[55px] flex justify-around items-center cursor-pointer">
              <img
                className="w-[50px] h-[100%] cursor-pointer object-contain"
                src={Kakao}
              />
              <p className="flex items-center pt-[11px]">카카오 로그인</p>
              <span className="w-[10%]"></span>
            </div>
            <div className="w-1/2 h-full bg-[#F2F2F2] rounded-lg md:h-[55px] flex justify-around items-center cursor-pointer">
              <img
                className="w-[50px] h-[100%] cursor-pointer object-contain"
                src={Google}
              />
              <p className="flex items-center pt-[11px]">구글 로그인</p>
              <span className="w-[10%]"></span>
            </div>
          </div>
        </form>
      </div>
      {isRegionModalOpen && (
        <ModalComponent
          closeModal={() => setIsRegionModalOpen(false)}
          isChecked={isChecked}
          handleRadioChange={handleRadioChange}
        />
      )}
      {isAllergyModalOpen && (
        <AllergyModalComponent
          closeModal={() => setIsAllergyModalOpen(false)}
          isChecked={isAllergyChecked}
          handleCheckChange={handleCheckChange}
        />
      )}
    </div>
  );
}
