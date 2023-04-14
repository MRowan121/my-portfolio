import Image from "next/legacy/image";
import React from "react";
import headshot from '../../public/headshot.jpeg'

const About = () => {
    return (
        <>
            <Image src={headshot} alt="my-headshot" layout="responsive" />
        </>
    )
}

export default About;