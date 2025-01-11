import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { GrInstagram, GrMail } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { VscCallOutgoing } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer border-t-2 border-teal-600 pb-12">
      <div className="footer-container pb-6">
        <div className="footer-container1">
          <div className="footer-container11">
            <img src={logo} alt="Celestra Logo" className="footer-logo" />
            <h3 className="footer-title AstranovaHeroFont tracking-widest">
              <span className=" text-5xl text-teal-600">A</span>STRANOVA 2K24
            </h3>
          </div>
          <p className="about-us-text font-poppins  text-xl">
            The Department of Information Technology at Coimbatore Institute of
            Technology, Coimbatore hosts a highly anticipated National-level
            Technical Symposium.
          </p>
          <p className="text-2xl mt-4 text-center tracking-widest AstranovaHeroFont">
            Celebrate innovation with Astranova
          </p>
        </div>

        <div className="footer-container2 lg:pt-12 pt-8">
          <h3 className="text-4xl md:text-3xl AstranovaHeroFont tracking-widest">
            <span className="">L</span>inks
            <div className="h-1 mt-1 w-[55%] sm:w-[17%] lg:w-[45%] bg-teal-500 rounded-full"></div>
          </h3>
          <ul className="flex flex-col items-center text-2xl md:text-xl font-poppins tracking-wide ">
            <li className="footer-items  ">
              <Link to={"/about-us"} className="footer-links">
                <span>A</span>bout <span>U</span>s
              </Link>
            </li>
            <li className="footer-items ">
              <Link to={"/events"} className="footer-links">
                <span>E</span>vents
              </Link>
            </li>
            <li className="footer-items ">
              <Link to={"/games/online"} className="footer-links">
                <span>G</span>ames
              </Link>
            </li>
            <li className="footer-items  ">
              <Link to={"#"} className="footer-links">
                <span>C</span>hronoline
              </Link>
            </li>
            {/* <li className="footer-items  ">
              <Link to={"/team"} className="footer-links">
                <span>O</span>ur
                <span className=" ml-2">T</span>eam
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="footer-container3 lg:pt-12 pt-8">
          <h3 className="footer-title tracking-widest AstranovaHeroFont">
            <span className="">C</span>ontact
            <div className="h-1 w-[50%] sm:w-[17%] lg:w-[45%] bg-teal-500 rounded-full"></div>
          </h3>
          <ul className="flex flex-col gap-4 font-poppins">
            <li className="footer-row-align footer-items">
              <BsTelephoneFill size={20} className="icons phone" />
              <span className="text-2xl lg:text-lg">
                +91 97867 25825 , +91 90808 22469
              </span>
            </li>
            <li className="footer-row-align footer-items">
              <MdEmail size={20} className="icons email" />
              <span className="text-2xl lg:text-lg">
                astranova2k24@gmail.com
              </span>
            </li>
            <li className="footer-row-align footer-items address">
              <HiLocationMarker size={30} className="icons" />
              <span className="text-2xl lg:text-lg">
                Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
              </span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="horizontal-line" />

      <div className="flex flex-col gap-6 pt-4 lg:flex-row lg:px-2 justify-between  items-center">
        <div className="flex items-center font-poppins">
          <span className="text-2xl lg:text-lg">
            {" "}
            © {new Date().getFullYear()} Astranova . All Rights Reserved
          </span>
        </div>
        <div className=" flex items-center text-center gap-3 font-poppins text-2xl lg:text-lg">
          <p>Made with</p> <FaHeart color="red" size={25} />
          <p> by IT Devs</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/_astranova_2k24"
          >
            <GrInstagram size={18} className="social-media" />
          </a>
          <a target="_blank" rel="noreferrer" href="tel:+919786725825">
            <VscCallOutgoing size={18} className="social-media" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:astranova2k24@gmail.com"
          >
            <GrMail size={18} className="social-media " />
          </a>
          <Link to={"/contact-us"} target="_blank" rel="noreferrer">
            <RiCustomerService2Line size={18} className="social-media" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
