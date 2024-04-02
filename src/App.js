import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlleleugiSoga from './components/AlleleugiSoga';
function App() {
    return (
        <div>
            {/* 헤더 */}
            <Header />
            {/* 알레르기의 위험성 */}
            <AlleleugiSoga />
            {/* 제품소개 및 설명 */}
            <div className="w-full flex justify-center ">
                {/* 컨테이너 */}
                <div id="container" className="w-full max-w-[1600px] h-full">
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
                                    <div className="xl:w-1/2 w-[252px] h-[306px] xl:float-right bg-red-500 rounded-xl">
                                        {/* 이미지 */}
                                        <div>
                                            <img
                                                src="https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg"
                                                alt=""
                                            />
                                        </div>
                                        {/* 소개글 */}
                                        <div>z</div>
                                    </div>
                                </li>
                                {/* 두번쨰 이미지 */}
                                <li>
                                    <div className="xl:w-1/2 w-[500px] h-[400px] bg-red-500 rounded-xl">zz</div>
                                </li>
                                {/* 세번쨰 이미지 */}
                                <li className=" xl:overflow-hidden">
                                    <div className="xl:w-1/2 w-[500px] h-[400px] xl:float-right bg-red-500 rounded-xl">
                                        zz
                                    </div>
                                </li>
                                {/* 네번쨰 이미지 */}
                                <li>
                                    <div className="xl:w-1/2 w-[500px] h-[400px] bg-red-500 rounded-xl">zz</div>
                                </li>
                                {/* 다섯번쨰 이미지 */}
                                <li className=" xl:overflow-hidden">
                                    <div className="xl:w-1/2 w-[500px] h-[400px] xl:float-right bg-red-500 rounded-xl">
                                        zz
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* 버튼을 누를수있는 페이지 */}
            {/* <div className="w-full h-screen relative bg-cover bg-center flex justify-center items-center bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')] mt-16">
                <Button className="w-[20%] absolute bottom-36" variant="success">
                    Success
                </Button>
            </div> */}
            {/* 푸터 */}
            <div className="w-full h-32 bg-black">푸터</div>
        </div>
    );
}
export default App;
