import {Instagram} from './Instagram';
import {Twitter} from './Twitter';
import {LinkedIn} from './LinkedIn';
import {GitHub} from './GitHub';
import { motion } from 'framer-motion';

export default function SocialList({height, width, color}) {
    const variants = {
        whileHover: { scale: 2.0 },
        whileTap: { scale: 0.95 },
      };

    const socialMediaIcons = [
        { IconComponent: Instagram },
        { IconComponent: Twitter },
        { IconComponent: LinkedIn },
        { IconComponent: GitHub },
      ];

    return (
        <>
            <motion.ul className="flex justify-center space-x-2">
                {socialMediaIcons.map((socialMediaIcon, index) => (
                    <motion.li key={index} variants={variants}>
                        <socialMediaIcon.IconComponent height={height} width={width} color={color} />
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
}