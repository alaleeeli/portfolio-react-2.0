import { useState } from 'react';
import Logo from '../Logo';
import MenuButton from './MenuButton';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import TopRightArrow from '../../icons/TopRightArrow'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  }
};

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  };

  const icon = <TopRightArrow color="#141414" />

  return (
    <motion.nav 
      animate={isOpen ? "open" : "closed"}
    >
    <nav className="bg-gray-true-800 border-gray-200 z-50 fixed w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Logo />
        <MenuButton onToggleMenu={toggleMenu} />

        <motion.div className={`w-full md:block md:w-auto ${!isOpen ? 'hidden' : ''}`}>
          <motion.ul className="font-medium flex flex-col pt-2 md:p-0 rounded-lg md:space-x-8 md:flex-row md:border-0 bg-gray-true-800 md:justify-center md:items-center" variants={variants}>
            <NavLink to="/" onToggleMenu={toggleMenu}>Home.</NavLink>
            <NavLink to="/Projects" onToggleMenu={toggleMenu}>Projects.</NavLink>
            <NavLink to="/About" onToggleMenu={toggleMenu}>About.</NavLink>
            // <NavLink to="/Contact" onToggleMenu={toggleMenu} button={true} icon={icon}>Contact me</NavLink>
            <NavLink to="/Contact" onToggleMenu={toggleMenu}>Contact.</NavLink>
          </motion.ul>
        </motion.div> 
  
      </div>
    </nav>
    </motion.nav>
  );
}
