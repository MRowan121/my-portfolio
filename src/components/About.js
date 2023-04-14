import Image from "next/legacy/image";
import React from "react";
import headshot from '../../public/headshot.jpeg'

const About = () => {
    return (
        <>
            <Image src={headshot} alt="my-headshot" layout="responsive" />
            <p className='text-md py-5 leading-8 text-gray-800'>
            I am an experienced software developer with a focus on front-end web development, boasting over 1,500 hours of hands-on coding experience. My expertise lies in crafting high-quality, responsive user interfaces, utilizing cutting-edge technologies and programming languages to create dynamic and intuitive web applications.
            </p>
        </>
    )
}

export default About;