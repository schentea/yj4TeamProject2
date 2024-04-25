import React from 'react';
import { FaInstagram, FaFacebookSquare, FaBlogger } from 'react-icons/fa';
import { SiKakaotalk } from 'react-icons/si';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg'; // 로고 이미지 경로는 실제 경로에 맞게 조정해야 합니다.

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100">
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* 로고와 주소 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <img className="w-48 mb-4" src={logo} alt="Kidsnote" />
                        <address className="text-sm">(주)케어키즈 | 대구광역시 동구 108, 5층 케어키즈</address>
                        <p className="text-sm">이용약관 | 개인정보처리방침 | 위치기반서비스이용약관 | 원격지원</p>
                        <p className="text-sm">사업자번호: 108-86-00000 | 대표이사: 최현기</p>
                        <p className="text-sm">고객센터: 1644-1122 (평일 09:00 ~ 18:00)</p>
                        <p className="text-sm">이메일: dltmdals7295@carekids.com</p>
                        <p className="text-sm">케어키즈 사용자 가이드</p>
                    </div>

                    {/* 소셜 미디어 아이콘 */}

                    <div className="flex items-center mt-4 md:mt-0">
                        <Link to="https://www.instagram.com/" className="mr-4 text-gray-600 hover:text-gray-900">
                            {' '}
                            {/* 실제 링크로 교체 필요 */}
                            <FaInstagram className="text-3xl" />
                        </Link>
                        <Link
                            to="https://www.facebook.com/?locale=ko_KR"
                            className="mr-4 text-gray-600 hover:text-gray-900"
                        >
                            {' '}
                            {/* 실제 링크로 교체 필요 */}
                            <FaFacebookSquare className="text-3xl" />
                        </Link>
                        <Link
                            to="https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0"
                            className="mr-4 text-gray-600 hover:text-gray-900"
                        >
                            {' '}
                            {/* 실제 링크로 교체 필요 */}
                            <FaBlogger className="text-3xl" />
                        </Link>
                        <Link
                            to="https://www.kakaocorp.com/page/service/service/KakaoPage']"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            {' '}
                            {/* 실제 링크로 교체 필요 */}
                            <SiKakaotalk className="text-3xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
