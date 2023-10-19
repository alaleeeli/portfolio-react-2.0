import {Instagram} from '../SocialMedia/Instagram';
import {Twitter} from '../SocialMedia/Twitter';
import {LinkedIn} from '../SocialMedia/LinkedIn';
import {GitHub} from '../SocialMedia/GitHub';
import { motion } from "framer-motion";

export default function ProfileCard() {
  return  (
  <motion.div 
    className="w-full gap-4 grid grid-cols-1 md:flex-wrap md:flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
    <div className="w-80 p-2 bg-white rounded-xl shadow-lg md:mx-0 mx-auto">
      <div className="flex">
        <div id="image-background" className="relative flex h-[200px] w-screen items-center justify-center before:absolute before:h-[150px] before:w-[120px] before:rounded-full before:bg-gradient-to-b before:from-neutral-400 before:via-stone-500 before:to-stone-700">
          <img className="z-10 h-[120px] mb-5 " src="public/assets/Images/memoji.PNG" type="image" alt="" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-semibold text-lg mb-2 text-gray-800">Rashed Alaleeli</h2>
        <p className="text-sm text-gray-600">Frontend Developer / Design Enthusiast.</p>
      </div>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-10/12 h-px mb-3 bg-gray-200 border-0" />
      </div>

      <ul className="flex justify-center mb-2 space-x-5">
        <li>
          <Instagram height={7} width={7} color="gray-true-500"/>
        </li>
        <li>
          <Twitter height={7} width={7} color="gray-true-500"/>
        </li>
        <li>
          <LinkedIn height={7} width={7} color="gray-true-500"/>
        </li>
        <li>
          <GitHub height={7} width={7} color="gray-true-500"/>
        </li>
      </ul>

    </div>
  </motion.div>
  )
  ;
}
