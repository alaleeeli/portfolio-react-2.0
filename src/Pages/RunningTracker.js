import TopTitle from "../container/ProjectPages/TopTitle";
import LeftColumn from "../container/ProjectPages/LeftColumn";
import RightColumn from "../container/ProjectPages/RightColumn";
import HorizontalLine from "../components/Lines/HorizontalLine";
import { motion } from "framer-motion";

export default function RunningTracker() {
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
                    title="Running Tracker (Android Application)." 
                    date="Jan 16, 2023" 
                    category="Mobile App development" />
                
                <HorizontalLine width="3/4" />

                <div className="flex flex-col md:flex-row gap-0 mt-3">
                    <div className="w-full md:w-1/3 text-left px-4 mr-2">
                        <LeftColumn 
                            module="Mobile Device Programming" 
                            objective="To design and implement a mobile application that functions as a basic Running Tracker." 
                            tools="Android Studio"/>
                    </div>

                    <RightColumn>
                        The Quantified Self or life-logging movement has been around for a number of years, but
                        advances in mobile and wearable computing have increased the ability of people to collect
                        data about their physical activities. The most common of these track activity as it happens for
                        fitness, health or gamification purposes, for example displaying comparisons with previous
                        activities, keeping track of best time or longest distances.
                        <br/><br/>
                        The goal of this project is to design and implement a mobile application that functions as
                        a basic Running Tracker, in that it should allow the user to track their movement when they
                        decide to walk, run or jog, principally by logging the change in physical location using GPS.
                    </RightColumn>
                </div>
            </div>

        </motion.main>
    )
}

