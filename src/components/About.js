import Image from "next/legacy/image";
import headshot from '../../public/headshot.jpeg'

const About = () => {
    return (
        <section className="grid grid-cols-2">
            <Image 
                src={headshot} 
                alt="my-headshot" 
                layout="responsive" 
            />
            <p className='text-md p-5 leading-8 text-gray-800 place-self-center'>
            I am an experienced software developer with a focus on front-end web development, boasting over 1,500 hours of hands-on coding experience. My expertise lies in crafting high-quality, responsive user interfaces, utilizing cutting-edge technologies and programming languages to create dynamic and intuitive web applications.
            </p>
        </section>
    )
}

export default About;