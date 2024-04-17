import React, { useState } from 'react';
import ModalComponent from './SignupModal';
import Kakao from '../img/kakaoLogo.png';
import Google from '../img/googleLogo.svg';
import Push from '../img/push.jpg';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { apiPostUserRegister, getSchoolInfo } from '../Api';
import AllergyModalComponent from './SignupAllergy';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { IoArrowBackOutline } from 'react-icons/io5';

export default function SignupForm() {
    const navigate = useNavigate();
    const kakaoUrl = 'https://kauth.kakao.com/oauth/authorize';
    const config = {
        response_type: 'code',
        client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    };

    const params = new URLSearchParams(config).toString();
    const finalUrl = `${kakaoUrl}?${params}`;
    const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
    const [isAllergyModalOpen, setIsAllergyModalOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [allergy, setAllergy] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password2Visible, setPassword2Visible] = useState(false);
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
        console.log('지역', city);
        setIsSelected(false);
        const updatedState = {};
        Object.keys(isChecked).forEach((key) => {
            updatedState[key] = key === city;
        });
        setIsChecked(updatedState);
    };
    const handleCheckChange = (allergy) => {
        console.log(allergy);
        setAllergy(false);
        setIsAllergyChecked({
            ...isAllergyChecked,
            [allergy]: !isAllergyChecked[allergy],
        });
    };

    //비밀번호 아이콘 토글
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const togglePassword2Visibility = () => {
        setPassword2Visible(!password2Visible);
    };

    const { mutate } = useMutation(apiPostUserRegister, {
        onSuccess: (data) => {
            if (data.result === true) {
                navigate('/login');
            }
        },
        onSettled: (data) => {
            console.log(data);
            if (data?.result === false)
                setError('userid', {
                    message: data.message,
                });
            setError('email', {
                message: data.emailMessage,
            });
        },
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const onValid = async (data) => {
        if (!Object.values(isChecked).includes(true)) {
            setIsSelected(true);
            alert('지역을 선택해주세요.');
            return; // 지역 선택이 필요
        }
        if (!Object.values(isAllergyChecked).includes(true)) {
            setAllergy(true);
            alert('알레르기 항목을 선택해주세요.');
            return; // 알레르기 선택이 필요
        }

        try {
            const schoolInfo = await getSchoolInfo(selectedRegion, data.schoolNM);
            if (!schoolInfo) {
                setError('schoolNM', {
                    message: '입력한 학교명을 찾을 수 없습니다.',
                });
                return;
            }

            // API 호출
            mutate({
                data,
                selectedRegion,
                selectedAllergies: Object.keys(isAllergyChecked).filter((key) => isAllergyChecked[key]),
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div id="form" className="w-full h-screen flex  justify-center items-center p-4">
            {/* 중앙 정렬 한 박스 */}
            <div
                className="w-full max-w-5xl h-[850px] flex rounded-lg overflow-hidden "
                style={{
                    background: '#7FC9EF',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
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
                        <span className=" text-white w-full text-left pl-4 text-3xl font-semibold absolute left-[50%] top-[2%] translate-x-[-50%] ">
                            <IoArrowBackOutline />
                        </span>
                    </Link>
                </div>
                {/* 오른쪽 로그인 박스 */}
                <form
                    className="md:w-1/2 w-full h-full px-10  flex flex-col gap-6 items-center "
                    onSubmit={handleSubmit(onValid)}
                >
                    <Link to="/">
                        <span className="  block md:hidden text-black w-full text-left pl-4 text-3xl font-semibold fixed left-[50%] top-[2%] translate-x-[-50%] ">
                            <IoArrowBackOutline />
                        </span>
                    </Link>
                    <span className="text-2xl font-semibold py-4 h-4">회원가입</span>
                    <div className="w-full h-[50px] relative">
                        <input
                            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                            type="text"
                            placeholder="아이디"
                            {...register('userid', {
                                required: '아이디는 필수 입력사항입니다',
                                minLength: {
                                    value: 2,
                                    message: '아이디는 최소 2글자 이상이어야 합니다.',
                                },
                            })}
                        />
                        {errors && (
                            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                                {errors?.userid?.message}
                            </span>
                        )}
                    </div>
                    <div className="w-full h-[50px] relative">
                        <input
                            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                            type="text"
                            placeholder="이름"
                            {...register('username', {
                                required: '이름은 필수 입력사항입니다',
                                minLength: {
                                    value: 2,
                                    message: '이름은 최소 2글자 이상이어야 합니다.',
                                },
                            })}
                        />
                        {errors && (
                            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                                {errors?.username?.message}
                            </span>
                        )}
                    </div>
                    <div className="w-full h-[50px] relative">
                        <input
                            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                            type="email"
                            placeholder="이메일"
                            {...register('email', {
                                required: '이메일은 필수 입력사항입니다',
                                pattern: {
                                    value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                                    message: '이메일 형식을 지켜주세요',
                                },
                            })}
                        />
                        {errors && (
                            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                                {errors?.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="w-full h-[50px] relative">
                        <input
                            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="비밀번호"
                            {...register('password', {
                                required: '비밀번호는 필수 입력 사항입니다.',
                                minLength: {
                                    value: 4,
                                    message: '비밀번호는 최소 4자 이상이어야 합니다.',
                                },
                            })}
                        />
                        {errors && (
                            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                                {errors?.password?.message}
                            </span>
                        )}
                        <div onClick={togglePasswordVisibility} className="absolute top-4 right-4 cursor-pointer">
                            {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </div>
                    </div>
                    <div className="w-full h-[50px] relative">
                        <input
                            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                            type={password2Visible ? 'text' : 'password'}
                            placeholder="비밀번호 확인"
                            {...register('password2', {
                                required: '비밀번호 확인은 필수 입력사항입니다.',
                                validate: (value, form) => {
                                    return value === form.password || '비밀번호가 일치하지 않습니다.';
                                },
                            })}
                        />
                        {errors && (
                            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                                {errors?.password2?.message}
                            </span>
                        )}
                        <div onClick={togglePassword2Visibility} className="absolute top-4 right-4 cursor-pointer">
                            {password2Visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </div>
                    </div>
                    <div className="w-full h-[50px] relative">
                        <input
                            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                            type="text"
                            placeholder="전화번호"
                            {...register('tel', {
                                required: '전화번호는 필수 입력 사항입니다.',
                                pattern: {
                                    value: /^\d{11}$/, // 숫자 11자리 패턴
                                    message: "전화번호는'-'을 제외한 11자리의 숫자로 입력해주세요.",
                                },
                            })}
                        />
                        {errors && (
                            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                                {errors?.tel?.message}
                            </span>
                        )}
                    </div>
                    <div className="w-full h-[50px] flex gap-2 ">
                        <div
                            onClick={() => setIsRegionModalOpen(true)}
                            className={`w-1/2 h-full border text-[13px] rounded-lg flex justify-center items-center font-semibold text-center bg-slate-100 cursor-pointer duration-500  hover:bg-slate-300 ${
                                isSelected ? 'text-red-500' : 'text-black'
                            }`}
                        >
                            {isSelected ? '지역을 선택해주세요' : '지역을 선택해주세요'}
                        </div>
                        <div
                            onClick={() => setIsAllergyModalOpen(true)}
                            className={`w-1/2 h-full border text-[13px] rounded-lg flex justify-center items-center font-semibold text-center bg-slate-100 cursor-pointer duration-500 hover:bg-slate-300 ${
                                allergy ? 'text-red-500' : 'text-black'
                            } `}
                        >
                            알레르기 식품을 선택해주세요
                        </div>
                    </div>
                    <div className="w-full h-[50px] relative">
                        <input
                            className="w-full h-[50px] text-[14px] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500"
                            type="text"
                            placeholder="학교명"
                            {...register('schoolNM', {
                                required: '학교명은 필수 입력 사항입니다.',
                            })}
                        />
                        {errors.schoolNM && (
                            <span className=" absolute -bottom-5 left-0 text-red-500 text-sm">
                                {errors?.schoolNM?.message}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            if (!Object.values(isChecked).includes(true)) {
                                setIsSelected(true);
                            }
                            if (!Object.values(isAllergyChecked).includes(true)) {
                                setAllergy(true);
                            }
                        }}
                        className="w-full h-[50px] border text-[17px] rounded-lg flex justify-center items-center font-bold text-center bg-slate-100 cursor-pointer duration-500 hover:bg-slate-300"
                    >
                        회원가입
                    </button>
                    <div className="w-full h-[55px] flex justify-center items-center gap-2">
                        <div className="w-1/2 h-full bg-[#FEE500] rounded-lg md:h-[55px] flex justify-around items-center cursor-pointer">
                            <img className="w-[50px] h-[100%] cursor-pointer object-contain" src={Kakao} alt="kakao" />
                            <Link to={finalUrl}>
                                <p className="flex items-center pt-[11px]">카카오 로그인</p>
                            </Link>
                            <span className="w-[10%]"></span>
                        </div>
                        <div className="w-1/2 h-full bg-[#F2F2F2] rounded-lg md:h-[55px] flex justify-around items-center cursor-pointer">
                            <img
                                className="w-[50px] h-[100%] cursor-pointer object-contain"
                                src={Google}
                                alt="google"
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
