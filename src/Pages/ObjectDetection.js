import TopTitle from "../container/ProjectPages/TopTitle";
import LeftColumn from "../container/ProjectPages/LeftColumn";
import RightColumn from "../container/ProjectPages/RightColumn";
import HorizontalLine from "../components/Lines/HorizontalLine";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

export default function ObjectDetection() {
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
            <div className="container mx-auto pt-12 min-h-screen">
                
                <TopTitle 
                    title="Traffic Detection using YOLOv5." 
                    date="Oct 18, 2023" 
                    category="Computer Vision / Object detection" />
                
                <HorizontalLine width="3/4" />

                <div className="flex flex-col md:flex-row gap-0 mt-3">
                    <div className="w-full md:w-1/3 text-left px-4 mr-2">
                        <LeftColumn 
                            module="Computer Vision" 
                            objective="To accurately and efficiently identify and classify cars, buses, trucks, bicycles, and pedestrians within a given scene, enabling enhanced safety and traffic management" 
                            tools="YOLO, open CV, and streamlit."/>
                        
                        <div className="flex justify-center mt-5 mb-5">
                            <a href="https://traffic-detection.streamlit.app" target="_blank" rel="noreferrer">
                                <Button className="bg-gray-true-300" variant='shadow'>
                                    Try the model
                                </Button>
                            </a>
                        </div>

                    </div>

                    <RightColumn >
                        In the hustle of our modern world, the way we manage traffic has become 
                        an increasingly pressing challenge. Luckily, we have a secret weapon: computer vision. 
                        Imagine if our cameras could not only record traffic but also understand it. That's 
                        where traffic object detection comes into play. It's all about training machines to 
                        spot and classify cars, buses, trucks, and even pedestrians in real-time, making our 
                        roads safer and more efficient.
                        <br/><br/>
                        The journey begins with a dataset of traffic camera images from all over the world, 
                        carefully compiled and annotated, thanks to the Kaggle dataset. It's like taking a 
                        global tour of traffic management, right from your computer. The beauty of this 
                        dataset lies in the detailed annotations. Every vehicle, pedestrian, and traffic 
                        sign is marked out with bounding boxes. It's like giving our computer vision systems 
                        a pair of sharp eyes.
                        <br/><br/>
                        Our process commences with the utilization of a pretrained YOLOv5 model. These 
                        pretrained models have previously been trained on extensive datasets and come 
                        equipped with valuable features. We initiate our model by initializing it with 
                        these weights, providing a robust foundation for subsequent fine-tuning efforts.
                        <br/><br/>
                        After achieving satisfactory results on the validation dataset, the model is 
                        tested on new, unseen data to evaluate its real-world applicability. Subsequently, 
                        the fine-tuned YOLOv5 model can be deployed in practical scenarios such as traffic 
                        monitoring, safety systems, and other applications.
                    </RightColumn>
                    
                </div>
            </div>

        </motion.main>
    )
}