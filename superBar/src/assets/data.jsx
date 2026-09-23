import { nanoid } from "nanoid";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";

import imgSep from "../assets/Septyma.png";
import imgPropa from "../assets/Propa.png";
import imgBoys  from "../assets/Boys.png";

export const links = [
  {
    id: nanoid(),
    href: "#home",
    text: "Start",
  },
  {
    id: nanoid(),
    href: "#menu",
    text: "Menu",
  },
  {
    id: nanoid(),
    href: "#offer",
    text: "Oferta",
  },
  {
    id: nanoid(),
    href: "#gallery",
    text: "Galeria zdjęć",
  },
  {
    id: nanoid(),
    href: "#kontakt",
    text: "Kontakt",
  },
];

export const skills = [
  {
    id: nanoid(),
    icon: <FaHtml5 className="h-16 w-16 text-sky-600" />,
    title: "HTML5",
    // text: "I can create a website using HTML5",
  },
  {
    id: nanoid(),
    icon: <FaCss3Alt className="h-16 w-16 text-sky-600" />,
    title: "CSS",
  },
  {
    id: nanoid(),
    icon: <FaSass className="h-16 w-16 text-sky-600" />,
    title: "Sass",
  },
  {
    id: nanoid(),
    icon: <SiTailwindcss className="h-16 w-16 text-sky-600" />,
    title: "Tailwind",
  },
  {
    id: nanoid(),
    icon: <FaJs className="h-16 w-16 text-sky-600" />,
    title: "Javascript",
    // text: "I can create a website using JS",
  },
  {
    id: nanoid(),
    icon: <FaReact className="h-16 w-16 text-sky-600" />,
    title: "React",
    // text: "I can create a website using React",
  },
  {
    id: nanoid(),
    icon: <SiVite className="h-16 w-16 text-sky-600" />,
    title: "Vite",
  }, 
  
];

export const project = [
{   
    id: nanoid(),
    img: imgPropa,
    url: "https://pubpropaganda.eu/",
    title: "Lokal gastronomiczny",
    text: "A website for a pub",
},
{   
    id: nanoid(),
    img: imgBoys,
    url: "https://handsomeboys.propaway.pl/",
    title: "Zespół muzyczny",
    text: "A website for a music band",
},
{   
  id: nanoid(),
  img: imgSep,
  url: "https://septyma.com.pl/",
  title: "Serwis gitarowy",
  text: "A website for a guitar service",
},
]
  

