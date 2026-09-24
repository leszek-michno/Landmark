import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/styles.css";

const OfferGold = () => {
  const [flipped, setFlipped] = useState(false);
  const { t } = useTranslation();

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="w-full h-96 xl:w-11/12 mx-auto"
      onClick={handleFlip}
      style={{ cursor: "pointer" }}
    >
      <div
        className="inner w-full h-full"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg shadow-lg bg-yellow-500 flex-col 
              border-t-[0.02rem]
              border-l-[0.02rem]
              border-b-[0.02rem]
              border-r-[0.02rem]
              border-t-red-500
              border-l-yellow-500
              border-b-yellow-500
              border-r-red-500">
          <h2 className="text-2xl text-amber-100 font-serif m-2 text-center">
            {t("offer.gold_title")}
          </h2>
          <h2 className="text-2xl text-amber-100 font-serif m-2 text-center">
            {t("offer.gold_tier")}
          </h2>
          <p className="text-amber-300 font-serif mt-2">
            {t("offer.click_more")}
          </p>
        </div>
        <div className="absolute w-full h-full bg-amber-500 saturate-50 text-black flex items-center justify-center rounded-lg shadow-lg rotate-y-180 backface-hidden">
          <p className="text-sm p-4">{t("offer.back_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferGold;