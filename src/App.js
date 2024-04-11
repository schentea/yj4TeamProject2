import "bootstrap/dist/css/bootstrap.min.css";
import AllimSection from "./components/AllimSection";
import Layout from "./components/Layout";
import Merit from "./components/Merit";
import CommuniCation from "./components/CommuniCation";
import MethodUse from "./components/MethodUse";
import Dansurs from "./components/Dansurs";
import TopButton from "./components/TopButton";
import MealCalendar from "./components/Calendar";

function App() {
  return (
    <div>
      <Layout>
        {/* 원과 가정의 커뮤니케이션을 위한 키즈케어  */}
        <CommuniCation />
        {/* 우리 회사의 이점 소개 */}
        <Merit />
        {/* 알레르기의 심각성 */}
        <Dansurs />
        {/* 사용방법 */}
        <MethodUse />
        {/* 알림톡 신청 페이지 */}
        <AllimSection />
        {/* 탑버튼 */}
        <TopButton />
      </Layout>
    </div>
  );
}
export default App;
