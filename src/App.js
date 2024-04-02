import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlleleugiSoga from './components/AlleleugiSoga';
import Soga from './components/Soga';
import AllimSection from './components/AllimSection';
function App() {
    return (
        <div>
            {/* 헤더 */}
            <Header />
            {/* 알레르기의 위험성 */}
            <AlleleugiSoga />
            {/* 제품소개 및 설명 */}
            <Soga />
            {/* 알림톡 신청 페이지 */}
            <AllimSection />
            {/* 푸터 */}
            <div className="w-full h-32 bg-black">푸터</div>
        </div>
    );
}
export default App;
