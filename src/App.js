import 'bootstrap/dist/css/bootstrap.min.css';
import AllimSection from './components/AllimSection';
import Layout from './components/Layout';
import Gravity from './components/Gravity';
import Merit from './components/Merit';

import CommuniCation from './components/CommuniCation';

function App() {
    return (
        <div>
            <Layout>
                {/* 알레르기의 심각성 */}
                <Gravity />
                {/* 우리 회사의 이점 소개 */}
                <Merit />
                {/* 원과 가정의 커뮤니케이션을 위한 키즈케어  */}
                <CommuniCation />
                {/* 사용방법 */}
                <div className="w-full h-full flex justify-center p-4">
                    {/* 컨테이너 */}
                    <div
                        id="container"
                        className="w-full h-screen max-w-[1300px] flex flex-col justify-center items-center"
                    >
                        {/* 사용방법 타이틀 */}
                        <div className="mt-[3%] text-center mb-[6%]">
                            <h2>케어키즈를 사용해보세요!</h2>
                        </div>
                        {/* 방법 과정 */}
                        <div className="w-full h-full">
                            {/* 첫번째 방법 */}
                            <div className="w-full h-1/2 flex">
                                {/* 왼쪽 그림 */}
                                <div className="">zz</div>
                                {/* 오른쪽 텍스트 */}
                                <div></div>
                            </div>
                            {/* 두번째 방법 */}
                            <div className="w-full h-1/2"></div>
                        </div>
                    </div>
                </div>
                {/* 알림톡 신청 페이지 */}
                <AllimSection />
            </Layout>
        </div>
    );
}
export default App;
