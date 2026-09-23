import { useState } from "react";
import { links } from "../assets/links";
import logo from "../assets/data/images/logo.png";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
     
      <header className=" w-full pt-2 pb-2 fixed top-0 left-0 z-10 bg-gradient-to-l from-red-950 to-slate-950"> 
        <div className="flex items-center justify-between align-element">
          <a href="#">
            <img
              src={logo}    
              alt="Logo"
              className="w-22 h-12 object-cover rounded-full p-2 bg-red-800 ml-1 
              border-[0.05rem]
              border-amber-500"
            />

          </a>
          <ul className="hidden xl:flex items-center gap-12">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="p-3 capitalize text-2xl tracking-wide text-stone-300 hover:text-amber-500 duration-300"
                  style={{ fontFamily: "cursive" }}
                >
                  {text}
                </a>
              );
            })}
          </ul>

          <i
            className="bx bx-menu xl:hidden block text-3xl cursor-pointer text-amber-600 hover:text-amber-800 duration-300"
            onClick={() => setShowLinks(!showLinks)}
          ></i>
          <div
            className={`absolute p-12 xl:hidden top-12 right-0 w-3/5 md:w-2/5 lg:w-1/3 bg-gradient-to-r from-amber-950 to-slate-950 rounded-lg flex flex-col items-center gap-6 text-lg transition duration-500 ease-in-out text-amber-600 font-light ${
              showLinks ? "block" : "hidden"
            }`}
          >
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="transition duration-500 ease-in-out text-center p-4 hover:text-red-900"
                  onClick={() => setShowLinks(false)}
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
