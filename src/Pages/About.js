import '../index.css';
import MyBackground from '../container/About/';
import NextCard from '../components/Card/NextCard';
import HeroSection from '../components/HeroSection';
import { motion } from "framer-motion";

const skills =[
  {
    name: "Computer Vision",
    imagePath: "assets/Images/CardImages/computer vision.jpeg",
  } ,
  {
    name: "Machine Learning",
    imagePath: "assets/Images/CardImages/dataScience.jpeg",
  } ,
  {
    name: "Web Development",
    imagePath: "assets/Images/CardImages/web design.jpeg",
  } ,
]

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition : {
      delay: 0.05 * index
    }
  })
}


export default function About() {
  return (
    <motion.main 
      className='min-h-screen pt-20'
      initial={{ x: 1000, opacity: 0.3 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      transition={{ 
        type:"tween",
        stiffness: 160,
        duration: 0.5, 
      }}
      
    >
      <HeroSection path="assets/Images/IMG_1109.jpg" title="About" />
  
      <MyBackground />
       
      <div className='text-center mt-3'>
        <span className='text-3xl font-semibold text-gray-700'>Skills</span>
        <p className='mt-1 text-gray-600 text-[18px]'>These are some of the skills I developed myself in during university.</p>
        <div className="w-full my-5 gap-4 flex-wrap flex justify-center items-center">

        {skills.map((skill, index) => (
          <motion.div 
            className="w-1/2 sm:w-2/5 md:w-1/4 lg:w-1/5 mx-auto md:mx-0"
            key={index} 
            variants={fadeInAnimationVariants} 
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <NextCard 
              image={skill.imagePath} 
              number={`${(skills.indexOf(skill) + 1 < 10 ? '0' : '')}${skills.indexOf(skill) + 1}`} 
              title={skill.name}
            />
          </motion.div>
          ))}
          
        </div>  

      </div>

    </motion.main>
  );
}


