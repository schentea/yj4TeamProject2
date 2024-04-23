import React, { useEffect, useState } from "react";
import "../TopButton.scss";
import MealCalendar from "./Calendar";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

function TopButton() {
  const [showButton, setShowButton] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const navigate = useNavigate();
  const login = useUser();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  const handleCalendarButtonClick = () => {
    if (login === undefined) {
      navigate("/login");
    } else {
      setCalendarModalOpen(true);
    }
  };

  return (
    showButton && (
      <>
        <div className="scroll">
          <button onClick={scrollToTop}>Top</button>
        </div>
        <div className="foodlist">
          <button onClick={handleCalendarButtonClick}>식단표</button>
        </div>
        {calendarModalOpen && (
          <MealCalendar closeModal={() => setCalendarModalOpen(false)} />
        )}
      </>
    )
  );
}

export default TopButton;
