import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./events-gallery.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GiBrightExplosion } from "react-icons/gi";

// Events Gallery Images
import AnimeQuiz from "../../assets/event-images/animequiz.jpg";
// import Dart from "../../assets/games-images/offline/dart.jpg";
import AstranovaCoding from "../../assets/event-images/celestra-coding.jpg";
import RapidCoding from "../../assets/event-images/reversecoding.jpg";
// import Workshop from "../../assets/event-images/workshop.jpg";
import Valorant from "../../assets/event-images/valorantLogo2.jpg";
import BGMI from "../../assets/event-images/bgmi.jpeg";
import PaperPresenteation from "../../assets/event-images/paperpresentation.jpg";
import KollywoodQuiz from "../../assets/event-images/moviequiz.jpg";
// import OnlineGamesImg from "../../assets/games-images/online/online-games.jpg";
// import OfflineGamesImg from "../../assets/games-images/offline/offline-games.jpg";
import { Link } from "react-router-dom";

const eventsList = [
  {
    id: 1,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-teal-600 tracking-widest">A</span>
        stranova Coding
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-teal-500 tracking-widest">A</span>
        stranova Coding
      </h2>
    ),
    image: AstranovaCoding,
    description:
      "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
    path: "/events/astranova-coding",
  },
  {
    id: 2,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-teal-600 tracking-widest">A</span>
        nime Quiz
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-teal-500 tracking-widest">A</span>
        nime Quiz
      </h2>
    ),
    image: AnimeQuiz,
    description:
      "Are you ready for the ultimate anime showdown? Round one of our Anime Quiz event will test your knowledge with 20 challenging questions. Write down your answers on the provided sheet and prove you're a true otaku!",
    path: "/events/anime-quiz",
  },
  {
    id: 3,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-teal-600 tracking-widest">V</span>
        alorant
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-teal-500 tracking-widest">V</span>
        alorant
      </h2>
    ),
    image: Valorant,
    description:
      "Step into the near-future world of Valorant and experience heart-pumping action and intense strategy with your team. Choose your unique agent with special abilities and compete in a tactical shooter game that will test your skills and leave you wanting more.",
    path: "/games/online/valorant",
  },
  {
    id: 4,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-teal-600 tracking-widest">B</span>
        GMI
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-teal-500 tracking-widest">B</span>
        GMI
      </h2>
    ),
    image: BGMI,
    description:
      "Get ready to hit the bullseye and unleash your inner champion with our dart game event! Whether you're a seasoned pro or a beginner, come and join the fun as we throw darts and take aim at the target.",
    path: "/games/online/bgmi",
  },
  {
    id: 5,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-teal-600 tracking-widest">P</span>
        aper Presentation
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-teal-500 tracking-widest">P</span>
        aper Presentation
      </h2>
    ),
    image: PaperPresenteation,
    description:
      "DevOps is the combination of cultural philosophies, practices, and tools that increases an organisation’s ability to deliver applications and services at high velocity.",
    path: "/events/paper-presentation",
  },
  {
    id: 6,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-teal-600 tracking-widest">R</span>
        apid Coding
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-teal-500 tracking-widest">R</span>
        apid Coding
      </h2>
    ),
    image: RapidCoding,
    description:
      "Discover new horizons and challenge yourself with the ultimate online games experience!",
    path: "/events/rapid-coding",
  },
  {
    id: 7,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-teal-600 tracking-widest">K</span>
        ollywood Quiz
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-teal-500 tracking-widest">K</span>
        ollywood Quiz
      </h2>
    ),
    image: KollywoodQuiz,
    description:
      "Step away from the screens and enjoy the timeless pleasure of offline games that never go out of style!",
    path: "/events/kollywood-quiz",
  },
];

const Events = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const handleMouseEnter = (id) => {
    setIsHovering(true);
    setCurrentCard(id);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleTouchStart = (id) => {
    setIsHovering(true);
    setCurrentCard(id);
  };

  return (
    <div className="cont">
      <div className="px-4 py-12  bg-black max-w-screen-7xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center text-white tracking-widest AstranovaHeroFont">
          <span className="text-7xl text-teal-500 ">A</span>stranova Gallery
        </h1>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {/* Event Card */}
          {eventsList?.map((event) => (
            <SwiperSlide key={event.id}>
              <div
                onMouseOver={() => handleMouseEnter(event.id)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => handleTouchStart(event.id)}
                className="relative"
              >
                <img src={event.image} alt="slide_image" />
                {(!isHovering || currentCard !== event.id) && (
                  <div className="absolute left-0 bottom-0 h-auto px-3 py-4 md:py-12 w-full AstranovaHeroFont text-white bg-[#0101017f]">
                    {event.name}
                  </div>
                )}
                <div
                  className={`absolute left-0 bottom-0 h-auto px-3 py-4 md:py-8 w-full AstranovaHeroFont text-white bg-[#0101019d] transition-opacity duration-300 ease-in-out ${
                    isHovering && currentCard === event.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {event.hoverName}
                  <p className="text-md mb-4">{event.description}</p>
                  {/* Explore Button */}
                  <button className="flex flex-col text-2xl">
                    <Link to={event.path} className="flex items-center">
                      <span className="text-4xl">E</span>
                      <span className="mt-2">xplore </span>
                      <span className="ml-4 mt-1">
                        <GiBrightExplosion size={25} color="teal" />
                      </span>
                    </Link>
                    <div className="h-1  w-[30%] sm:w-[40%] lg:w-[50%]  bg-teal-500 rounded-full"></div>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Slide Controller */}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <IoIosArrowBack color="black" size={25} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <IoIosArrowForward color="black" size={25} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
