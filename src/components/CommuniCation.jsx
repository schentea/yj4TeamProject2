import { FaUser } from 'react-icons/fa6';
import { HiDesktopComputer } from 'react-icons/hi';
import { FaMobile } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';
import { PiHandshakeBold } from 'react-icons/pi';

export default function CommuniCation() {
    return (
        <div className="w-full h-full flex justify-center p-4">
            {/* 컨테이너 */}
            <div id="container" className="w-full h-screen max-w-[1300px] flex flex-col justify-center items-center">
                {/* 커뮤니케이션 타이틀 */}
                <div className="mt-[3%] text-center mb-[6%]">
                    <h2>원과 가정의 커뮤니케이션을 위한</h2>
                    <h2>최적의 솔류션, 키즈케어!</h2>
                </div>
                {/* 아래 그리드 */}
                <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                    {/* 위쪽 그리드 */}
                    <div className="flex md:flex-row flex-col w-full h-1/2 items-center  gap-4">
                        <div className="w-1/2 h-full relative bg-slate-500 rounded-2xl p-3">
                            <h3>누구나</h3>
                            <h3>무료로 사용가능</h3>
                            <FaUser className=" absolute bottom-3 right-3 text-6xl" />
                        </div>
                        <div className="w-1/2 h-full bg-slate-200 rounded-2xl">
                            <div className="w-full h-full relative bg-slate-500 rounded-2xl p-3">
                                <h3>PC,모바일</h3>
                                <h3>어디서든 간편하게</h3>
                                <div className=" absolute bottom-3 right-3 text-6xl flex">
                                    <HiDesktopComputer />
                                    <FaMobile />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 아래쪽 그리드 */}
                    <div className="flex md:flex-row flex-col w-full h-1/2 items-center  gap-4">
                        <div className="w-1/2 h-full bg-slate-400 rounded-2xl">
                            {' '}
                            <div className="w-full h-full relative bg-slate-500 rounded-2xl p-3">
                                <h3>케어키즈와 가정을</h3>
                                <h3>잇는 바른소통</h3>
                                <div className=" absolute bottom-3 right-3 text-6xl flex">
                                    <MdMessage />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-full bg-slate-300 rounded-2xl">
                            {' '}
                            <div className="w-full h-full relative bg-slate-500 rounded-2xl p-3">
                                <h3>교육부와 함께하는</h3>
                                <h3>안전성있는 서비스를</h3>
                                <h3>제공합니다</h3>
                                <div className=" absolute bottom-3 right-3 text-6xl flex">
                                    <PiHandshakeBold />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
