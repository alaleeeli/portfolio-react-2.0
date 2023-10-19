import TopTitle from "../container/ProjectPages/TopTitle";
import LeftColumn from "../container/ProjectPages/LeftColumn";
import RightColumn from "../container/ProjectPages/RightColumn";
import HorizontalLine from "../components/Lines/HorizontalLine";
import DataScienceResearch from "../container/Researches/DataScienceResearch";
import { motion } from "framer-motion";

export default function DataScience() {
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
                    title="Predicting Functionality of Water Pumps." 
                    date="May 24, 2023" 
                    category="Machine Learning / Data Analysis" />
    
                <HorizontalLine width={"3/4"} />

                <div className="flex flex-col md:flex-row gap-0 mt-3">
                    <div className="w-full md:w-1/3 text-left px-4 mr-2">
                        <LeftColumn 
                            module="Data Science with Machine Learning" 
                            objective="Analysing features that affect water pumps in Tanzania and utilising machine learning classification models and data provided by the Taarifa water points, to predict their functionality." 
                            tools="Python with different libraries including Pandas, numpy, matplotlib, seaborn, and tensorflow."/>
                    </div>

                    <RightColumn 
                        modalTitle="Exploring machine learning models to predict the functionality of water pumps" 
                        modalBody={<DataScienceResearch />}
                        path="assets/pdfs/IEEE_Conference_Template__1_.pdf">
        
                        This research aims to focus on identifying the important features, in predicting the status of a pump and investigate 
                        the best-performing classification models by training them on the data and features provided to predict the labels of 
                        unseen data. Predicting the functionality, in advance can offer a number of advantages, including lower emergency repair 
                        costs, more effective implementation of infrastructure development projects, and most importantly, assuring a steady supply of water.
                        <br/><br/>
                        Data wrangling is a critical step in ensuring that models offer predictions as effectively as possible, 
                        this can be done by handling outliers, incorrect and missing values. Because some features are repetitive 
                        and others do not provide useful information, it is vital to select features that play a substantial 
                        role in increasing the model's performance. After data wrangling, experimented with different feature engineering techniques, 
                        to ensure that the data set is in the right format, such as ensuring all input variables are numerical variables.
                        <br/><br/>
                        Multiple classification models were trained afterwards to find the optimal model that maximises the accuracy to predict the functionality of water pumps, 
                        this include Random forest, XGboost, logistic regression, Multi-layer Perceptron (MLP), decision tree, support vector machine, and Gaussian Naive Bayes (GNB).
                        <br/><br/>
                        Found that random forest classifier have the highest performance on unseen data. The model achieved an accuracy of 91.79% 
                        on the training set and 81.07% on the validation set, even though there is a huge difference between the two accuracies 
                        which indicated overfitting, but the model's accuracy is the best among all other models.
                    </RightColumn>
                </div>
            </div>

        </motion.main>
    )
}