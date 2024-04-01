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
                <div
                    class="container"
                    className="w-full max-w-[1400px] h-full  flex justify-center flex-col items-center"
                >
                    {/* 제품소개 및 설명 메인 타이틀 */}
                    <div className=" mt-16">
                        <h1>제품소개 및 설명</h1>
                    </div>
                    {/* 첫번째 소개 및 설명 */}
                    <div className="w-full h-[400px] mt-16 flex justify-center rounded-xl gap-4">
                        {/* 왼쪽 설명  */}
                        <div className="w-[50%] flex rounded-xl bg-gray-400 flex-col items-center justify-center overflow-hidden">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum ... </p>
                        </div>
                        {/* 오른쪽 이미지  */}
                        <div className="w-[50%] rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-[url('https://pixabay.com/get/gf39b171dcbfc47b8b79834f850b9c821369ded5b7e297c5c8f05c9ec0b4a0a257ac176513de2bfc6b31394a50015155b.jpg')] bg-cover bg-center">
                                zz
                            </div>
                        </div>
                    </div>
                    {/* 두번째 소개 및 설명 */}
                    <div className="w-full h-[400px] mt-16 flex justify-center rounded-xl gap-4">
                        {/* 오른쪽 이미지  */}
                        <div className="w-[50%] rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-[url('https://pixabay.com/get/gf39b171dcbfc47b8b79834f850b9c821369ded5b7e297c5c8f05c9ec0b4a0a257ac176513de2bfc6b31394a50015155b.jpg')] bg-cover bg-center">
                                zz
                            </div>
                        </div>
                        {/* 왼쪽 설명  */}
                        <div className="w-[50%] flex rounded-xl bg-gray-400 flex-col items-center justify-center overflow-hidden">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum ... </p>
                        </div>
                    </div>
                    {/* 세번째 소개 및 설명 */}
                    <div className="w-full h-[400px] mt-16 flex justify-center rounded-xl gap-4">
                        {/* 왼쪽 설명  */}
                        <div className="w-[50%] flex rounded-xl bg-gray-400 flex-col items-center justify-center overflow-hidden">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum ... </p>
                        </div>
                        {/* 오른쪽 이미지  */}
                        <div className="w-[50%] rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-[url('https://pixabay.com/get/gf39b171dcbfc47b8b79834f850b9c821369ded5b7e297c5c8f05c9ec0b4a0a257ac176513de2bfc6b31394a50015155b.jpg')] bg-cover bg-center">
                                zz
                            </div>
                        </div>
                    </div>
                    {/* 네번째 소개 및 설명 */}
                    <div className="w-full h-[400px] mt-16 flex justify-center rounded-xl gap-4">
                        {/* 오른쪽 이미지  */}
                        <div className="w-[50%] rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-[url('https://pixabay.com/get/gf39b171dcbfc47b8b79834f850b9c821369ded5b7e297c5c8f05c9ec0b4a0a257ac176513de2bfc6b31394a50015155b.jpg')] bg-cover bg-center">
                                zz
                            </div>
                        </div>
                        {/* 왼쪽 설명  */}
                        <div className="w-[50%] flex rounded-xl bg-gray-400 flex-col items-center justify-center overflow-hidden">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum ... </p>
                        </div>
                    </div>

                    {/* 알레르기에 관련된 이미지 */}
                    <div></div>
                </div>
            </div>
            {/* 버튼을 누를수있는 페이지 */}
            <div className="w-full h-screen relative bg-cover bg-center flex justify-center items-center bg-[url('https://pixabay.com/get/gf39b171dcbfc47b8b79834f850b9c821369ded5b7e297c5c8f05c9ec0b4a0a257ac176513de2bfc6b31394a50015155b.jpg')] mt-16">
                <Button className="w-[20%] absolute bottom-36" variant="success">
                    Success
                </Button>
            </div>
            {/* 푸터 */}
            <div className="w-full h-32 bg-black">푸터</div>
        </div>
    );
}
export default App;
