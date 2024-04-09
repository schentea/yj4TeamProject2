import React from 'react';

const AllergyModalComponent = ({ closeModal, isChecked, handleCheckChange }) => {
    const selectedRegions = Object.keys(isChecked).filter((allergy) => isChecked[allergy]);

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('fixed')) {
            closeModal();
        }
    };

    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
            onClick={handleOutsideClick}
        >
            <div className="w-full max-w-3xl h-[500px] flex flex-col justify-center items-center bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">지역을 선택해주세요</h2>
                <div className="flex-wrap flex gap-5 justify-center items-center">
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
                                className="cursor-pointer shadow-lg bg-blue-300 font-semibold text-white px-4 py-1 rounded-md hover:bg-blue-500 duration-300"
                                htmlFor={allergy}
                                style={{ backgroundColor: isChecked[allergy] ? 'blue' : '' }}
                            >
                                {allergy}
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

export default AllergyModalComponent;
