// import sabu from "../../assets/sponsors/sabu.jpg";
// import cookery from "../../assets/sponsors/cookery.jpg";
// import madhuBuilders from "../../assets/sponsors/madhuBuilders.jpg";
// import HAC from "../../assets/sponsors/HAC.jpg";
import LegendsImg from "../../assets/sponsors/legends.jpeg";
import InnoColorImg from "../../assets/sponsors/inno-hr-training.png";
import AbitoImg from "../../assets/sponsors/abito.png";

// import { Link } from "react-router-dom";

export default function Sponsors() {
  return (
    <div className="bg-black-900 py-8 sm:py-8 mb-6">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <h2 className="text-center text-4xl tracking-wider font-semibold AstranovaHeroFont leading-8 text-white">
          <span className="text-5xl text-teal-500">G</span>old{" "}
          <span className="text-5xl text-teal-500">P</span>rize{" "}
          <span className="text-5xl text-teal-500">S</span>ponser
        </h2>
        <div className="mx-auto mt-16 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          <a
            href="https://www.legendsindia.co.in"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-h-64  w-full object-contain"
              src={LegendsImg}
              alt="Legends Company Logo"
            />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <h2 className="text-center text-4xl tracking-wider font-semibold AstranovaHeroFont leading-8 text-white">
          <span className="text-5xl text-teal-500">O</span>ur{" "}
          <span className="text-5xl text-teal-500">S</span>ponsers
        </h2>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
          <a
            href="https://www.innovservices.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-h-64  w-full object-contain"
              src={InnoColorImg}
              alt="Innovative HR & Training Services Logo"
            />
          </a>
          <img
            className="max-h-64  w-full object-contain"
            src={AbitoImg}
            alt="Abito Mobile Accessories Logo"
          />
        </div>
      </div>
    </div>
  );
}
