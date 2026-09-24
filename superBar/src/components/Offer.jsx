import { useTranslation } from "react-i18next";
import OfferGold from "./OfferGold";
import OfferSilver from "./OfferSilver";
import OfferBronze from "./OfferBronze";
import SectionTitle from "./SectionTitle";

function Offer() {
  const { t } = useTranslation();

  return (
    <section
      className="pt-24 pb-10 text-lg bg-gradient-to-l from-red-950 to-stone-950"
      id="offer"
    >
      <SectionTitle text={t("sections.offer")} />

      <div className="flex flex-col lg:flex-row xl:w-10/12 md:w-10/12 lg:w-10/12 m-auto w-11/12 mt-6 gap-4">
        <OfferGold />
        <OfferSilver />
        <OfferBronze />
      </div>
    </section>
  );
}

export default Offer;
