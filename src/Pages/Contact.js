import '../index.css';
import ContactForm from '../components/Form/ContactForm';
import HeroSection from '../components/HeroSection';
import Mail from '../icons/Mail';
import Phone from '../icons/Phone';
import { motion } from "framer-motion";

export default function Contact() {
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
      <HeroSection path="assets/Images/IMG_2847.jpg" title="Contact us" />
      
      <section className="relative z-10 overflow-hidden bg-gray-true-100 py-10">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full lg:w-1/2 xl:w-6/12 flex flex-col justify-center">
              <div className="mb-6 max-w-[570px] lg:mb-0 mx-6">
                <h1 className="mb-6 text-[32px] font-bold font-custom uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Let's Chat.
                  <br />
                  Tell me about your inquiry.
                </h1>
                
                <p className="mb-6 text-gray-600 font-custom">
                  If you have any questions or inquiries, feel free to reach out to us.
                </p>

                <div className='w-full px-2 flex flex-col items-center'>
                  <ContactInfo icon={Phone} title="Phone Number" info="(+971) 50 851 2124" />
                  <ContactInfo icon={Mail} title="Email Address" info="ralaleeli@gmail.com" />
                </div>

              </div>
            </div>

            <ContactForm />
            
          </div>
        </div>
      </section>

    </motion.main>
  
  );
}

function ContactInfo({icon, title, info}) {
  let href;

  if (title === "Phone Number") {
    href = "tel:+97150-851-2124";
  } else if (title === "Email Address") {
    href = "mailto:ralaleeli@gmail.com";
  } else {
    href = "#";
  }

  return (
    <div className="mb-8 flex w-full items-center rounded-full">
      <div className="mx-2 flex h-[60px] w-full max-w-[60px] bg-gray-300 opacity-80 rounded-xl items-center justify-center overflow-hidden sm:h-[60px]">
        {icon}
      </div>
      <div className="w-full ml-2 font-custom">
        <h4 className="text-dark mb-1 text-xl font-semibold">{title}</h4>
        <a href={href} className='text-blue-500'>{info}</a>
      </div>
    </div>
  );
}
