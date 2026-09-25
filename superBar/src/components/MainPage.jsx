import { useTranslation } from "react-i18next";
import heroImg from "../assets/data/images/IMG10.webp";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-1 bg-gradient-to-l from-red-950 to-stone-950">
      <section>
        <div
          className="w-11/12 xl:w-10/12 mx-auto grid md:grid-cols-2 items-center gap-[6vw]  
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
              bg-gradient-to-r from-red-950 to-stone-950"
        >
          <div className="text-right flex flex-col gap-1 mr-2">
            <h1
              className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-stone-300 font-swap italic"
              style={{ fontFamily: "cursive" }}
            >
              The Landmark
            </h1>
            <h2 className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold font-swap text-amber-600 saturate-80">
              SUPPER CLUB
            </h2>
          </div>
          <div>
            <img
              src={heroImg}
              alt="logo"
              className="w-full rounded-lg mx-auto"
            />
          </div>
        </div>

        <div className="my-10  mx-auto w-11/12  xl:w-10/12 rounded-lg">
          <div className="w-11/12 md:w-4/5 lg:w-8/12 xl:w-9/12 mx-auto">
            <h2 className="mt-2 text-xl text-amber-500 mb-2">
              {t("hero.about_title")}
            </h2>
            <div className=" text-slate-200 text-lg font-extralight">
              <p className="mb-2">{t("hero.p1")}</p>
              <p className="mb-2">{t("hero.p2")}</p>
              <p className="mb-2">{t("hero.p3")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;