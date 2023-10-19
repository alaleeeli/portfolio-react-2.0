import '../index.css';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ImageTextPair from '../container/ImageTextPair';
import NextCard from '../components/Card/NextCard'
import { Button } from "@nextui-org/react";
import TopRightArrow from '../icons/TopRightArrow';
import { motion } from 'framer-motion';

const projectsCards = [
  {
    subtitle: "Machine learning",
    title: "Predicting Functionality of Water Pumps",
    image:"assets/Images/CardImages/Machine learning.jpeg",
    page: "/DataScience",
  } ,
  {
    subtitle: "App development",
    title: "Running Tracker",
    image: "assets/Images/CardImages/Running.jpeg",
    page: "/RunningTracker",
  } ,
  {
    subtitle: "Computer Vision",
    title: "Image Classification & Segmentation",
    image: "assets/Images/CardImages/ConvolutionalNeuralNetwork.jpg",
    page: "/ComputerVision",
  } ,
  {
    subtitle: "Computer Vision",
    title: "Traffic Detection using YOLOv5",
    image: "assets/Images/CardImages/objectDetection.jpeg",
    page: "/ObjectDetection",
  }
]

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition : {
      delay: 0.05 * index
    }
  })
}

const icon = <TopRightArrow color="#151515" />

export default function Home() {
  return (
    <motion.main
      className='pt-20'
      initial={{ x: 1000, opacity: 0.3 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      transition={{ 
        type:"tween",
        stiffness: 160,
        duration: 0.5, 
      }}
    >
  
      <HeroSection path="assets/Images/IMG_2321.jpg" title="Hello Friend" />
      <ImageTextPair 
        reverse={true} 
        title="Hi, I'm Rashed Alaleeli"
        text="A frontend developer & Design Enthusiast"
        image="assets/Images/developer.svg"
        />
      
      <section className="mt-7">

        <div className="text-center">
          <p className="font-semibold font-custom text-3xl mb-1">Projects Portfolio</p>
          <h4 className='font-medium text-gray-true-500'>These are some of the projects that I did during my time at the University.</h4>
        </div>

        <div className="w-full my-7 gap-4 grid grid-cols-1 md:flex-wrap md:flex justify-center items-center">
            {projectsCards.map((card, index) => (
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
                    subtitle={card.subtitle}
                    title={card.title}
                    image={card.image}
                    page={card.page}
                  />
                </motion.div>
            ))}
        </div>
              
        <div className="relative mt-5">

          <img src="assets/Images/IMG_2430.jpg" alt="Contact" className="w-full object-cover" />

          <div className="absolute ml-8 left-0 top-1/2 transform -translate-y-1/2 flex flex-col">
            <h3 className="md:text-5xl text-3xl uppercase font-semibold text-white">Get in Touch <br></br>with me.</h3>
            <Link to="/Contact">
              <Button endContent={icon} size="sm" className='bg-gray-true-100 hover:bg-gray-true-300 text-gray-true-800 mt-2'>Contact me</Button>
            </Link>
          </div>
        </div>

      </section>

    </motion.main>
  
  );
}

