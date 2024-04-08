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
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
          <span className="w-[13%]">엄</span>
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
