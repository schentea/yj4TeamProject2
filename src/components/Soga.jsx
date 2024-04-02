export default function Soga() {
    return (
        <div className="w-full flex justify-center ">
            {/* 컨테이너 */}
            <div id="container" className="w-full max-w-[1600px] h-full mt-16">
                {/* 플렉스 박스 */}
                <div className="w-full h-full xl:flex justify-center overflow-x-auto">
                    {/* 왼쪽 공간 */}
                    <div className="xl:w-1/3 w-full h-[150px] flex justify-center">제품 소개 및 설명</div>
                    {/* 오른쪽 공간 */}
                    <div className="xl:w-2/3 w-[100%] h-2/3 overflow-y-auto">
                        {/* 지그재그! */}
                        <ul className="w-full h-full xl:block flex gap-10">
                            {/* 첫번쨰 이미지 */}
                            <li className=" xl:overflow-hidden">
                                {/* 통괄 */}
                                <div className="xl:w-1/2 w-[252px] h-[406px] xl:float-right  rounded-xl overflow-hidden">
                                    {/* 이미지 */}
                                    <div className="w-full h-3/4">
                                        <img
                                            className="w-full h-full object-cover rounded-xl"
                                            src="https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg"
                                            alt=""
                                        />
                                    </div>
                                    {/* 소개글 */}
                                    <div className="text-center font-bold mt-3">기업 소개</div>
                                </div>
                            </li>
                            {/* 두번쨰 이미지 */}
                            <li>
                                {/* 통괄 */}
                                <div className="xl:w-1/2 w-[252px] h-[406px]  rounded-xl overflow-hidden">
                                    {/* 이미지 */}
                                    <div className="w-full h-3/4">
                                        <img
                                            className="w-full h-full object-cover rounded-xl"
                                            src="https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg"
                                            alt=""
                                        />
                                    </div>
                                    {/* 소개글 */}
                                    <div className="text-center font-bold mt-3">기업 소개</div>
                                </div>
                            </li>
                            {/* 세번쨰 이미지 */}
                            <li className=" xl:overflow-hidden">
                                {/* 통괄 */}
                                <div className="xl:w-1/2 w-[252px] h-[406px] xl:float-right  rounded-xl overflow-hidden">
                                    {/* 이미지 */}
                                    <div className="w-full h-3/4">
                                        <img
                                            className="w-full h-full object-cover rounded-xl"
                                            src="https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg"
                                            alt=""
                                        />
                                    </div>
                                    {/* 소개글 */}
                                    <div className="text-center font-bold mt-3">기업 소개</div>
                                </div>
                            </li>
                            {/* 네번쨰 이미지 */}
                            <li className=" xl:overflow-hidden">
                                {/* 통괄 */}
                                <div className="xl:w-1/2 w-[252px] h-[406px] rounded-xl overflow-hidden">
                                    {/* 이미지 */}
                                    <div className="w-full h-3/4">
                                        <img
                                            className="w-full h-full object-cover rounded-xl"
                                            src="https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg"
                                            alt=""
                                        />
                                    </div>
                                    {/* 소개글 */}
                                    <div className="text-center font-bold mt-3">기업 소개</div>
                                </div>
                            </li>
                            {/* 다섯번쨰 이미지 */}
                            <li className=" xl:overflow-hidden">
                                {/* 통괄 */}
                                <div className="xl:w-1/2 w-[252px] h-[406px] xl:float-right rounded-xl overflow-hidden">
                                    {/* 이미지 */}
                                    <div className="w-full h-3/4">
                                        <img
                                            className="w-full h-full object-cover rounded-xl"
                                            src="https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg"
                                            alt=""
                                        />
                                    </div>
                                    {/* 소개글 */}
                                    <div className="text-center font-bold mt-3">기업 소개</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
