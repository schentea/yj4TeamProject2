import React, { useEffect, useState } from "react";
import "../TopButton.scss";
import MealCalendar from "./Calendar";

function TopButton() {
  const [showButton, setShowButton] = useState(false);

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
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  return (
    showButton && (
      <>
        <div className="scroll">
          <button onClick={scrollToTop}>Top</button>
        </div>
        <div className="foodlist">
          <button onClick={() => setCalendarModalOpen(true)}>식단표</button>
        </div>
        {calendarModalOpen && <MealCalendar closeModal={() => setCalendarModalOpen(false)} />}
      </>
    )
  );
}

export default TopButton;
