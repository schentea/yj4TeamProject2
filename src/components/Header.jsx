import React from 'react';
import { IoClose } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const openButton = () => {
        setMobileOpen(true);
    };
    const closeButton = () => {
        setMobileOpen(false);
    };

    return (
        <>
            {' '}
            <header className="w-full h-[80px] bg-[#aaa] flex justify-center">
                {/* Logo */}
                <div className="w-full max-w-[1600px] h-full p-5">
                    <div className="h-full w-full flex justify-between items-center">
                        <Link to="/" className=" no-underline">
                            <div className="flex items-center text-white font-bold text-[30px]">Logo</div>
                        </Link>
                        <div className="w-[50%] h-[200%] items-center justify-center  hidden lg:flex">
                            <ul className="flex gap-5">
                                <li className="text-white font-semibold">메뉴</li>
                                <li className="text-white font-semibold">메뉴</li>
                                <li className="text-white font-semibold">메뉴</li>
                                <li className="text-white font-semibold">메뉴</li>
                            </ul>
                        </div>
                        <div
                            id="Hidden_div"
                            className=" space-x-4 h-full items-center text-white font-bold text-[20px] hidden xl:flex "
                        >
                            <p>로그인</p>
                            <p>회원가입</p>
                        </div>
                        <button
                            id="main_button"
                            onClick={openButton}
                            className="text-white text-[30px] cursor-pointer xl:hidden"
                        >
                            <GiHamburgerMenu />
                        </button>
                        <AnimatePresence>
                            {mobileOpen && (
                                <motion.div
                                    initial={{ x: '100vw' }}
                                    animate={{ x: '0' }}
                                    exit={{ x: '100vw' }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="fixed top-0 right-0 bottom-0 w-1/2 z-30 h-full bg-[rgba(255,255,255,0.9)] p-5 font-bold text-[18px]"
                                >
                                    <motion.div
                                        onClick={closeButton}
                                        className=" cursor-pointer text-[30px] flex justify-end"
                                    >
                                        <IoClose />
                                    </motion.div>
                                    <Link to="/" className="text-black no-underline">
                                        <p className=" cursor-pointer">메뉴</p>
                                    </Link>
                                    <Link to="/" className="text-black no-underline">
                                        <p className=" cursor-pointer">메뉴</p>
                                    </Link>
                                    <Link to="/" className="text-black no-underline">
                                        <p className=" cursor-pointer">메뉴</p>
                                    </Link>
                                    <Link to="/" className="text-black no-underline">
                                        <p className=" cursor-pointer">고객센터 </p>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>
            <div className="w-full h-screen bg-cover relative bg-center flex justify-center items-center bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')]">
                {/* 나브 */}
            </div>
        </>
    );
}
