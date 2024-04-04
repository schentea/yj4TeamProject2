export default function Gravity() {
    return (
        <div className="w-full xl:h-screen bg-[#F0F7FF] flex flex-col items-center">
            {/* 컨테이너 */}
            <div id="container" className="w-full max-w-[1300px] h-full">
                {/* 알레르기 심각성 메인 타이틀 */}
                <div>
                    <h2 className="text-center mt-[10%] text-4xl font-bold">알레르기의 심각성</h2>
                </div>
                {/* 알레르기 심각성 뉴스 그리드 */}
                <div className="flex flex-col xl:flex-row mt-16 xl:h-screen h-[1000px] justify-center items-center ">
                    {/* 왼쪽 그리드 */}
                    <div className="xl:w-2/3 w-1/2 h-1/3 xl:h-full flex">
                        <div className="w-[100%] xl:h-[67%] h-[100%]  flex justify-center items-center ">
                            <div className="w-[90%] h-[95%] bg-blue-200 rounded-2xl overflow-hidden">
                                {/* 위쪽 이미지 */}
                                <div className="w-full h-2/3 bg-red-200"></div>
                                {/* 아래 텍스트 */}
                                <div className="w-full h-1/3 bg-blue-300"></div>
                            </div>
                        </div>
                    </div>
                    {/* 오른쪽 그리드 */}
                    <div className="xl:w-1/3 w-1/2 h-2/3 xl:h-full flex flex-col ">
                        <div className="w-full xl:h-1/3 h-full  flex justify-center items-center">
                            <div className="w-[90%] h-[90%] bg-red-200 rounded-2xl overflow-hidden">
                                {/* 위쪽 이미지 */}
                                <div className="w-full h-2/3 bg-red-200"></div>
                                {/* 아래 텍스트 */}
                                <div className="w-full h-1/3 bg-blue-300"></div>
                            </div>
                        </div>
                        <div className="w-full xl:h-1/3 h-full flex justify-center items-center">
                            <div className="w-[90%] h-[90%] bg-red-200 rounded-2xl overflow-hidden">
                                {/* 위쪽 이미지 */}
                                <div className="w-full h-2/3 bg-red-200"></div>
                                {/* 아래 텍스트 */}
                                <div className="w-full h-1/3 bg-blue-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
