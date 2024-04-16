import moment from "moment";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getMealForDate } from "../Api";
import { IoIosClose } from "react-icons/io";

const MealCalendar = ({ closeModal }) => {
  const [value, onChange] = useState(new Date());
  const [mealData, setMealData] = useState("");
  const [mealCountry, setMealCountry] = useState("");
  const [allergy, setAllergy] = useState([]);
  const [activeTab, setActiveTab] = useState("menu");
  // 세션에 저장된 데이터 가져오기
  let data;
  const Storage = sessionStorage.getItem("userData");
  if (Storage) {
    data = JSON.parse(Storage);
  }
  const schoolNM = data?.schoolNM.split(",")[0];
  const userAllergy = data?.userAllergy;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const date = moment(value).format("YYYYMMDD");

  useEffect(() => {
    const fetchData = async () => {
      const { mealData, mealCountry, allergy } = await getMealForDate(date);
      setMealData(mealData);
      setMealCountry(mealCountry);
      setAllergy(allergy);
    };

    fetchData();
  }, [date]);

  // 알러지 음식 번호로 변환
  const getAllergyNumber = (allergyList) => {
    const allergyArray = allergyList.split(",");
    const allergyNumber = allergyArray.map((allergy) => {
      for (const key in noFood) {
        if (noFood[key] === allergy.trim()) {
          return key.toString();
        }
      }
      return null;
    });
    return allergyNumber.filter((number) => number !== null);
  };

  let noFood = {
    1: "달걀",
    2: "우유",
    3: "메밀",
    4: "땅콩",
    5: "대두",
    6: "밀",
    7: "고등어",
    8: "게",
    9: "새우",
    10: "돼지고기",
    11: "복숭아",
    12: "토마토",
    13: "아황산",
    14: "호두",
    15: "닭고기",
    16: "쇠고기",
    17: "오징어",
    18: "조개류",
    19: "잣",
  };
  const allergyNumber = getAllergyNumber(userAllergy); //알러지 번호

  //식단표
  const formatMealData = (data) => {
    if (!data) return "";

    const menuItems = data.split("<br/>");

    const formattedMenu = menuItems.map((item) => {
      const [dishName, ingredients] = item.split("(");
      const ingredientNumbers = ingredients ? ingredients.replace(")", "").split(".") : [];
      const containsAllergy = ingredientNumbers.some((ingredientNumber) => allergyNumber.includes(ingredientNumber)); // 알레르기 번호 포함 여부 확인
      console.log("알러지번호", allergyNumber);
      return <span style={{ color: containsAllergy ? "red" : "black" }}>{dishName.trim()}</span>;
    });

    return <div>{formattedMenu.reduce((prev, curr) => [prev, ", ", curr])}</div>;
  };

  // 원산지
  const formatCountryData = (data) => {
    if (!data) return "";

    const countryItems = data.split("<br/>");

    const formattedCountry = countryItems.map((item) => {
      const [food, origin] = item.split(" : ");
      return `${food.trim()} : ${origin.trim()}`;
    });

    return formattedCountry.join(", ");
  };

  // 알러지표시
  const formatAllergyData = (data) => {
    if (!data || data.length === 0) return "";

    return (
      <div>
        {data.map((allergy, index) => (
          <span key={index}>
            <span style={{ color: userAllergy.includes(allergy) ? "red" : "black" }}>{allergy}</span>
            {index < data.length - 1 && data[index + 1] ? "," : ""}
          </span>
        ))}
      </div>
    );
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      closeModal();
    } else if (e.target.classList.contains("absolute")) {
      closeModal();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" onClick={handleOutsideClick}>
      <div className="w-full relative max-w-3xl overflow-y-scroll h-[95%] flex flex-col bg-white p-8 rounded-lg shadow-xl">
        <div className="w-full flex justify-center mb-2 font-bold text-2xl">{schoolNM}</div>

        <IoIosClose className=" absolute top-4 right-4 text-3xl cursor-pointer" onClick={handleOutsideClick} />

        <div className="h-[500px]">
          <Calendar onChange={onChange} formatDay={(locale, date) => moment(date).format("DD")} value={value} />
        </div>
        <div className="max-w-[90%] mx-auto mt-8">
          <div className="flex justify-center mb-4">
            <button className={`mr-4 ${activeTab === "menu" ? "text-blue-600" : ""}`} onClick={() => handleTabClick("menu")}>
              메뉴
            </button>
            <button className={`mr-4 ${activeTab === "allergy" ? "text-blue-600" : ""}`} onClick={() => handleTabClick("allergy")}>
              알레르기 정보
            </button>
            <button className={`mr-4 ${activeTab === "origin" ? "text-blue-600" : ""}`} onClick={() => handleTabClick("origin")}>
              원산지
            </button>
          </div>
          {activeTab === "menu" && (
            <div className="border rounded-lg p-4">
              <h2 className="text-center text-lg font-semibold mb-4">메뉴</h2>
              {mealData ? <p className="text-center">{formatMealData(mealData)}</p> : <p>해당날짜의 식단표가 없습니다</p>}
            </div>
          )}
          {activeTab === "allergy" && (
            <div className="border rounded-lg p-4">
              <h2 className="text-center text-lg font-semibold mb-4 text-red-600">알레르기 정보 및 참고</h2>
              {allergy && allergy.length > 0 ? <p className="text-center">{formatAllergyData(allergy)}</p> : <p>해당날짜의 알레르기 정보가 없습니다</p>}
            </div>
          )}
          {activeTab === "origin" && (
            <div className="border rounded-lg p-4">
              <h2 className="text-center text-lg font-semibold mb-4">원산지</h2>
              {mealCountry ? <p className="text-center">{formatCountryData(mealCountry)}</p> : <p>해당날짜의 식단표가 없습니다</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MealCalendar;
