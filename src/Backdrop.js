import React from 'react';
import './Backdrop.css'

const Backdrop = ({showBackdrop, backdropClose}) => {

    let isVisible = 'backdrop';
    showBackdrop ? isVisible = 'backdrop__show' : isVisible = 'backdrop'

    const closeHandler = () => {
        backdropClose(true)
    }

    return (
        <div className={isVisible} onClick={closeHandler}>
        
        </div>
    );
}

export default Backdrop;
