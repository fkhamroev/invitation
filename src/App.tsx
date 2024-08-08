import "./App.css";
import group1 from "../src/assets/Group_1.png";
import group2 from "../src/assets/Group_2.png";
import heart from "../src/assets/Vector.png";
import CountdownTimer from "./components/timer";

function App() {
  const targetDate = "2024-08-25T00:00:00";

  return (
    <>
      <header className="border rounded-header border-zinc-300 mx-auto  w-4/5 relative overflow-hidden h-header mt-10 flex flex-col items-center justify-center">
        <img
          src={group1}
          alt="group-photo"
          className="absolute left-0 bottom-0 h-4/5 z-[-1]"
        />
        <div>
          <h1 className="text-[#515151] text-2xl font-normal font-serif text-center ">
            ПРИГЛАШЕНИЕ НА СВАДЬБУ
          </h1>
          <div
            className="flex flex-col items-center gap-8 text-[#454444] mt-20"
            style={{ fontFamily: "Cormorant" }}
          >
            <h1 className="font-extrabold text-4xl">ФИРУЗЖОНА</h1>
            <h1 className="font-extrabold text-4xl">И</h1>
            <h1 className="font-extrabold text-4xl">НИГИНЫ</h1>
            <div className="flex flex-col items-center">
              <img src={heart} alt="heart-img" />
              <div
                className="text-[#454444] text-3xl font-bold"
                style={{ fontFamily: "Cormorant" }}
              >
                25 августа 2024 года
              </div>
            </div>
          </div>
        </div>
        <img
          src={group2}
          alt="group-photo"
          className="absolute right-0 top-0  h-4/5 object-cover z-[-1]"
        />
      </header>
      <main className="container mx-auto">
        <div className="flex flex-col items-center mt-20 ">
          <h1
            className="text-[#454444] text-4xl font-medium uppercase"
            style={{ fontFamily: "Cormorant", textAlign: "center" }}
          >
            Место проведения ТОРЖЕСТВА
          </h1>
          <div
            className="text-[#515151] text-2xl mt-5 "
            style={{ fontFamily: "Montserrat", textAlign: "center" }}
          >
            город Бухара, ресторан "Шербудин"
          </div>
          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=64.457642%2C39.767697&mode=search&oid=198231596322&ol=biz&z=21"
              width={"100%"}
              height="400"
              className="border mt-5"
              allowFullScreen
              style={{ borderRadius: "16px" }}
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 mt-20 relative border rounded-xl p-5 overflow-hidden">
          <div
            className="text-[#454444] text-3xl font-thin text-center"
            style={{ fontFamily: "Cormorant" }}
          >
            До торжества осталось...
          </div>
          <CountdownTimer targetDate={targetDate} />
          <img
            src={group1}
            alt="group-photo"
            style={{ height: "500px" }}
            className="absolute bottom-0 left-0 z-[-1]"
          />
          <h1 className="mt-5 text-6xl color-[#515151] font-normal font-serif text-center">
            МЫ ВАС ОЧЕНЬ ЖДЕМ!
          </h1>
          <img
            src={group2}
            alt="group-photo"
            style={{ height: "500px" }}
            className="absolute top-0 right-0 z-[-1]"
          />
        </div>
      </main>
    </>
  );
}

export default App;
