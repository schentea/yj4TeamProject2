import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full h-[170px] bg-[#F9FAFB] flex justify-center">
      {/* Logo */}
      <div className="w-full max-w-[1200px] h-full p-5">
        <div className="h-full w-full flex justify-between items-center">
          <div className="flex flex-col text-black font-bold text-[16px] gap-3">
            <img className="w-[180px]" src={logo} alt="sss" />
            <h6>대구광역시 동구 화랑로 525 </h6>
            <h6>Copyright ⓒ CareKids,Ltd All Rights Reserved.</h6>
          </div>

          <div className="flex space-x-4 h-full items-center text-black text-[24px] gap-3">
            <p>
              <Link to="https://www.instagram.com/" className="text-black">
                <FaInstagram />
              </Link>
            </p>
            <p>
              {" "}
              <Link
                to="https://www.facebook.com/?locale=ko_KR"
                className="text-black"
              >
                <FaSquareFacebook />
              </Link>
            </p>
            <p>
              {" "}
              <Link to="https://www.youtube.com/" className="text-black">
                <CiYoutube />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
