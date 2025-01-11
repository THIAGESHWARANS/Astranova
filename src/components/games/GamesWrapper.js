import { useState } from "react";
<<<<<<< HEAD
import logo from "../../assets/logo.png"; 
import { GiTimeSynchronization } from "react-icons/gi";
=======
import logo from "../../assets/logo.png";
// import { GiTimeSynchronization } from "react-icons/gi";
>>>>>>> origin/main
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { VscOrganization } from "react-icons/vsc";
import { SiEventstore } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GamesWrapper({ children, isOnline }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-black min-h-screen py-4 sm:py-8">
      <nav className="flex items-center justify-between pb-10 md:px-4">
        <Link to={"/"}>
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
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
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: { opacity: 1, x: 0 },
          }}
          onClick={() => setOpen(!open)}
          className="relative flex  items-center gap-2 mb-3 mr-4 lg:absolute lg:right-10 lg:top-24 cursor-pointer"
        >
          <p className="text-xl text-white AstranovaHeroFont tracking-widest">
            {" "}
            {open ? (
              <motion.div
                whileTap={{ scale: 0.6 }}
                className="flex items-center"
              >
<<<<<<< HEAD
                <span className="text-4xl text-teal-500">C</span>
=======
                <span className="text-4xl text-purple-500">C</span>
>>>>>>> origin/main
                <span className="mt-1">lose</span>
              </motion.div>
            ) : (
              <motion.div whileTap={{ scale: 0.6 }}>
<<<<<<< HEAD
                <span className="text-4xl text-teal-500">M</span>
=======
                <span className="text-4xl text-purple-500">M</span>
>>>>>>> origin/main
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
              className="absolute top-14 lg:top-10 z-100 right-0 opacity-95 w-72 h-auto bg-white rounded-lg AstranovaHeroFont "
              style={{
                zIndex: 10,
              }}
            >
              <ul>
                <Link
                  to={"/"}
<<<<<<< HEAD
                  className="flex text-lg px-4 py-4 items-center gap-3 rounded-t-lg  transition-all duration-300 ease-in-out  hover:bg-teal-300 "
                >
                  <HiOutlineHome size={20} />{" "}
                  <div className="text-teal-500 text-2xl ">
=======
                  className="flex text-lg px-4 py-4 items-center gap-3 rounded-t-lg  transition-all duration-300 ease-in-out  hover:bg-purple-300 "
                >
                  <HiOutlineHome size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
>>>>>>> origin/main
                    H<span className="text-black text-xl">ome</span>{" "}
                  </div>
                </Link>
                <Link
                  to={"/events"}
<<<<<<< HEAD
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                >
                  <SiEventstore size={20} />{" "}
                  <div className="text-teal-500 text-2xl ">
=======
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-purple-300 "
                >
                  <SiEventstore size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
>>>>>>> origin/main
                    E<span className="text-black text-xl">vents</span>{" "}
                  </div>
                </Link>
                <Link
                  to={"#"}
<<<<<<< HEAD
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                >
                  <GiTimeSynchronization size={20} />{" "}
                  <div className="text-teal-500 text-2xl ">
=======
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-purple-300 "
                >
                  <GiTimeSynchronization size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
>>>>>>> origin/main
                    C<span className="text-black text-xl">hronoline</span>{" "}
                  </div>
                </Link>
                {/* <Link
                  to={"/team"}
<<<<<<< HEAD
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                >
                  <VscOrganization size={20} />{" "}
                  <div className="text-teal-500 text-2xl ">
=======
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-purple-300 "
                >
                  <VscOrganization size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
>>>>>>> origin/main
                    O<span className="text-black text-xl">ur Team</span>{" "}
                  </div>
                </Link> */}
                <Link
                  to={"/contact-us"}
<<<<<<< HEAD
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-teal-300 "
                >
                  <VscOrganization size={20} />{" "}
                  <div className="text-teal-500 text-2xl ">
=======
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-purple-300 "
                >
                  <VscOrganization size={20} />{" "}
                  <div className="text-purple-500 text-2xl ">
>>>>>>> origin/main
                    C<span className="text-black text-xl">ontact Us</span>{" "}
                  </div>
                </Link>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </nav>
      <div className="mx-auto max-w-7xl  px-6 lg:px-8">
        {/* Events selection Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-white AstranovaHeroFont mb-20 mt-6 flex gap-12  justify-around sm:justify-center lg:gap-12 flex-wrap lg:flex-nowrap "
        >
          <Link
            to={"/games/online"}
            className={` ${
              isOnline
<<<<<<< HEAD
                ? "bg-teal-600 text-[#111111]"
                : "border  border-teal-600"
=======
                ? "bg-purple-600 text-[#111111]"
                : "border  border-purple-600"
>>>>>>> origin/main
            }
              px-6 py-1 flex items-center justify-center rounded-xl text-xl tracking-widest cursor-pointer `}
          >
            Online Games
          </Link>

          <Link
            to={"/games/offline"}
            className={` ${
              !isOnline
<<<<<<< HEAD
                ? "bg-teal-600 text-[#111111]"
                : "border  border-teal-600"
=======
                ? "bg-purple-600 text-[#111111]"
                : "border  border-purple-600"
>>>>>>> origin/main
            }
              px-6 py-4  flex items-center justify-center rounded-xl text-xl tracking-widest cursor-pointer `}
          >
            Offline Games
          </Link>
        </motion.div>
      </div>
      {/* Games cards Section */}
      {children}
    </div>
  );
}
