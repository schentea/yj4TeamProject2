import 'bootstrap/dist/css/bootstrap.min.css';
import Soga from './components/Soga';
import AllimSection from './components/AllimSection';
import Layout from './components/Layout';

function App() {
    return (
        <div>
            <Layout>
                {/* 알레르기의 위험성 */}
                <div className="w-full h-screen bg-[#F0F7FF]"></div>
                {/* 제품소개 및 설명 */}
                <Soga />
                {/* 알림톡 신청 페이지 */}
                <AllimSection />
            </Layout>
        </div>
    );
}
export default App;
