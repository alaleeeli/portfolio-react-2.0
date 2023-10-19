import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from '@nextui-org/react';

export default function NavLink({ to, onToggleMenu, button, icon, children }) {
  const style = "block py-2 pl-3 pr-4 text-lg font-custom rounded md:hover:bg-transparent md:border-0 text-gray-true-100 hover:text-gray-true-300 md:p-0";

  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to} className={style} onClick={onToggleMenu}>
        { button ? 
          (<Button endContent={icon} size="sm" className='bg-gray-true-100 hover:bg-gray-true-300 text-gray-true-800'>{children}</Button>)
         : children }
        
      </Link>
    </motion.li>
  );
}
