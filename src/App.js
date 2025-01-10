// import OurTeam from "./components/our-team/OurTeam";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/contact-us/ContactUs";
// import Chronoline from "./components/chronoline/Chronoline";
import AllEvents from "./components/all-events/AllEvents";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";

// Technical Events
import BugBusters from "./event-detail-page/technical-events/BugBusters";
import TechnicalQuiz from "./event-detail-page/technical-events/TechnicalQuiz";
import RelayCoding from "./event-detail-page/technical-events/RelayCoding";
// import WebMasters from "./event-detail-page/technical-events/WebMasters";
import Workshop from "./event-detail-page/technical-events/Workshop";
import Seminar from "./event-detail-page/technical-events/Seminar";
import CodeHunt from "./event-detail-page/technical-events/CodeHunt";
import PromptEngineering from "./event-detail-page/technical-events/PromptEngineering";

// Games
import OnlineGames from "./components/games/OnlineGames";
import OfflineGames from "./components/games/OfflineGames";

// Non Technical Events
import AstranovaCoding from "./event-detail-page/elite-events/AstranovaCoding";
import RapidCoding from "./event-detail-page/elite-events/RapidCoding";
import TreasureHunt from "./event-detail-page/non-technical-events/TreasureHunt";
import AnimeQuiz from "./event-detail-page/non-technical-events/AnimeQuiz";
import Connexion from "./event-detail-page/non-technical-events/Connexion";
import PosterDesigning from "./event-detail-page/non-technical-events/PosterDesigning";
import KollywoodQuiz from "./event-detail-page/non-technical-events/KollywoodQuiz";
import PaperPresentation from "./event-detail-page/technical-events/PaperPresentation";
import Valorant from "./game-detail-page/online-games/Valorant";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import astranovaLogo from "./assets/logo.png";
import { PropagateLoader } from "react-spinners";
import ReverseCoding from "./event-detail-page/technical-events/ReverseCoding";
import FreeFire from "./game-detail-page/online-games/FreeFire";
import BGMI from "./game-detail-page/online-games/BGMI";
import Ideathon from "./event-detail-page/technical-events/Ideathon";
import Chess from "./game-detail-page/online-games/Chess";
import MaathiYosi from "./event-detail-page/non-technical-events/MaathiYosi";
import DumbCharades from "./event-detail-page/non-technical-events/DumbCharades";

function App() {
  // Celestra Splash Loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col  items-center justify-center  text-center h-screen bg-black w-full ">
          <img
            src={astranovaLogo}
            alt="astranova-logo"
            className="w-[65%] lg:w-[25%] mb-6 animate-pulse"
          />
          <PropagateLoader size={20} color="#b825d6" loading={loading} />
        </div>
      ) : (
        <>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/team" element={<OurTeam />} /> */}
              <Route path="/events" element={<AllEvents />} />
              {/* <Route path="/chronoline" element={<Chronoline />} /> */}
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              {/* Technical-Events */}
              <Route path="/events/bug-busters" element={<BugBusters />} />
              <Route
                path="/events/technical-quiz"
                element={<TechnicalQuiz />}
              />
              <Route path="/events/relay-coding" element={<RelayCoding />} />
              {/* <Route path="/events/web-masters" element={<WebMasters />} /> */}
              <Route path="/events/workshop" element={<Workshop />} />
              <Route path="/events/seminar" element={<Seminar />} />
              <Route
                path="/events/reverse-coding"
                element={<ReverseCoding />}
              />
              <Route path="/events/code-hunt" element={<CodeHunt />} />
              <Route
                path="/events/prompt-engineering"
                element={<PromptEngineering />}
              />

              {/* Non-Technical Events */}
              <Route path="/events/treasure-hunt" element={<TreasureHunt />} />
              <Route path="/events/anime-quiz" element={<AnimeQuiz />} />
              <Route path="/events/connexion" element={<Connexion />} />
              <Route
                path="/events/poster-designing"
                element={<PosterDesigning />}
              />
              <Route
                path="/events/kollywood-quiz"
                element={<KollywoodQuiz />}
              />
              <Route path="/events/maathi-yosi" element={<MaathiYosi />} />
              <Route path="/events/dumb-charades" element={<DumbCharades />} />

              {/* Elite Events */}
              <Route
                path="/events/astranova-coding"
                element={<AstranovaCoding />}
              />
              <Route path="/events/rapid-coding" element={<RapidCoding />} />
              <Route
                path="/events/paper-presentation"
                element={<PaperPresentation />}
              />
              <Route path="/events/ideathon" element={<Ideathon />} />
              <Route path="/games/online/valorant" element={<Valorant />} />
              <Route path="/games/online/free-fire" element={<FreeFire />} />
              <Route path="/games/online/bgmi" element={<BGMI />} />

              {/*Online & Offline Games */}
              <Route path="/games/online" element={<OnlineGames />} />
              <Route path="/games/offline" element={<OfflineGames />} />
              {/* Online Games */}
              <Route path="/games/online/chess" element={<Chess />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
