import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";

export const Footer = () => {
  return (
 

    <div className="relative bottom-0 left-0 bg-black w-full h-full">
    
      <div className="flex flex-col gap-2 items-center justify-center text-lg text-amber-500  pt-6 pb-6"> 
        {/* <div>
          <a href={"mailto:leszek.michno@gmail.com"}>leszek.michno@gmail.com</a>
        </div> */}

        <div className="flex gap-4 text-2xl">
          <a
            href={"https://www.facebook.com/profile.php?id=61583099927500"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href={"https://www.instagram.com/thelandmark.supperclub/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href={"mailto: leszek.michno@gmail.com"}
            aria-label="Send message to us"
          >
            <AiOutlineMail />
          </a>
        </div>
        <div>
          <a>copyright@2026LemSonWeb</a>
        </div> 
        </div>
    </div>
  );
};
