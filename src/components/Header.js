import React from "react";
import {AiFillLinkedin, AiFillGithub} from'react-icons/ai'

const Header = () => {
    return (
        <header className="py-5 flex justify-between text-xl text-teal-600">
            <h1 className="font-burtons">DEVELOPEDBYMATT</h1>
            <ul className="flex font-burtons space-x-4">
                <li className="link">ABOUT</li>
                <li className="link">WORK</li>
                <li className="link">CONTACT</li>
                <li className="link">
                    <a href="https://www.linkedin.com/in/mrowan121/">
                        <AiFillLinkedin className="text-2xl" />
                    </a>
                </li>
                <li className="link">
                    <a href="https://github.com/MRowan121">
                        <AiFillGithub className="text-2xl" />
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;