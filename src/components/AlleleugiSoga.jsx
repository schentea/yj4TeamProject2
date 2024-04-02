export default function AlleleugiSoga() {
    return (
        <div className="w-full  flex justify-center bg-red-300 ">
            {/* 컨테이너 */}
            <div class="container" className="w-full max-w-[1600px] h-full  ">
                {/* 알레르기 메인 타이틀 */}
                <div className=" mt-16 flex justify-center">
                    <h1>알레르기의 위험성</h1>
                </div>
                {/* 이미지 슬라이드 */}
                <div>
                    {/* 첫번쨰 이미지 */}
                    <div className="w-full xl:h-[500px] md:h-[400px] h-[300px] bg-red-100 relative">
                        {/*  */}
                        <div
                            className="
                        bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')] 
                        max-w-[600px] max-h-[350px] w-2/3 h-2/3  bg-cover bg-center absolute top-[15%] left-5  rounded-2xl"
                        ></div>
                    </div>
                    {/* 두번쨰 이미지 */}
                    <div className="w-full xl:h-[500px] md:h-[400px] h-[300px] bg-red-100 relative">
                        {/*  */}
                        <div
                            className="
                        bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')] 
                      max-w-[500px] max-h-[280px] w-1/3 h-2/5 bg-cover bg-center absolute top-[0%] right-5 rounded-2xl"
                        ></div>
                    </div>
                    {/* 세번쨰 이미지 */}
                    <div className="w-full xl:h-[500px]  md:h-[400px] h-[300px] bg-red-100 relative">
                        {/*  */}
                        <div
                            className="
                        bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')] 
                         max-w-[800px] max-h-[450px] w-2/3 h-4/5 bg-cover bg-center absolute top-[0%] xl:right-[23%] right-[15%] rounded-2xl"
                        ></div>
                    </div>
                    {/* 네번쨰 이미지 */}
                    <div className="w-full xl:h-[500px]  md:h-[400px] h-[300px] bg-red-100 relative">
                        {/*  */}
                        <div
                            className="
                        bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')] 
                        max-w-[500px] max-h-[300px] w-1/2 h-1/2 bg-cover bg-center absolute top-[15%] left-9 rounded-2xl"
                        ></div>
                    </div>
                    {/* 다섯번째 이미지 */}
                    <div className="w-full xl:h-[500px] md:h-[400px] h-[300px] bg-red-100 relative">
                        {/*  */}
                        <div
                            className="
                    bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')] 
                    xl:w-[900px] xl:h-[500px] w-1/2 h-1/2 bg-cover bg-center absolute top-[-5%] right-9 rounded-2xl"
                        ></div>
                    </div>
                </div>
                {/* 알레르기에 관련된 이미지 */}
            </div>
        </div>
    );
}
