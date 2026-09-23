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

  // const nextImage = (event) => {
  //   event?.stopPropagation();

  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === ArrayMenu.length - 1 ? 0 : prevIndex + 1,
  //   );
  // };

  // const previousImage = (event) => {
  //   event?.stopPropagation();

  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? ArrayMenu.length - 1 : prevIndex - 1,
  //   );
  // };

  // Obsługa klawiatury i blokada przewijania
  // useEffect(() => {
  //   if (currentIndex === null) return;

  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       closeImage();
  //     }

  //     if (event.key === "ArrowRight") {
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex === ArrayMenu.length - 1 ? 0 : prevIndex + 1,
  //       );
  //     }

  //     if (event.key === "ArrowLeft") {
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex === 0 ? ArrayMenu.length - 1 : prevIndex - 1,
  //       );
  //     }
  //   };

  //   document.body.style.overflow = "hidden";

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.body.style.overflow = "";
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [currentIndex]);

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
              // className="
              //   block
              //   w-full
              //   h-full
                // aspect-[4/3]
              //   object-cover
              //   transition-none
              //   min-[601px]:transition-transform
              //   min-[601px]:duration-300
              //   min-[601px]:ease-in-out
              //   min-[601px]:hover:scale-125
              // "
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
          {/* Zamknięcie */}

          {/* <button
            type="button"
            aria-label="Zamknij zdjęcie"
            onClick={closeImage}
            className="
              absolute
              top-5
              right-[30px]
              z-[2]
              cursor-pointer
              border-0
              bg-transparent
              px-2.5
              py-[5px]
              text-[42px]
              font-light
              leading-none
              text-white
              opacity-80
              transition-opacity
              duration-200
              hover:opacity-100
            "
          >
            ×
          </button> */}

          {/* Poprzednie zdjęcie */}

          {/* <button
            type="button"
            aria-label="Poprzednie zdjęcie"
            onClick={previousImage}
            className="
              absolute
              top-1/2
              left-[25px]
              z-[2]
              -translate-y-1/2
              cursor-pointer
              border-0
              bg-transparent
              p-[15px]
              text-[60px]
              font-extralight
              leading-none
              text-white
              opacity-65
              transition-opacity
              duration-200
              hover:opacity-100
              max-[900px]:left-2.5
              max-[900px]:p-2.5
              max-[900px]:text-[50px]
            "
          >
            ‹
          </button> */}

          {/* Powiększone zdjęcie */}

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

          {/* Następne zdjęcie */}

          {/* <button
            type="button"
            aria-label="Następne zdjęcie"
            onClick={nextImage}
            className="
              absolute
              top-1/2
              right-[25px]
              z-[2]
              -translate-y-1/2
              cursor-pointer
              border-0
              bg-transparent
              p-[15px]
              text-[60px]
              font-extralight
              leading-none
              text-white
              opacity-65
              transition-opacity
              duration-200
              hover:opacity-100
              max-[900px]:right-2.5
              max-[900px]:p-2.5
              max-[900px]:text-[50px]
            "
          >
            ›
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Menu;
