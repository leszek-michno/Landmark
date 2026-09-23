
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp
} from "react-icons/ai";

export const ContactInfo = () => {
  return (
    <div className="w-full pt-6 pb-20  text-white text-lg
    ">
      
        <div className="flex flex-col gap-8 justify-between items-center text-slate-100 font-light">
          
          <h1 className="text-3xl font-serif text-amber-600">+48 600 331 922</h1>
          <a className="flex items-center gap-2 text-white bg-green-700 py-2 px-4 rounded-3xl"
          
          href={"https://wa.me/48600331922"} target="_blank" rel="noopener noreferrer"  aria-label="Chat on WhatsApp">
              <AiOutlineWhatsApp />
              <span>Chat on WhatsApp</span>
            </a>
          <div className="flex gap-4 mt-4">
            <a
              href={"https://www.instagram.com/thelandmark.supperclub/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl text-rose-500 hover:text-amber-400 transition-colors duration-300"
              aria-label="Visit our Instagram page"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href={"https://www.facebook.com/profile.php?id=61583099927500"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl text-blue-500 hover:text-amber-400 transition-colors duration-300"
               aria-label="Visit our Facebook page"
            >
              <AiOutlineFacebook />
            </a>
            
            <a
              href={"mailto: leszek.michno@gmail.com"}
              className="text-6xl text-amber-500 hover:text-amber-400 transition-colors duration-300"
              aria-label="Send us an email"
            >
              <AiOutlineMail />
            </a>
            
          </div>
          
            <p className="text-3xl font-serif text-amber-600">Landmark Supper Club</p>
            <p className="font-serif text-amber-500">ul. Brzozowa 18, 31-050 Kraków</p>
          

          <iframe
           className="w-11/12 h-72 md:w-8/12 lg:w-8/12 rounded-lg mt-4"
            title="Landmark Supper Club"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.1234567890123!2d19.945123456789!3d50.061123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b75ba8bb777%3A0x8f746e9c1b974e6e!2sBrzozowa%2018%2C%2031-050%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1734708457309!5m2!1spl!2spl"
          ></iframe>
        </div>
        <div>
        </div>
      </div>
    
  );
};
