import '../index.css';
import NextCard from '../components/Card/NextCard';
import HeroSection from '../components/HeroSection';
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

export default function Projects() {
  return (
    <motion.main
      initial={{ x: 1000, opacity: 0.3 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      transition={{ 
        type:"tween",
        stiffness: 160,
        duration: 0.5, 
    }}
    >
      <section className="pt-20 bg-gray-true-100 min-h-screen">

      <HeroSection path="assets/Images/DJI_0473.jpg" title="Projects" />

        <div className="text-center px-10 m-10 md:text-left">
          <p className="font-semibold text-3xl mb-1">Projects Portfolio</p>
        
          <p className="font-medium text-xl text-gray-800 mb-1">
              This page serves as a gallery of the remarkable work accomplished during my time at university. 
              These projects reflect not only the knowledge gained but also the dedication and creativity. 
              From research papers to group assignments and personal innovation.
          </p>
        </div>
    
        <div className="w-full my-7 gap-4 grid grid-cols-1 md:flex-wrap md:flex justify-center items-center">
          { projectsCards.map((card, index) => (
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
          
      </section>
      
    </motion.main>
     
  );
}
