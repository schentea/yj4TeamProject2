import 'bootstrap/dist/css/bootstrap.min.css';
import AllimSection from './components/AllimSection';
import Layout from './components/Layout';
import Gravity from './components/Gravity';
import Merit from './components/Merit';
import { FaUser } from 'react-icons/fa6';
import { HiDesktopComputer } from 'react-icons/hi';
import { FaMobile } from 'react-icons/fa6';
import { MdMessage } from 'react-icons/md';
import { PiHandshakeBold } from 'react-icons/pi';

function App() {
    return (
        <div>
            <Layout>
                {/* 알레르기의 심각성 */}
                <Gravity />
                {/* 우리 회사의 이점 소개 */}
                <Merit />
                {/* 원과 가정의 커뮤니케이션을 위한 키즈케어  */}
                <div className="w-full h-full flex justify-center p-4">
                    {/* 컨테이너 */}
                    <div
                        id="container"
                        className="w-full h-screen max-w-[1300px] flex flex-col justify-center items-center"
                    >
                        {/* 커뮤니케이션 타이틀 */}
                        <div className="mt-[3%] text-center mb-[6%]">
                            <h2>원과 가정의 커뮤니케이션을 위한</h2>
                            <h2>최적의 솔류션, 키즈케어!</h2>
                        </div>
                        {/* 아래 그리드 */}
                        <div className="w-full h-full  flex flex-col justify-center items-center gap-4">
                            {/* 위쪽 그리드 */}
                            <div className="flex w-full h-1/2  gap-4">
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
                            <div className="flex w-full h-1/2  gap-4">
                                <div className="w-1/2 h-full bg-slate-400 rounded-2xl">3</div>
                                <div className="w-1/2 h-full bg-slate-300 rounded-2xl">4</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 사용방법 */}

                {/* 알림톡 신청 페이지 */}
                <AllimSection />
            </Layout>
        </div>
    );
}
export default App;
