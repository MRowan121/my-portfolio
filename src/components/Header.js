import React from "react";
import {AiFillLinkedin, AiFillGithub} from'react-icons/ai'

const Header = () => {
    return (
        <header>
            <h1>DEVELOPEDBYMATT</h1>
            <ul>
                <li>ABOUT</li>
                <li>WORK</li>
                <li>CONTACT</li>
                <li>
                    <AiFillLinkedin />
                </li>
                <li>
                    <AiFillGithub />
                </li>
            </ul>
        </header>
    )
}

export default Header;