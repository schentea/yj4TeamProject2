// ModalComponent.js
import React, { useRef } from "react";

const ModalComponent = ({ closeModal }) => {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
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
          <span className="w-[13%]">서울</span>
          <span className="w-[13%]">부산</span>
          <span className="w-[13%]">대구</span>
          <span className="w-[13%]">인천</span>
          <span className="w-[13%]">광주</span>
          <span className="w-[13%]">대전</span>
          <span className="w-[13%]">울산</span>
          <span className="w-[13%]">세종시</span>
          <span className="w-[13%]">경기도</span>
          <span className="w-[13%]">강원도</span>
          <span className="w-[13%]">충청북도</span>
          <span className="w-[13%]">충청남도</span>
          <span className="w-[13%]">전라북도</span>
          <span className="w-[13%]">전라남도</span>
          <span className="w-[13%]">경상북도</span>
          <span className="w-[13%]">경상남도</span>
          <span className="w-[13%]">제주도</span>
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
