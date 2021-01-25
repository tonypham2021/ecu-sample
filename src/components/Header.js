import React from "react";
import collabImage from './images/krakenimages.jpg';

function Header() {
    return (
        <header>
            <h1>Welcome to the Enterprise Collaboration Unit!</h1>
            <img alt="Two happy business people high five" src={collabImage} />
        </header>
    );
}

export default Header;