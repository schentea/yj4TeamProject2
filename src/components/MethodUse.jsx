import cen1 from '../img/cen1.jpg';
import cen2 from '../img/cen2.jpg';

export default function MethodUse() {
    return (
        <div id="methode" className="w-full h-full flex justify-center p-4">
            {/* 컨테이너 */}
            <div
                id="container"
                className="w-full h-full max-w-[1300px] flex flex-col justify-center items-center pb-32"
            >
                {/* 사용방법 타이틀 */}
                <div className="mt-[4%] text-center mb-[6%]">
                    <h2 className="font-bold xl:text-[48px] text-[#333C47]">케어키즈를 사용해보세요!</h2>
                </div>
                {/* 방법 과정 */}
                <div className="w-full h-full">
                    {/* 첫번째 방법 */}
                    <div className=" w-full h-1/2 flex flex-col gap-4">
                        {/* 위쪽 STEP.1 */}
                        <div>
                            <h4 className="text-[#518CFF] font-semibold">SOLUTION.1</h4>
                        </div>
                        {/* 오른쪽 텍스트 */}
                        <div className="">
                            <div className="flex flex-col justify-center items-center md:items-start">
                                <h3 className=" text-4xl font-bold ">회원가입을 클릭후</h3>
                                <h3 className=" text-4xl font-bold ">정보를 입력하고 신청해주세요!</h3>
                            </div>
                        </div>
                        {/* 아래쪽 그림 */}
                        <div className="w-full h-[550px]  flex justify-center items-center">
                            <div className="w-[100%] h-[100%] bg-slate-500 rounded-xl overflow-hidden">
                                <img src={cen1} alt="" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                    {/* 두번째 방법 */}
                    <div className=" w-full h-1/2 flex flex-col gap-4 mt-48">
                        {/* 위쪽 STEP.2 */}
                        <div>
                            <h4 className="text-[#518CFF] font-semibold">SOLUTION.2</h4>
                        </div>
                        {/* 오른쪽 텍스트 */}
                        <div className="">
                            <div className="flex flex-col justify-center items-center md:items-start">
                                <h3 className=" text-4xl font-bold ">마이페이지에서 언제든지</h3>
                                <h3 className=" text-4xl font-bold ">정보 수정이 가능합니다</h3>
                            </div>
                        </div>
                        {/* 아래쪽 그림 */}
                        <div className="w-full h-[550px]  flex justify-center items-center">
                            <div className="w-[100%] h-[100%] bg-slate-500 rounded-xl overflow-hidden">
                                <img src={cen2} alt="" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
