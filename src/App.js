import './index.css';
import NavigationBar from './components/NavigationBar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import RunningTracker from './Pages/RunningTracker'
import DataScience from './Pages/DataScience'
import ComputerVision from './Pages/ComputerVision'
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";
import Footer from './components/Footer';
import ObjectDetection from './Pages/ObjectDetection';

export default function App() {
  const location = useLocation();

  return (
    <NextUIProvider>
    <div className='bg-gray-true-100'>
      <NavigationBar />
      <div>
        <AnimatePresence location={location} key={location.pathname}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/About' element={<About />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/RunningTracker' element={<RunningTracker />} />
              <Route path='/ComputerVision' element={<ComputerVision />} />
              <Route path='/DataScience' element={<DataScience />} />
              <Route path='/ObjectDetection' element={<ObjectDetection />}/>

            </Routes>
        </AnimatePresence>
      </div>
      <Footer lineWidth={'3/4'}/>
    </div>
    </NextUIProvider>
  );
}

