import heroImg from "../assets/data/images/IMG10.jpg";

const MainPage = () => {
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
              bg-gradient-to-r from-red-950 to-stone-950">

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
              loading="lazy"
            />
          </div>
        </div>

        <div className="my-10  mx-auto w-11/12  xl:w-10/12 rounded-lg">
          <div className="w-11/12 md:w-4/5 lg:w-8/12 xl:w-9/12 mx-auto">
            <h2 className="mt-2 text-xl text-amber-500 mb-2">
              Parę słów o nas:
            </h2>
            <div className=" text-slate-200 text-lg font-extralight">
              <p className="mb-2">
                Ogień, rytm i wspólne grillowanie w luźnej, nocnej atmosferze.
                Dbamy o świetny serwis i klimat, ale tutaj to Ty przejmujesz
                szczypce — bo największą frajdą jest grillowanie razem.
              </p>
              <p className="mb-2">
                Nie jesteśmy klasyczną restauracją. W centrum lokalu stoi duży
                grill, przy którym nasi goście sami przygotowują steki, sery,
                kiełbaski i to, na co akurat mają ochotę. Bez spiny, bez zadęcia
                — po prostu dobry vibe i jedzenie robione na własnych zasadach.
                Na klimatycznym Kazimierzu czekamy na Was codziennie aż do 2:00
                w nocy. Gdy inne miejsca zwijają rolety, u nas dopiero zaczyna
                się najlepsza część wieczoru.
              </p>
              <p className="mb-2">
                The Landmark Supper Club to luz, dobre drinki, zimne piwo,
                koncerty i wydarzenia na żywo — miejsce spotkań dla tych, którzy
                nie lubią kończyć nocy za wcześnie. Wpadajcie na ogień. Jesteśmy
                otwarci CODZIENNIE do 2:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
