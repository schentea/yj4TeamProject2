import React, { useState } from "react";

const ModalComponent = ({ closeModal, isChecked, handleRadioChange }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  console.log(setSelectedRegion);
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
      <div className="w-full max-w-3xl h-[80%] flex flex-col justify-center items-center bg-white p-8 rounded-lg">
        <h2 className="md:text-5xl text-2xl font-semibold mb-16">
          지역을 선택해주세요
        </h2>
        <div className="flex-wrap flex md:gap-5 gap-4 justify-center items-center">
          {Object.keys(isChecked).map((city) => (
            <div key={city}>
              <input
                type="radio"
                name="region"
                id={city}
                checked={selectedRegion === city}
                onChange={() => handleRadioChange(city)}
                className="hidden"
              />
              <label
                className="border border-blue-500 cursor-pointer text-blue-500 py-2 px-4 rounded-full m-2 transition duration-300"
                htmlFor={city}
                style={{
                  backgroundColor: isChecked[city] ? "#3B82F6" : "",
                  color: isChecked[city] ? "#fff" : "#3B82F6",
                }}
              >
                {city}
              </label>
            </div>
          ))}
        </div>
        <button
          className="mt-16 bg-blue-500 hover:bg-blue-600 duration-500 text-white font-semibold py-2 px-20  rounded"
          onClick={closeModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
