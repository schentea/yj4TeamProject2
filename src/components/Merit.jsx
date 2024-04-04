export default function Merit() {
    return (
        <div className="w-full h-screen flex justify-center">
            {/* 컨테이너 */}
            <div id="container" className="w-full h-full max-w-[1600px] p-4">
                {/* 통괄 */}
                <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center">
                    {/* 왼쪽 소개글 */}
                    <div className="xl:w-2/3 w-full xl:h-full flex flex-col xl:items-start items-center justify-center gap-4">
                        <div className="flex flex-col gap-6 m-[3%]">
                            <h2>우리 기업은 이러이러한 기술을</h2>
                            <h2 className="px-6">사용하여 알레르기 유발을 방지합니다.</h2>
                        </div>
                    </div>
                    {/* 오른쪽 이미지 */}
                    <div className="xl:w-1/3 w-1/2 h-[50%] xl:h-[70%] bg-red-400 rounded-2xl">
                        <div>zz</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
