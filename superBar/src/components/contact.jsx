import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import SectionTitle from "./SectionTitle";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full px-2 pb-8 pt-24 text-lg bg-gradient-to-l from-red-950 to-stone-950"
      id="kontakt"
    >
      <SectionTitle text={t("sections.contact")} />

      <div
        className="flex xl:flex-row flex-col gap-2 items-center justify-center xl:w-10/12 mx-auto
              border-t-[0.02rem]
              border-l-[0.02rem]
              border-b-[0.02rem]
              border-r-[0.02rem]
              border-t-red-500
              border-l-yellow-500
              border-b-yellow-500
              border-r-red-500
              rounded-lg
              p-6
              min-[601px]:p-8
              min-[901px]:p-5
              bg-gradient-to-l from-stone-900 to-stone-900"
      >
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};