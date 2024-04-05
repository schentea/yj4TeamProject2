import { Link } from 'react-router-dom';
import New1 from '../New1.png';
import New2 from '../New2.png';
import nail1 from '../sunmnail1.jpg';
import nail2 from '../sunmnail2.jpg';

export default function Dansurs() {
    return (
        <div className="w-full h-[120vh]  flex flex-col items-center mb-16 bg-[#EFF4F9]">
            {/* 컨테이너 */}
            <div id="container" className="w-full max-w-[1300px] h-full">
                {/* 알레르기 심각성 메인 타이틀 */}
                <div className="mt-[4%] text-center mb-[6%]">
                    <h2 className="font-bold xl:text-[48px] text-[#333C47]">알레르기의 심각성</h2>
                </div>
                {/* 알레르기 심각성 뉴스 그리드 */}
                <div className="w-full h-[77%]    flex justify-center items-center gap-4">
                    {/* 기사 첫번째 공간 */}
                    <div className="xl:w-1/3 w-1/2 h-[100%]  flex flex-col justify-center items-center gap-4">
                        {/* 위쪽 기사 */}
                        <div className="w-full  h-1/2 flex flex-col justify-center items-center ">
                            {/* 제일 큰 틀 */}
                            <div className="w-[80%] relative border-t-4 border-black h-full ">
                                <p className=" absolute -top-8 font-bold">유튜브</p>
                                {/* 이미지 */}
                                <div className="w-full h-2/5 bg-blue-400">
                                    <img src={nail1} alt="img" className="w-full h-full object-cover object-center " />
                                </div>
                                {/* 아래 내용 */}
                                <Link to="https://www.youtube.com/watch?v=9RORKZSqwjs" className="text-black">
                                    <div className=" absolute bottom-0 cursor-pointer duration-300 hover:h-4/6 w-full h-3/5 bg-white p-2 group">
                                        <p className="text-[14px] font-semibold text-[#D39C4F]">알레르기 방지</p>
                                        <h3 className="text-lg font-semibold group-hover:underline">
                                            세살 알레르기 여든까지 간다!
                                        </h3>
                                        <h3 className="text-lg font-semibold group-hover:underline">
                                            아이에게 알레르기가 있다면?
                                        </h3>
                                        <p className="text-[14px] text-gray-500"></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* 아래쪽 기사 */}
                        <div className="w-full  h-1/2 flex flex-col justify-center items-center ">
                            {/* 제일 큰 틀 */}
                            <div className="w-[80%] relative  h-full ">
                                {/* 이미지 */}
                                <div className="w-full h-2/5 bg-blue-400">
                                    <img src={nail2} alt="img" className="w-full h-full object-cover object-center " />
                                </div>
                                {/* 아래 내용 */}
                                <Link to="https://www.youtube.com/watch?v=wKPcG1TiS98" className="text-black">
                                    <div className=" absolute bottom-0 cursor-pointer duration-300 hover:h-4/6 w-full h-3/5 bg-white p-2 group">
                                        <p className="text-[14px] font-semibold text-[#D39C4F]">생활안전</p>
                                        <h3 className="text-lg font-semibold group-hover:underline">
                                            식품 알레르기에 대해 알아야 할 7가지
                                        </h3>
                                        <p className="text-[14px] text-gray-500">
                                            반려견 산책 시 주의해야 할 식물들에 대해 알아보는 시간을 가져보겠습니다.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* 기사 두번쨰 공간 */}
                    <div className="xl:w-1/3 w-1/2 h-[100%] border-x border-gray-300 flex flex-col items-center gap-4">
                        {/* 위쪽 기사 */}
                        <div className="w-full  xl:h-[45%] h-1/2 flex flex-col justify-center items-center ">
                            {/* 제일 큰 틀 */}
                            <div className="w-[80%] relative border-t-4 border-black h-full ">
                                <p className=" absolute -top-8 font-bold">안전</p>
                                {/* 이미지 */}
                                <div className="w-full h-2/5 bg-blue-400">
                                    <img src={New1} alt="img" className="w-full h-full object-cover object-center " />
                                </div>
                                {/* 아래 내용 */}
                                <div className=" absolute bottom-0 cursor-pointer duration-300 hover:h-4/6 w-full h-3/5 bg-white p-2 group">
                                    <p className="text-[14px] font-semibold text-[#D39C4F]">생활안전</p>
                                    <h3 className="text-lg font-semibold group-hover:underline">
                                        가을철 반려견과의 산책 시 조심해야 할 식물 10가지
                                    </h3>
                                    <p className="text-[14px] text-gray-500">
                                        반려견 산책 시 주의해야 할 식물들에 대해 알아보는 시간을 가져보겠습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 아래쪽 기사 */}
                        <div className="w-full  h-1/2 flex flex-col justify-center items-center ">
                            {/* 제일 큰 틀 */}
                            <div className="w-[80%] relative  h-full ">
                                {/* 이미지 */}
                                <div className="w-full h-2/5 bg-blue-400">
                                    <img src={New2} alt="img" className="w-full h-full object-cover object-center " />
                                </div>
                                {/* 아래 내용 */}
                                <div className=" absolute bottom-0 cursor-pointer duration-300 hover:h-4/6 w-full h-3/5 bg-white p-2 group">
                                    <p className="text-[14px] font-semibold text-[#D39C4F]">생활안전</p>
                                    <h3 className="text-lg font-semibold group-hover:underline">
                                        가을철 반려견과의 산책 시 조심해야 할 식물 10가지
                                    </h3>
                                    <p className="text-[14px] text-gray-500">
                                        반려견 산책 시 주의해야 할 식물들에 대해 알아보는 시간을 가져보겠습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 기사 세번쨰 공간 */}
                    <div className="xl:w-1/3 w-1/2 h-[100%] hidden  xl:flex flex-col justify-center items-center gap-4">
                        {/* 위쪽 기사 */}
                        <div className="w-full  h-1/2 flex flex-col justify-center items-center ">
                            {/* 제일 큰 틀 */}
                            <div className="w-[80%] relative border-t-4 border-black h-full ">
                                <p className=" absolute -top-8 font-bold">안전</p>
                                {/* 이미지 */}
                                <div className="w-full h-2/5 ">
                                    <img src={nail1} alt="img" className="w-full h-full object-cover object-center " />
                                </div>
                                {/* 아래 내용 */}
                                <div className=" absolute bottom-0 cursor-pointer duration-300 hover:h-4/6 w-full h-3/5 bg-white p-2 group">
                                    <p className="text-[14px] font-semibold text-[#D39C4F]">생활안전</p>
                                    <h3 className="text-lg font-semibold group-hover:underline">
                                        가을철 반려견과의 산책 시 조심해야 할 식물 10가지
                                    </h3>
                                    <p className="text-[14px] text-gray-500">
                                        반려견 산책 시 주의해야 할 식물들에 대해 알아보는 시간을 가져보겠습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 아래쪽 기사 */}
                        <div className="w-full  h-1/2 flex flex-col justify-center items-center ">
                            {/* 제일 큰 틀 */}
                            <div className="w-[80%] relative  h-full ">
                                {/* 이미지 */}
                                <div className="w-full h-2/5 bg-blue-400">
                                    <img src={nail2} alt="img" className="w-full h-full object-cover object-center " />
                                </div>
                                {/* 아래 내용 */}
                                <div className=" absolute bottom-0 cursor-pointer duration-300 hover:h-4/6 w-full h-3/5 bg-white p-2 group">
                                    <p className="text-[14px] font-semibold text-[#D39C4F]">생활안전</p>
                                    <h3 className="text-lg font-semibold group-hover:underline">
                                        가을철 반려견과의 산책 시 조심해야 할 식물 10가지
                                    </h3>
                                    <p className="text-[14px] text-gray-500">
                                        반려견 산책 시 주의해야 할 식물들에 대해 알아보는 시간을 가져보겠습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
