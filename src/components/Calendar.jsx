import moment from "moment";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getMealForDate } from "../Api";

const MealCalendar = ({ closeModal }) => {
  const [value, onChange] = useState(new Date());
  const [mealData, setMealData] = useState("");
  const [mealCountry, setMealCountry] = useState("");
  const [allergy, setAllergy] = useState([]);
  const [activeTab, setActiveTab] = useState("menu");

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

  const formatMealData = (data) => {
    if (!data) return "";

    const menuItems = data.split("<br/>");

    const formattedMenu = menuItems.map((item) => {
      const menuName = item.split("(")[0].trim();
      return menuName;
    });

    return formattedMenu.join(", ");
  };

  const formatCountryData = (data) => {
    if (!data) return "";

    const countryItems = data.split("<br/>");

    const formattedCountry = countryItems.map((item) => {
      const [food, origin] = item.split(" : ");
      return `${food.trim()} : ${origin.trim()}`;
    });

    return formattedCountry.join(", ");
  };

  const formatAllergyData = (data) => {
    if (!data || data.length === 0) return "";

    return data.join(", ");
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="w-full max-w-3xl overflow-y-scroll h-[95%] flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-xl">
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("DD")}
          value={value}
        />
        <div className="max-w-[90%] mx-auto mt-8">
          <div className="flex justify-center mb-4">
            <button
              className={`mr-4 ${activeTab === "menu" ? "text-blue-600" : ""}`}
              onClick={() => handleTabClick("menu")}
            >
              메뉴
            </button>
            <button
              className={`mr-4 ${
                activeTab === "allergy" ? "text-blue-600" : ""
              }`}
              onClick={() => handleTabClick("allergy")}
            >
              알레르기 정보
            </button>
            <button
              className={`mr-4 ${
                activeTab === "origin" ? "text-blue-600" : ""
              }`}
              onClick={() => handleTabClick("origin")}
            >
              원산지
            </button>
          </div>
          {activeTab === "menu" && (
            <div className="border rounded-lg p-4">
              <h2 className="text-center text-lg font-semibold mb-4">메뉴</h2>
              {mealData && (
                <p className="text-center">{formatMealData(mealData)}</p>
              )}
            </div>
          )}
          {activeTab === "allergy" && (
            <div className="border rounded-lg p-4">
              <h2 className="text-center text-lg font-semibold mb-4 text-red-600">
                알레르기 정보 및 참고
              </h2>
              {allergy && (
                <p className="text-center">{formatAllergyData(allergy)}</p>
              )}
            </div>
          )}
          {activeTab === "origin" && (
            <div className="border rounded-lg p-4">
              <h2 className="text-center text-lg font-semibold mb-4">원산지</h2>
              {mealCountry && (
                <p className="text-center">{formatCountryData(mealCountry)}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MealCalendar;
