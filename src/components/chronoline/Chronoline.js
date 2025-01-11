import React, { useEffect } from "react";
import "./chronoline.css";
import { GiTimeBomb } from "react-icons/gi";
import { TiLocation } from "react-icons/ti";
import logo from "../../assets/logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { SiEventstore, SiRiotgames } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const march08Events = [
  {
    name: "Reverse Coding",
    time: "9:30 AM to 11:30 AM",
    venue: "IT-442",
  },
  {
    name: "Paper Presentation",
    time: "Starts at 10:00 AM",
    venue: "IT-443",
  },
  {
    name: "Anime Quiz",
    time: "10:30 AM to 11:30 AM",
    venue: "IT-443",
  },
  {
    name: "Astranova Coding",
    time: "11:00 AM to 01:00 PM",
    venue: "IT-442",
  },
  {
    name: "Technical Quiz",
    time: "01:45 PM to 03:00 PM",
    venue: "IT-206",
  },
  {
    name: "Connexion",
    time: "02:00 PM to 03:15 PM",
    venue: "IT-206",
  },
  {
    name: "Code Hunt",
    time: "03:00 PM to 04:30 PM",
    venue: "IT-444",
  },
  {
    name: "Treasure Hunt",
    time: "03:00 PM to 04:30 PM",
    venue: "IT Block",
  },
];

const march09Events = [
  {
    name: "Bug Busters",
    time: "09:00 AM to 10:00 AM",
    venue: "IT-206",
  },
  {
    name: "Rapid Coding",
    time: "09:30 AM to 11:00 AM",
    venue: "IT-207",
  },
  {
    name: "Kollywood Quiz",
    time: "10:30 AM to 11:30 AM",
    venue: "IT-206",
  },
  {
    name: "Relay Coding",
    time: "11:00 AM to 01:00 PM",
    venue: "IT-442",
  },
  {
    name: "Maathi Yosi",
    time: "12:30 PM to 01:30 PM",
    venue: "IT-444",
  },
  {
    name: "Ideathon",
    time: "02:00 PM to 04:00 PM",
    venue: "IT-443",
  },
  {
    name: "Dumb Charades",
    time: "02:30 PM to 03:30 PM",
    venue: "IT-443",
  },
  {
    name: "Prompt Engineering",
    time: "02:30 PM to 03:30 PM",
    venue: "IT-206",
  },
];

