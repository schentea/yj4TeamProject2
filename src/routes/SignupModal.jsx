import React, { useState } from "react";

const ModalComponent = ({ closeModal, isChecked, handleRadioChange }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

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
        <div className="flex-wrap flex gap-5 justify-center items-center">
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
                className="cursor-pointer bg-[#fff] font-semibold text-black  border text-xl md:text-[20px] text-[12.5px] md:px-5 px-4 py-2 rounded-md duration-300"
                htmlFor={city}
                style={{
                  backgroundColor: isChecked[city] ? "#7FC9EF" : "",
                  color: isChecked[city] ? " white" : "",
                }}
              >
                {city}
              </label>
            </div>
          ))}
        </div>
        <button
          className="mt-16 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-20  rounded"
          onClick={closeModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
