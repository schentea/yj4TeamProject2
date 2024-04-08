import React from "react";

const ModalComponent = ({ closeModal, isChecked, handleCheckboxChange }) => {
  const selectedRegions = Object.keys(isChecked).filter((city) => isChecked[city]);

  console.log("지역", selectedRegions); //선택 지역 출력

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      closeModal();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" onClick={handleOutsideClick}>
      <div className="w-full max-w-3xl h-[500px] flex flex-col justify-center items-center bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">지역을 선택해주세요</h2>
        <div className="flex-wrap flex gap-5 justify-center items-center">
          {Object.keys(isChecked).map((city) => (
            <React.Fragment key={city}>
              <input type="checkbox" name={city} id={city} checked={isChecked[city]} onChange={() => handleCheckboxChange(city)} className="hidden" />
              <label className=" cursor-pointer shadow-lg bg-blue-300 font-semibold text-white px-4 py-1 rounded-md hover:bg-blue-500 duration-300" htmlFor={city} style={{ backgroundColor: isChecked[city] ? "blue" : "" }}>
                {city}
              </label>
            </React.Fragment>
          ))}
        </div>
        <button className="mt-16 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-20  rounded" onClick={closeModal}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
