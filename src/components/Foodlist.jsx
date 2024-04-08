import React, { useEffect, useState } from 'react';
import '../TopButton.scss';

function Foodlist() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleShowButton = () => {
            window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
        };

        console.log(window.scrollY);
        window.addEventListener('scroll', handleShowButton);
        return () => {
            window.removeEventListener('scroll', handleShowButton);
        };
    }, []);
    return (
        showButton && (
            <div className="scroll">
                <button onClick={scrollToTop}>식단표 보러가기</button>
            </div>
        )
    );
}

export default Foodlist;
