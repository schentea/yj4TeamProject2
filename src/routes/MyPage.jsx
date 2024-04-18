import { useEffect, useState } from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import useUser from "../components/useUser";
import { apiPostProfileEdit, apiPostAllergiesEdit, apiPostDefaultInfoEdit, apiPostRegionSchoolEdit, getSchoolInfo } from "../Api";

export default function MyPage() {
  const userData = useUser();
  const userid = userData?.user?.userid;
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [tel, setTel] = useState("");
  const [errorMessages, setErrorMessages] = useState({ password: "", tel: "" });
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [formError, setFormError] = useState("");
  const initialAllergiesState = {
    달걀: false,
    우유: false,
    메밀: false,
    땅콩: false,
    대두: false,
    밀: false,
    고등어: false,
    게: false,
    새우: false,
    돼지고기: false,
    복숭아: false,
    토마토: false,
    아황산: false,
    호두: false,
    닭고기: false,
    쇠고기: false,
    오징어: false,
    조개류: false,
    잣: false,
  };

  const [allergies, setAllergies] = useState(initialAllergiesState);

  const toggleAllergy = (allergy) => {
    setAllergies((prevAllergies) => ({
      ...prevAllergies,
      [allergy]: !prevAllergies[allergy],
    }));
  };

  const toggleRegion = (region) => {
    setSelectedRegion(region === selectedRegion ? "" : region);
  };

  // const handleSelect = () => {
  //   // 선택된 지역을 활용하여 필요한 작업 수행
  //   console.log("선택된 지역:", selectedRegion);
  // };

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = async () => {
    setIsModalOpen(false); // 모달 닫기
    if (profileFile) {
      console.log("전송할 파일:", profileFile); // 파일 정보 확인 로그
      try {
        const result = await apiPostProfileEdit({ profileFile, userid }); // 이미지 파일을 서버로 전송
        console.log("업로드 성공:", result);
      } catch (error) {
        console.error("업로드 중 에러 발생:", error);
      }
    }
  };

  const [profileFile, setProfileFile] = useState(null); // 파일 객체를 위한 상태

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // 이미지 미리보기를 위해 데이터 URL을 저장
        setProfileFile(file); // 실제 파일 객체를 상태에 저장
      };
      reader.readAsDataURL(file);
    } else {
      // 파일이 제대로 선택되지 않았다면 상태를 초기화
      setProfileFile(null);
      setProfileImage(null);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    if (password.length < 4) {
      errors.password = "비밀번호는 4자리 이상이어야 합니다.";
    } else if (password !== password2) {
      errors.password = "비밀번호가 일치하지 않습니다.";
    }

    if (!/^\d{11}$/.test(tel)) {
      errors.tel = "전화번호는 '-'을 제외한 11자리의 숫자로 입력해주세요.";
    }

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      const defaultData = { tel, password, userid };
      const res = await apiPostDefaultInfoEdit(defaultData);
      sessionStorage.setItem("userData", JSON.stringify(res));
      alert("정보가 수정되었습니다.");
    }
  };

  useEffect(() => {
    if (userData && userData.user && userData.user.allergies) {
      const allergiesArray = userData.user.allergies.split(",");
      const allergiesState = allergiesArray.reduce(
        (acc, allergy) => ({
          ...acc,
          [allergy.trim()]: true,
        }),
        initialAllergiesState
      );
      setAllergies(allergiesState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleAllergySubmit = async (e) => {
    e.preventDefault();
    const selectedAllergies = Object.entries(allergies)
      .filter(([_, value]) => value)
      .map(([key, _]) => key);
    const allergiesEdit = { selectedAllergies, userid };

    const res = await apiPostAllergiesEdit(allergiesEdit);
    sessionStorage.setItem("userData", JSON.stringify(res));
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
    setFormError(""); // 입력 시작 시 에러 메시지 초기화
  };

  const handleRegionSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRegion) {
      setFormError("지역을 선택해주세요.");
      return;
    }

    try {
      const schoolInfo = await getSchoolInfo(selectedRegion, schoolName);
      if (!schoolInfo) {
        setFormError("입력한 학교명을 찾을 수 없습니다.");
        return;
      }
      const combinedSchoolName = `${schoolName}, ${schoolInfo}`;

      const regionSchoolEdit = { region: selectedRegion, schoolNM: combinedSchoolName, userid: userid };
      const res = await apiPostRegionSchoolEdit(regionSchoolEdit);
      console.log({ res });
      sessionStorage.setItem("userData", JSON.stringify(res));
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* 마이페이지 나브 */}
      <div className="w-full absolute h-[80px] border flex justify-between p-4 items-center shadow-md bg-white  ">
        {/* 왼쪽 로고 */}

        <Link to="/">
          <img className="w-[180px]" src={logo} alt="sss" />
        </Link>
        {/* 오른쪽 프로필 사진 */}
        <div className="w-[50px] h-[50px] bg-gray-300 rounded-full flex items-end justify-center  ">
          <FaUser className="w-32 h-10 text-white" />
        </div>
      </div>
      {/* 아래쪽 컨텐츠 */}
      <div className="w-full h-[100vh] flex flex-col xl:flex-row xl:justify-center pt-20 ">
        {/* 왼쪽 정보 */}
        <div className="xl:w-[15%] w-full h-full border">
          {/* 왼쪽 상단 */}
          <div className="w-full h-70  border-b flex flex-col justify-center items-center gap-3">
            {/* 프로필 사진 */}
            {/* 설정  */}
            <div className="w-full flex justify-end">
              <div className="w-[35px] h-[35px] text-[25px] cursor-pointer text-gray-500 text-end mr-4 rounded-full border flex justify-center items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleProfileClick}>
                <IoSettingsOutline className={isHovered ? "animate-spin" : ""} style={{ transition: "transform 0.5s ease-in-out" }} />
              </div>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                  <div className="w-[400px] h-[500px] bg-white p-4 rounded-lg">
                    <div className="w-full h-[80px] ">
                      <h3 className="text-center flex items-center justify-center h-full">
                        <p>프로필 변경하기</p>
                      </h3>
                    </div>
                    {/* 이미지 업로드 */}
                    <div className="w-full h-[200px] flex justify-center pt-0">
                      <label className="relative w-[150px] h-[150px] bg-gray-300 rounded-full flex items-end justify-center">
                        {profileImage ? <img src={profileImage} alt="프로필 이미지" className="w-full h-full object-cover" /> : <FaUser className="w-[120px] h-[120px] text-white" />}
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" onChange={handleImageChange} />
                        <div className="absolute bottom-3 -right-2 w-[40px] h-[40px] rounded-full text-white flex justify-center items-center text-[23px] bg-gray-600 ">
                          <FaCamera />
                        </div>
                      </label>
                    </div>
                    <p className="text-center">나의 프로필을 멋지게 바꿔보세요 !!^^</p>
                    <div className="w-full flex justify-center">
                      <button className=" bg-blue-500 hover:bg-blue-600 duration-500 text-white font-semibold py-2 px-20  rounded" onClick={handleCloseModal}>
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 아래 프로필사진 */}
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-full flex items-end justify-center  ">
              <FaUser className="w-64 h-20 text-white" />
            </div>
            {/* 회원이름 */}
            <div>
              <h4>{userData?.user?.userid}</h4>
              {/* <p>19.05.08</p> */}
            </div>
          </div>
          {/* 왼족 하단 */}
          <div className="p-4 flex flex-col justify-center items-start gap-4">
            <Link to="/" className="text-black no-underline">
              <div className={selectedMenu === "home" ? "text-blue-500 font-semibold cursor-pointer" : "cursor-pointer"}>홈</div>
            </Link>
            <div onClick={() => setSelectedMenu("profile")} className={selectedMenu === "profile" ? "text-blue-500 font-semibold cursor-pointer" : "cursor-pointer"}>
              내 정보 수정
            </div>
            <div onClick={() => setSelectedMenu("allergy")} className={selectedMenu === "allergy" ? "text-blue-500 font-semibold cursor-pointer" : "cursor-pointer"}>
              알레르기 정보수정
            </div>
            <div onClick={() => setSelectedMenu("region")} className={selectedMenu === "region" ? "text-blue-500 font-semibold cursor-pointer" : "cursor-pointer"}>
              지역및 학교수정
            </div>
          </div>
        </div>
        {/* 오른쪽 바꿀수 있는 폼  */}
        <div className="h-full xl:w-[85%] w-full bg-[#F8F9FA] p-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            {selectedMenu === "profile" && "내 정보 수정"}
            {selectedMenu === "allergy" && "알레르기 정보 수정"}
            {selectedMenu === "region" && "지역 및 학교 정보수정"}
          </h2>
          <div className="w-full h-full flex justify-center">
            {/* 내정보 수정 */}
            {selectedMenu === "profile" && (
              <form onSubmit={handleProfileSubmit} className="flex flex-col w-full h-full">
                {/* 입력 폼들 추가 */}
                <div className="w-full flex flex-col items-center">
                  {/* 이름 */}
                  <div className="flex xl:w-1/2 w-full items-center  border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px] mt-16">
                    <div className="w-[200px] bg-[#EFEFEF] h-20 flex items-center p-4">이름</div>
                    <div className="pl-2">{userData?.user?.username}</div>
                  </div>
                  {/* 아이디 */}
                  <div className="flex xl:w-1/2 w-full items-center   border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-10 flex items-center p-4">아이디</div>
                    <div className="pl-2">{userData?.user?.userid}</div>
                  </div>
                  {/* 전화번호 */}
                  <div className="flex xl:w-1/2 w-full items-center  border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-10 flex items-center p-4">전화번호</div>
                    <input type="text" placeholder={userData?.user?.tel} className="pl-8 h-[90%] w-[40%] border rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500" value={tel} onChange={(e) => setTel(e.target.value)} />
                  </div>
                  {/* 비밀번호 */}
                  <div className="flex xl:w-1/2 w-full items-center  border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-10 flex items-center p-4">비밀번호</div>
                    <input type="password" placeholder="비밀번호" className="pl-8 h-[90%] w-[40%] border  placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  {/* 비밀번호 확인 */}
                  <div className="flex xl:w-1/2 w-full items-center   border-l-[0px] border-t-[1px] border-r-[1px] border-b-[1px]">
                    <div className="w-[200px] bg-[#EFEFEF] h-10 flex items-center p-4">비밀번호 확인</div>
                    <input type="password" placeholder="비밀번호 확인" className="pl-8 h-[90%] w-[40%] border  placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500" value={password2} onChange={(e) => setPassword2(e.target.value)} />{" "}
                  </div>
                  {errorMessages.tel && <div className="text-red-500">{errorMessages.tel}</div>}
                  {errorMessages.password && <div className="text-red-500">{errorMessages.password}</div>}
                  {/* 저장 버튼 */}
                  <div className="w-full flex justify-center m-4">
                    <button className="bg-blue-500 w-[50%] text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">저장</button>
                  </div>
                </div>
              </form>
            )}
            {/* 알레르기 */}
            {selectedMenu === "allergy" && (
              <form onSubmit={handleAllergySubmit} className="md:w-2/3 max-w-[1000px] w-full xl:h-[40%] h-[80%] mt-16 flex flex-col items-center justify-between bg-white border rounded-xl p-4">
                <div className="flex flex-wrap">
                  {Object.keys(allergies).map((allergy) => (
                    <div key={allergy} className={`border border-blue-500 cursor-pointer text-blue-500 py-2 px-4 rounded-full m-2 hover:bg-blue-500 hover:text-white transition duration-300 ${allergies[allergy] ? "bg-blue-500 text-white border-white" : ""}`} onClick={() => toggleAllergy(allergy)}>
                      {allergy}
                    </div>
                  ))}
                </div>
                <button className="w-1/2 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded">선택하기</button>
              </form>
            )}
            {/* 지역 및 학교 정보*/}
            {selectedMenu === "region" && (
              <form onSubmit={handleRegionSubmit} className="w-full h-full flex flex-col items-center ">
                <div className="w-full max-w-[1000px]">
                  {/* 지역 입력 받는 폼 */}
                  <div className="w-full xl:h-[55%] h-[70%] mb-14 mt-14 flex flex-col justify-between items-center bg-white border rounded-xl p-4">
                    <h4 className="">지역 정보 수정</h4>
                    <div className="flex flex-wrap">
                      {["서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"].map((region) => (
                        <div key={region} className={`border border-blue-500 cursor-pointer text-blue-500 py-2 px-4 rounded-full m-2 hover:bg-blue-500 hover:text-white transition duration-300 ${region === selectedRegion ? "bg-blue-500 text-white border-white" : ""}`} onClick={() => toggleRegion(region)}>
                          {region}
                        </div>
                      ))}
                    </div>
                    <button className="w-1/2 mt-16 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded">선택하기</button>
                  </div>
                  <div className="  w-full h-[30%] flex flex-col items-center bg-white border rounded-xl p-4">
                    {/* 학교이름 */}
                    <h4>학교 정보 수정</h4>
                    <div className="w-[60%] h-40 flex items-center">
                      <input type="text" className=" bg-gray-100 h-10 w-[80%] placeholder-up rounded-md px-2 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent duration-500" value={schoolName} onChange={handleSchoolNameChange} />
                      <button className="bg-blue-500 w-[20%] text-white py-2 rounded-r-sm hover:bg-blue-600 transition duration-300">저장</button>
                    </div>
                  </div>
                </div>
                {formError && <p className="text-red-500">{formError}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
