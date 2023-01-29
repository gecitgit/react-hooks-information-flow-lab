import React, { useState } from "react";

function Header({ onDarkModeClick, holdsState}){
    return (
        <header>
            <h2>Shopster in header</h2>
            <button onClick={onDarkModeClick}>
            {holdsState ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}


export default Header;