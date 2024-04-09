import { apiAlimtalk } from '../Api';
import '../Button.scss';
import useUser from './useUser';
export default function AllimSection() {
    const userData = useUser();

    const onClick = async () => {
        // 비동기 함수로 변경합니다.
        try {
            if (!userData || !userData.user) {
                console.error('사용자 데이터가 없습니다.');
                return;
            }

            const name = userData.user.username;
            const tel = userData.user.tel;
            console.log(name);

            // 데이터를 API로 보냅니다.
            const response = await apiAlimtalk({ username: name, tel: tel }); // username을 데이터로 전달합니다.

            // 응답을 확인하고 필요한 작업을 수행합니다.
            if (response.ok) {
                console.log('API 호출이 성공했습니다.');
                // 성공했을 때의 처리를 여기에 추가합니다.
            } else {
                console.log('API 호출이 실패했습니다.');
                // 실패했을 때의 처리를 여기에 추가합니다.
            }
        } catch (error) {
            console.error('API 호출 중 오류가 발생했습니다.', error);
            // 오류가 발생했을 때의 처리를 여기에 추가합니다.
        }
    };
    return (
        <div id="section2" className="w-full h-screen relative flex justify-center bg-[#E6F3FE] items-center pt-16">
            {/* 공간 총괄 */}
            <div id="container" className="w-full h-full max-w-[1300px] flex justify-center items-center z-1">
                {/* 왼쪽 공간 */}
                <div className="md:w-1/2 w-full h-1/2 flex flex-col p-8 gap-3 items-center md:items-start ">
                    <h5 className="font-semibold">알레르기로 인해 고민이신가요?</h5>
                    <div>
                        <h3 id="h31" className="xl:text-[45px] text-4xl font-bold ">
                            <span className="text-[#208DF9] ">케어키즈</span>로 스마트한
                        </h3>
                        <h3 id="h31" className="xl:text-[45px] lg:text-4xl text-2xl font-bold">
                            급식 관리를 시작해 보세요!
                        </h3>
                    </div>
                    <p className="text-[#666]">학부모 소통, 급식 관리까지 효율적으로 관리할 수 있어요. </p>
                    <button class="btn btn-primary btn-jelly" onClick={onClick}>
                        신청하기
                    </button>
                </div>
                {/* 오른쪽 공간 */}
                <div className="w-1/2 h-1/2 hidden md:flex">
                    {/* 이미지 */}
                    <div className="w-full h-full md:flex justify-center items-center hidden">
                        <div className="w-[50%] h-[50%]">
                            <img alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute w-full h-[330px] bottom-0  bg-[url('https://mk.kakaocdn.net/dn/kidsnote/web/kn-www/_next/static/media/classnote_bottom@2x.59b9b385.png')]"></div>
        </div>
    );
}
