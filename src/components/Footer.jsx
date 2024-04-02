import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { CiYoutube } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full h-[130px] bg-[#aaa] flex justify-center">
            {/* Logo */}
            <div className="w-full max-w-[1200px] h-full p-5">
                <div className="h-full w-full flex justify-between items-center">
                    <div className="flex flex-col text-white font-bold text-[16px]">
                        <h6 className="font-bold">로고</h6>
                        <h6>대구광역시 동구 화랑로 525 </h6>
                        <h6>Copyright ⓒ CcooK.,Ltd All Rights Reserved.</h6>
                    </div>

                    <div className="flex space-x-4 h-full items-center text-white text-[24px]">
                        <p>
                            <Link to="https://www.instagram.com/" className="text-white">
                                <FaInstagram />
                            </Link>
                        </p>
                        <p>
                            {' '}
                            <Link to="https://www.facebook.com/?locale=ko_KR" className="text-white">
                                <FaSquareFacebook />
                            </Link>
                        </p>
                        <p>
                            {' '}
                            <Link to="https://www.youtube.com/" className="text-white">
                                <CiYoutube />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
