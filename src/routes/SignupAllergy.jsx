import React from "react";

const AllergyModalComponent = ({
  closeModal,
  isChecked,
  handleCheckChange,
}) => {
  const selectedRegions = Object.keys(isChecked).filter(
    (allergy) => isChecked[allergy]
  );
  console.log(selectedRegions);

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
        <h2 className="md:text-4xl text-2xl md:mb-16 mb-16">
          알레르기를 선택해주세요
        </h2>
        <div className="flex-wrap flex gap-4 justify-center items-center">
          {Object.keys(isChecked).map((allergy) => (
            <div key={allergy}>
              <input
                type="checkbox"
                name={allergy}
                id={allergy}
                checked={isChecked[allergy]}
                onChange={() => handleCheckChange(allergy)}
                className="hidden"
              />
              <label
                className="border border-blue-500  cursor-pointer text-blue-500 py-2 px-4 rounded-full m-2 transition duration-300"
                htmlFor={allergy}
                style={{
                  backgroundColor: isChecked[allergy] ? "#3B82F6" : "",
                  color: isChecked[allergy] ? "#fff" : "#3B82F6",
                }}
              >
                {allergy}
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

export default AllergyModalComponent;
