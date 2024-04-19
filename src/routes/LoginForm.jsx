import React from "react";
import Kakao from "../img/kakaoLogo.png";
import Google from "../img/googleLogo.svg";
import Push from "../img/push.jpg";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { apiPostUserLogin } from "../Api";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../components/useUser";
import { IoArrowBackOutline } from "react-icons/io5";
export default function SignupForm() {
  const kakaoUrl = "https://kauth.kakao.com/oauth/authorize";
  const config = {
    response_type: "code",
    client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  };

  const params = new URLSearchParams(config).toString();
  const finalUrl = `${kakaoUrl}?${params}`;

  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URL}&response_type=code&scope=email profile`;

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useMutation(apiPostUserLogin, {
    onSuccess: (data) => {
      if (data.result === true) {
        // 서버에서 성공 여부를 확인
        // 로그인 성공 시 세션 스토리지에 데이터 저장
        sessionStorage.setItem("userData", JSON.stringify(data));
        queryClient.invalidateQueries("getUser");
        navigate("/");
        window.location.reload();
      } else {
        // 로그인 실패 시
        sessionStorage.clear();
        navigate("/login");
      }
    },
  });
  const { register, handleSubmit } = useForm();
  const onValid = (data) => {
    mutate(data);
  };
  const data = useUser();
  console.log(data);

  return (
    <div id="form" className="w-full h-screen flex justify-center items-center p-4">
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
          <img className="w-full h-full object-cover object-center" src={Push} alt="FormImg" />
          {/* 배경을 어둡게 처리 */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* text  */}
          <Link to="/">
            <span className=" text-white w-full text-left pl-4 text-3xl font-semibold fixed left-[50%] top-[2%] translate-x-[-50%] ">
              <IoArrowBackOutline />
            </span>
          </Link>
        </div>
        {/* 오른쪽 로그인 박스 */}
        <form className="md:w-1/2 w-full h-full px-10  flex flex-col gap-3 items-center " onSubmit={handleSubmit(onValid)}>
          <Link to="/">
            <span className="  block md:hidden text-black w-full text-left pl-4 text-3xl font-semibold fixed left-[50%] top-[2%] translate-x-[-50%] ">
              <IoArrowBackOutline />
            </span>
          </Link>
          <span className="text-2xl font-semibold py-8">로그인</span>
          <input className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500" type="text" placeholder="아이디" {...register("userid")} />

          <input className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500" type="password" placeholder="비밀번호" {...register("password")} />

          <div className="w-full h-[50px] flex gap-2 "></div>

          <button className="w-full h-[50px] border text-[17px] rounded-lg flex justify-center items-center font-bold text-center bg-slate-100 cursor-pointer duration-500 hover:bg-slate-300">로그인</button>
          <div className="w-full h-[55px] flex justify-center items-center gap-2">
            <div className="w-1/2 h-full bg-[#FEE500] rounded-lg md:h-[55px] flex justify-around items-center cursor-pointer">
              <img className="w-[50px] h-[100%] cursor-pointer object-contain" src={Kakao} alt="kakao" />
              <Link to={finalUrl} className=" no-underline text-black">
                <p className="flex items-center pt-[11px]">카카오 로그인</p>
              </Link>
              <span className="w-[10%]"></span>
            </div>
            <div className="w-1/2 h-full bg-[#F2F2F2] rounded-lg md:h-[55px] flex justify-around items-center cursor-pointer">
              <img className="w-[50px] h-[100%] cursor-pointer object-contain" src={Google} alt="google" />
              <Link to={googleUrl} className=" no-underline text-black">
                <p className="flex items-center pt-[11px]">구글 로그인</p>
              </Link>
              <span className="w-[10%]"></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
