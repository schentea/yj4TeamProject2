// ModalComponent.js
import React, { useRef, useState } from 'react';

const ModalComponent = ({ closeModal }) => {
    const modalRef = useRef();

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };
    const [isChecked, setIsChecked] = useState({
        서울: false,
        부산: false,
        대구: false,
        인천: false,
        광주: false,
        대전: false,
        울산: false,
        세종시: false,
        경기도: false,
        강원도: false,
        충청북도: false,
        충청남도: false,
        전라북도: false,
        전라남도: false,
        경상북도: false,
        경상남도: false,
        제주도: false,
    });

    const handleCheckboxChange = (city) => {
        setIsChecked({
            ...isChecked,
            [city]: !isChecked[city],
        });
    };
    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
            onClick={handleOutsideClick}
        >
            <div
                className="w-full max-w-3xl h-[500px] flex flex-col justify-center items-center bg-white p-8 rounded-lg"
                ref={modalRef}
            >
                <h2 className="text-2xl font-semibold mb-4">지역을 선택해주세요</h2>
                <div className="flex-wrap flex gap-5 justify-center items-center">
                    {Object.keys(isChecked).map((city) => (
                        <React.Fragment key={city}>
                            <input
                                type="checkbox"
                                name={city}
                                id={city}
                                checked={isChecked[city]}
                                onChange={() => handleCheckboxChange(city)}
                                className="hidden"
                            />
                            <label htmlFor={city} style={{ backgroundColor: isChecked[city] ? 'lightblue' : '' }}>
                                {city}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={closeModal}
                >
                    닫기
                </button>
            </div>
        </div>
    );
};

export default ModalComponent;
