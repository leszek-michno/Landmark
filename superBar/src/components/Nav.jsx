import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/data/images/logo.png";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { id: 1, href: "#home",    text: t("nav.home") },
    { id: 2, href: "#menu",    text: t("nav.menu") },
    { id: 3, href: "#offer",   text: t("nav.offer") },
    { id: 4, href: "#gallery", text: t("nav.gallery") },
    { id: 5, href: "#kontakt", text: t("nav.contact") },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
  };

  return (
    <div>
      <header className="w-full pt-2 pb-2 fixed top-0 left-0 z-10 bg-gradient-to-l from-red-950 to-slate-950">
        <div className="flex items-center justify-between align-element">

          {/* Logo + przełącznik języka — zawsze widoczne */}
          <div className="flex items-center gap-3">
            <a href="#">
              <img
                src={logo}
                alt="Logo"
                className="w-22 h-12 object-cover rounded-full p-2 bg-red-800 ml-1
                border-[0.05rem]
                border-amber-500"
              />
            </a>

            <button
              onClick={toggleLang}
              className="text-sm font-bold px-3 py-1 rounded-full
                         border border-amber-500 text-amber-500
                         hover:bg-amber-500 hover:text-black
                         transition duration-300"
            >
              {i18n.language === "pl" ? "EN" : "PL"}
            </button>
          </div>

          {/* Linki desktop */}
          <ul className="hidden xl:flex items-center gap-12">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="p-3 capitalize text-2xl tracking-wide text-stone-300 hover:text-amber-500 duration-300"
                style={{ fontFamily: "cursive" }}
              >
                {link.text}
              </a>
            ))}
          </ul>

          {/* Hamburger — mobile */}
          <i
            className="bx bx-menu xl:hidden block text-3xl cursor-pointer text-amber-600 hover:text-amber-800 duration-300"
            onClick={() => setShowLinks(!showLinks)}
          ></i>

          {/* Menu mobilne — bez przełącznika języka (jest już przy logo) */}
          <div
            className={`absolute p-12 xl:hidden top-12 right-0 w-3/5 md:w-2/5 lg:w-1/3 bg-gradient-to-r from-amber-950 to-slate-950 rounded-lg flex flex-col items-center gap-6 text-lg transition duration-500 ease-in-out text-amber-600 font-light ${
              showLinks ? "block" : "hidden"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="transition duration-500 ease-in-out text-center p-4 hover:text-red-900"
                onClick={() => setShowLinks(false)}
              >
                {link.text}
              </a>
            ))}
          </div>

        </div>
      </header>
    </div>
  );
}

export default Nav;