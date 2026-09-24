import { useState } from "react";
import { ArrayMenu } from "../assets/data/ArrayMenu";
import SectionTitle from "./SectionTitle";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Otwieramy modal tylko na ekranach większych niż 600px
  const openImage = (index) => {
    if (window.innerWidth <= 600) return;

    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  return (
    <div
      className="pt-24 text-lg bg-gradient-to-r from-red-950 to-stone-950 h-full"
      id="menu"
    >
      <SectionTitle text="Menu" />

      {/* GALERIA */}

      <div
        className="
          xl:w-10/12
          flex
          flex-col
          flex-wrap 
          items-center
          mx-auto
          p-8
          gap-4
          min-[901px]:flex-row
          min-[901px]:flex-nowrap
          min-[901px]:gap-6"
      >
        {ArrayMenu.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openImage(index)}
            className="
              // w-full
              
              rounded
              border-t-[0.001rem]
              border-l-[0.001rem]
              border-b-[0.001rem]
              border-r-[0.001rem]
              border-t-brown
              border-l-brown
              border-b-orange
              border-r-orange
              cursor-default
              min-[901px]:rounded-lg
              min-[901px]:cursor-pointer
            "
          >
            <img
              src={photo.image}
              alt={`Galeria - zdjęcie ${index + 1}`}
              loading="lazy"
            
            />
          </div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}

      {currentIndex !== null && (
        <div
          onClick={closeImage}
          className="
            fixed
            inset-0
            z-[9999]
            hidden
            items-center
            justify-center
            bg-black/90
            min-[601px]:flex
            // animate-[galleryFadeIn_0.2s_ease]
          "
        >
      
          <img
            src={ArrayMenu[currentIndex].image}
            alt={`Galeria - zdjęcie ${currentIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="
              // block
              h-full
              w-auto
              // max-w-[100vw]
              max-h-[100vh]
              rounded
              // object-contain
              animate-[galleryImageIn_0.25s_ease]
              max-[900px]:max-w-[80vw]
              max-[900px]:max-h-[100vh]
            "
          />

          
        </div>
      )}
    </div>
  );
};

export default Menu;