const Chronoline = () => {
  useEffect(() => {
    let item = document.querySelectorAll(".timeline li");
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function callback() {
      for (let i = 0; i < item.length; i++) {
        if (isElementInViewport(item[i])) {
          item[i].classList.add("in-view");
        }
      }
    }
    window.addEventListener("load", callback);
    window.addEventListener("resize", callback);
    window.addEventListener("scroll", callback);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener("load", callback);
      window.removeEventListener("resize", callback);
      window.removeEventListener("scroll", callback);
    };
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ASTRANOVA | Chronoline</title>
      </Helmet>
      <div className="timeline font-poppins">
        <nav className="flex items-center justify-between md:px-4">
          <Link to={"/"}>
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.3 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              src={logo}
              alt="celestra-logo"
              className="lg:absolute lg:left-4 lg:top-6 w-44 md:w-52 rounded-full"
            />
          </Link>

          {/* Menu */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.3 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            onClick={() => setOpen(!open)}
            className="relative flex items-center gap-2 mb-3 mr-4 lg:absolute lg:right-10 lg:top-20 cursor-pointer"
          >
            <p className="text-xl text-white AstranovaHeroFont tracking-widest">
              {" "}
              {open ? (
                <motion.div
                  whileTap={{ scale: 0.6 }}
                  className="flex items-center"
                >
                  <span className="text-4xl text-teal-500">C</span>
                  <span className="mt-1">lose</span>
                </motion.div>
              ) : (
                <motion.div whileTap={{ scale: 0.6 }}>
                  <span className="text-4xl text-teal-500">M</span>
                  <span>enu</span>
                </motion.div>
              )}
            </p>
            <span className={`mt-2 ${open && "rotate-90"}`}>
              <AiOutlineDoubleRight size={20} color="white" />
            </span>
            {/* DropDown Menu */}
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute top-14 right-0 lg:-right-10 opacity-95 w-72 h-auto bg-white rounded-lg AstranovaHeroFont"
              >
                <ul>
                  <Link
                    to={"/"}
                    className="flex text-lg px-4 py-4 items-center gap-3 rounded-t-lg  transition-all duration-300 ease-in-out  hover:bg-teal-300 "
                  >
                    <HiOutlineHome size={20} />{" "}
                    <div className="text-teal-500 text-2xl ">
                      H<span className="text-black text-xl">ome</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/about-us"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                  >
                    <TbUnlink size={20} />{" "}
                    <div className="text-teal-500 text-2xl ">
                      A<span className="text-black text-xl">bout Us</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/events"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                  >
                    <SiEventstore size={20} />{" "}
                    <div className="text-teal-500 text-2xl ">
                      E<span className="text-black text-xl">vents</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/games/online"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                  >
                    <SiRiotgames size={20} />{" "}
                    <div className="text-teal-500 text-2xl ">
                      G<span className="text-black text-xl">ames</span>{" "}
                    </div>
                  </Link>
                  {/* <Link
                    to={"/team"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                  >
                    <VscOrganization size={20} />{" "}
                    <div className="text-teal-500 text-2xl ">
                      O<span className="text-black text-xl">ur Team</span>{" "}
                    </div>
                  </Link> */}
                  <Link
                    to={"/contact-us"}
                    className="flex text-lg px-4 py-4 items-center gap-3 rounded-b-lg  transition-all duration-300 ease-in-out hover:bg-teal-300 "
                  >
                    <FaTeamspeak size={20} />{" "}
                    <div className="text-teal-500 text-2xl ">
                      C<span className="text-black text-xl">ontact Us</span>{" "}
                    </div>
                  </Link>
                </ul>
              </motion.div>
            )}
          </motion.div>
        </nav>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.3 }}
          variants={{
            hidden: { opacity: 0, x: 120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-4xl mt-10 lg:mt-20 tracking-wider text-white AstranovaHeroFont text-center mb-12 lg:mb-20"
        >
          <span className="text-6xl text-[rgb(155,0,230)] tracking-widest">
            C
          </span>
          hronoline
        </motion.p>

        <h2 className="text-white AstranovaHeroFont text-center text-4xl tracking-widest mb-20">
          <span className="text-5xl text-teal-600">M</span>arch 08
        </h2>
        {/* Chronoline Container */}
        {/* March 17 Events */}
        <span>
          <ul>
            {march08Events?.map((event) => (
              <li key={event.name}>
                {/* Event Card */}
                <div>
                  <h3 className="text-3xl tracking-widest AstranovaHeroFont mb-4">
                    {event.name}
                  </h3>
                  <span className="flex items-center gap-10">
                    <span>
                      <p className="flex items-center gap-2 text-xl">
                        {" "}
                        <GiTimeBomb size={25} /> {event.time}
                      </p>
                    </span>
                    <p className="flex items-center gap-1 text-xl">
                      <TiLocation size={25} /> {event.venue}
                    </p>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </span>

        <span>
          <h2 className="text-white AstranovaHeroFont text-center text-4xl tracking-widest mt-24 mb-12">
            <span className="text-5xl text-teal-600">M</span>arch 09
          </h2>
          <ul>
            {march09Events?.map((event) => (
              <li key={event.name}>
                {/* Event Card */}
                <div>
                  <h3 className="text-3xl tracking-widest AstranovaHeroFont mb-4">
                    {event.name}
                  </h3>
                  <span className="flex items-center gap-10">
                    <span>
                      <p className="flex items-center gap-2 text-xl">
                        {" "}
                        <GiTimeBomb size={25} /> {event.time}
                      </p>
                    </span>
                    <p className="flex items-center gap-1 text-xl">
                      <TiLocation size={25} /> {event.venue}
                    </p>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Chronoline;
