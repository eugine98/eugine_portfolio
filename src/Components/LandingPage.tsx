import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { useInView } from "framer-motion";
import { Stars, SpotLight, Line } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRef } from "react";
// import img from "../assets/img/portfolio_pic.jpg";
import img from "../assets/img/pixel.png";
import project1 from "../assets/img/pc.png";
import arrow from "../assets/img/arrow.gif";
import linked_in from "../assets/img/linked_in.png";
import fb from "../assets/img/fb.png";
import email from "../assets/img/email.png";
import git_hub from "../assets/img/git_hub.png";
import telegram from "../assets/img/telegram.png";
import discord from "../assets/img/discord.png";
import instagram from "../assets/img/instagram.png";
import react from "../assets/img/react.png";
import ts from "../assets/img/ts.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import mysql from "../assets/img/mysql.png";
import js from "../assets/img/js.png";
import vb from "../assets/img/vb.png";
import tw from "../assets/img/tw.png";
import mui from "../assets/img/mui.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DownloadIcon from "@mui/icons-material/Download";
import Expandable from "./Expandable";

import Footer from "./Footer";
import { duration } from "@mui/material";

function LandingPage() {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const refAbout = useRef<HTMLDivElement>(null);
  const isInViewAbout = useInView(refAbout);

  const refProject = useRef<HTMLDivElement>(null);
  const isInViewProject = useInView(refProject);

  const refProject_2 = useRef<HTMLDivElement>(null);
  const isInViewProject_2 = useInView(refProject_2);

  const refSkill = useRef<HTMLDivElement>(null);
  const isInViewSkill = useInView(refSkill);

  const refEducation = useRef<HTMLDivElement>(null);
  const isInViewEducation = useInView(refEducation);

  const navigateToDiv1 = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" });
    animate("#about", { scale: 1.5, color: "white" }, { duration: 0.2 });
    animate("#project", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#skill", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#education", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
  };
  const navigateToDiv2 = () => {
    refProject.current?.scrollIntoView({ behavior: "smooth" });
    animate("#about", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#project", { scale: 1.5, color: "white" }, { duration: 0.2 });
    animate("#skill", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#education", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
  };

  const navigateToDiv2_1 = () => {
    refProject_2.current?.scrollIntoView({ behavior: "smooth" });
    animate("#about", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#project", { scale: 1.5, color: "white" }, { duration: 0.2 });
    animate("#skill", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#education", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
  };

  const navigateToDiv3 = () => {
    refSkill.current?.scrollIntoView({ behavior: "smooth" });
    animate("#about", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#project", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#skill", { scale: 1.5, color: "white" }, { duration: 0.2 });
    animate("#education", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
  };

  const navigateToDiv4 = () => {
    refEducation.current?.scrollIntoView({ behavior: "smooth" });
    animate("#about", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#project", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#skill", { scale: 1, color: "#ab87ff" }, { duration: 0.2 });
    animate("#education", { scale: 1.5, color: "white" }, { duration: 0.2 });
  };

  const handleAnimate = async () => {
    handleAnimateText();
    handleAnimateDownload();
    await animate("#instagram", { y: 0 }, { duration: 0.3 });
    await animate("#instagram", { rotate: "180deg" }, { duration: 0.2 });
    await animate("#instagram", { x: 0 }, { duration: 0.1 });
    animate("#instagram", { rotate: "0deg" }, { duration: 1 });

    await animate("#discord", { y: 0 }, { duration: 0.3 });
    await animate("#discord", { rotate: "180deg" }, { duration: 0.2 });
    await animate("#discord", { x: 0 }, { duration: 0.1 });
    animate("#discord", { rotate: "0deg" }, { duration: 1 });

    await animate("#telegram", { y: 0 }, { duration: 0.3 });
    await animate("#telegram", { rotate: "180deg" }, { duration: 0.2 });
    await animate("#telegram", { x: 0 }, { duration: 0.1 });
    animate("#telegram", { rotate: "0deg" }, { duration: 1 });

    await animate("#git", { y: 0 }, { duration: 0.3 });
    await animate("#git", { rotate: "180deg" }, { duration: 0.2 });
    await animate("#git", { x: 0 }, { duration: 0.2 });
    animate("#git", { rotate: "0deg" }, { duration: 1 });

    await animate("#email", { y: 0 }, { duration: 0.3 });
    await animate("#email", { rotate: "180deg" }, { duration: 0.2 });
    await animate("#email", { x: 0 }, { duration: 0.3 });
    animate("#email", { rotate: "0deg" }, { duration: 1 });

    await animate("#fb", { y: 0 }, { duration: 0.3 });
    await animate("#fb", { rotate: "180deg" }, { duration: 0.2 });
    await animate("#fb", { x: 0 }, { duration: 0.3 });
    animate("#fb", { rotate: "0deg" }, { duration: 1 });

    await animate("#link", { y: 0 }, { duration: 0.3 });
    await animate("#link", { rotate: "180deg" }, { duration: 0.2 });
    await animate("#link", { x: 0 }, { duration: 0.3 });

    animate("#link", { rotate: "0deg" }, { duration: 1.5 });

    await animate("#download", { opacity: 1, y: 0 }, { duration: 1 });
  };

  const handleAnimateDownload = async () => {};
  const handleAnimateViewButton = async () => {
    await animate("#view", { x: 500 }, { duration: 0.3 });
  };

  const handleAnimateText = async () => {
    await animate("#hi", { y: 0, color: "#b892ff" }, { duration: 0.7 });
    // await animate("#hi", { y: -9, color: "blue" }, { duration: 0.4 });
    // await animate("#hi", { y: 0 }, { duration: 0.3 });
    // await animate("#hi", { y: -2 }, { duration: 0.1 });
    await animate("#hi", { opacity: 0 }, { duration: 1 });
    animate("#hi", { opacity: 1, color: "white" }, { duration: 0.5 });

    await animate("#im", { y: 0, rotate: "0deg" }, { duration: 1.5 });
    await animate("#im", { rotate: "5deg" }, { duration: 0.4 });
    await animate("#im", { rotate: "0deg" }, { duration: 0.4 });

    await animate("#web", { y: 0 }, { duration: 0.7 });
    await animate("#web", { y: -9 }, { duration: 0.4 });
    await animate("#web", { y: 0 }, { duration: 0.3 });
    await animate("#web", { y: -2 }, { duration: 0.1 });
    await animate("#web", { y: 0 }, { duration: 0.1 });
  };

  const handleHeaderBg = async () => {
    if (isInView) {
      await animate("#header", {
        background: "rgb(33,5,65)",
        backgroundImage:
          "linear-gradient(90deg, rgba(33,5,65,1) 0%, rgba(55,0,131,1) 56%, rgba(92,0,222,1) 100%)",
      });
    } else {
      const headerElement = document.getElementById("header");
      // Check if the element exists
      if (headerElement) {
        // Apply transition effect
        headerElement.style.transition = "background 0.5s ease-in-out";
        headerElement.style.background = "black";
      }
      animate("#about", { scale: 1, color: "#ab87ff" }, { duration: 0.3 });
      animate("#project", { scale: 1, color: "#ab87ff" }, { duration: 0.3 });
      animate("#skill", { scale: 1, color: "#ab87ff" }, { duration: 0.3 });
      animate("#education", { scale: 1, color: "#ab87ff" }, { duration: 0.3 });
    }
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  useEffect(() => {
    handleHeaderBg();
    // console.log(isInView);
  }, [isInView]);

  //onMouseMove
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updatePosition = (event: any) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <>
      <div
        ref={scope}
        style={{
          background: "rgb(69,69,69)",
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "100vh",
        }}
        // className="relative z-10"
        // onMouseMove={updatePosition}
      >
        <div
          id="header"
          className="flex justify-end text-white relative z-50 max-h-14 w-full"
          style={{
            position: "sticky",
            top: 0,
            color: "#ab87ff",
            fontSize: "11px",
            // background: "rgb(33,5,65)",
            // backgroundImage:
            //   "linear-gradient(90deg, rgba(33,5,65,1) 0%, rgba(55,0,131,1) 56%, rgba(92,0,222,1) 100%)",
          }}
        >
          <motion.p
            className="mr-5 p-4 font-semibold hover:cursor-pointer "
            id="about"
            onClick={() => navigateToDiv1()}
          >
            About Me
          </motion.p>
          <motion.p
            className="mr-5 p-4 font-semibold hover:cursor-pointer"
            id="project"
            onClick={() => navigateToDiv2()}
          >
            Projects
          </motion.p>
          <motion.p
            id="skill"
            className="mr-5 p-4 font-semibold hover:cursor-pointer"
            onClick={() => navigateToDiv3()}
          >
            Skills
          </motion.p>
          <motion.p
            id="education"
            className="mr-5 p-4 font-semibold hover:cursor-pointer"
            onClick={() => navigateToDiv4()}
          >
            Education
          </motion.p>
        </div>
        <div
          className="grid grid-cols-1 tablet:pl-56 tablet:pr-56 pl-14 pr-14 pt-5 text-white relative z-10 w-full  tablet:grid-cols-2"
          style={{ height: "100vh", scrollSnapAlign: "start" }}
        >
          <div className="flex justify-center">
            <div className="tablet:mt-36 mt-20 w-80 tablet:w-full ml-10 tablet:ml-0">
              <motion.h1
                initial={{ y: -500 }}
                id="hi"
                className="text-xl tablet:text-4xl"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Hi There,
              </motion.h1>
              <motion.h1
                initial={{ y: -500, rotate: "360deg" }}
                id="im"
                className="text-xl tablet:mt-2 font-bold tablet:text-4xl"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                i am Eugine
              </motion.h1>
              <motion.p
                initial={{ y: -500 }}
                id="web"
                className="text-xl tablet:mt-3 tablet:text-2xl"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                i am into{" "}
                <span style={{ color: "#b892ff", fontSize: "22px" }}>
                  Web Development.
                </span>
              </motion.p>

              <div className="mt-2 tablet:mt-6 flex justify-between w-72">
                <motion.div
                  initial={{ x: -100, y: -500 }}
                  id="link"
                  className="h-8 w-8 rounded-full flex justify-center mr-1"
                  // initial={{ x: 20 }}
                  // whileInView={{ x: 0 }}
                >
                  <img
                    className="rounded-full hover:cursor-pointer  hover:animate-spin "
                    src={linked_in}
                    alt={linked_in}
                  />
                </motion.div>
                <motion.div
                  className="h-8 w-8 rounded-full  flex justify-center mr-1 "
                  initial={{ x: -143, y: -500 }}
                  id="fb"
                >
                  <img
                    className="rounded-full hover:cursor-pointer hover:scale-110"
                    src={fb}
                    alt={fb}
                  />
                </motion.div>
                <motion.div
                  className="h-8 w-8 rounded-full  flex justify-center mr-1 "
                  initial={{ x: -185, y: -500 }}
                  id="email"
                >
                  <img
                    className="rounded-full hover:cursor-pointer hover:scale-110"
                    src={email}
                    alt={email}
                  />
                </motion.div>
                <motion.div
                  className="h-8 w-8 rounded-full  flex justify-center mr-1 "
                  initial={{ x: -227, y: -500 }}
                  id="git"
                >
                  <img
                    className="rounded-full hover:cursor-pointer hover:scale-110"
                    src={git_hub}
                    alt={git_hub}
                  />
                </motion.div>
                <motion.div
                  className="h-8 w-8 rounded-full  flex justify-center mr-1 "
                  initial={{ x: -269, y: -500 }}
                  id="telegram"
                >
                  <img
                    className="rounded-full hover:cursor-pointer hover:scale-110"
                    src={telegram}
                    alt={telegram}
                  />
                </motion.div>
                <motion.div
                  className="h-8 w-8 rounded-full  flex justify-center mr-1 "
                  initial={{ x: -311, y: -500 }}
                  id="discord"
                >
                  <img
                    className="rounded-full hover:cursor-pointer hover:scale-110"
                    src={discord}
                    alt={discord}
                  />
                </motion.div>
                <motion.div
                  className="h-8 w-8 rounded-full  flex justify-center mr-1 "
                  initial={{ x: -353, y: -500 }}
                  id="instagram"
                >
                  <img
                    className="rounded-full hover:cursor-pointer hover:scale-110"
                    src={instagram}
                    alt={instagram}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              className="rounded-full tablet:h-72 tablet:w-72  flex justify-center tablet:mt-24  h-60 w-60 min-w-60"
              // src={blue} // Use img directly without require
              src={img} //
              alt={img}
              // onClick={addToCardClick}
              // onClick={() => alert(img)}
            />
          </div>
          <div className="flex tablet:justify-start justify-center">
            <motion.div
              className="flex justify-center h-10 w-44 "
              onMouseEnter={() =>
                animate(
                  "#download",
                  {
                    clipPath: [
                      "polygon(0 0, 0 0, 0 100%, 0 100%)",
                      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    ],
                    background: "white",
                    color: "black",
                  },
                  { duration: 0.2 }
                )
              }
              onMouseLeave={() =>
                animate(
                  "#download",
                  {
                    clipPath: [
                      "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                      "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                    ],
                    background: "black",
                    color: "white",
                  },
                  { duration: 0.2 }
                )
              }
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                id="download"
                // initial={{ y: -700, x: -220 }}
                whileTap={{ scale: "0.96", rotate: "0.5deg" }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                style={{
                  // fontSize: "9px",
                  fontFamily: "Montserrat, sans-serif",
                  border: "1px solid white",
                  clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                }}
                type="button"
                className="p-2 text-gray-100 rounded-sm flex justify-center pr-4 h-10 w-44"
                // onClick={() => addToCart()}
              >
                {/* <AddShoppingCartIcon
                sx={{
                  width: "14px",
                  height: "14px",
                  marginRight: "1px",
                }}
              /> */}
                <DownloadIcon className="animate-pulse mr-1" />
                Download CV
              </motion.button>
              {/* <img
              className="w-12 h-12"
              src={arrow}
              alt={arrow}
              // style={{ marginLeft: "440px" }}
            /> */}
            </motion.div>
          </div>
        </div>
        <div ref={ref} className="mt-20">
          <motion.div
            // onMouseEnter={() => navigateToDiv1()}
            // whileInView={alert(34)}
            // onViewportEnter={() => alert(1)}
            style={{
              scrollSnapAlign: "start",
              transition: "scroll-snap-align 0.5s ease",
            }}
            // onViewportEnter={() =>
            //   refAbout.current?.scrollIntoView({ behavior: "smooth" })
            // }
            ref={refAbout}
            className="pb-36 mt-44 text-white pt-10  relative z-10  w-full h-screen"
          >
            <h1
              className="text-xl font-semibold tablet:pl-56 tablet:mt-20 mt-16 ml-10"
              style={{
                fontSize: "30px",
                fontFamily: "'Inter Tight', sans-serif",
              }}
            >
              About Me
            </h1>
            <div className="flex items-center justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                className="tablet:mt-8 tablet:w-1/2 mt-5 p-7 marker:w-"
                initial={{ opacity: 0, x: -60 }}
                transition={{ duration: 1 }}
              >
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  className="text-xs tablet:text-sm"
                >
                  {/* <Expandable>
                  As a dedicated web developer with 100 years of experience, I
                  bring a passion for creating innovative and user-friendly
                  digital experiences. Specializing in front-end development, I
                  thrive on turning concepts into visually appealing and
                  functional websites. With a keen eye for detail and a
                  commitment to staying current with the latest technologies, I
                  strive to deliver high-quality results that exceed
                  expectations. Let's collaborate to bring your ideas to life in
                  the digital world.
                </Expandable> */}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam exercitationem odio eveniet laborum rerum nesciunt
                  provident quia minus. Veniam reiciendis beatae inventore
                  asperiores modi pariatur ipsum dicta praesentium reprehenderit
                  adipisci repellat ducimus ab, itaque fuga molestias labore
                  quasi totam blanditiis provident alias debitis dolorem.
                  Consectetur nostrum, delectus perferendis eum quod voluptas
                  laborum enim unde quasi error beatae quam fugiat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quidem tempora
                  praesentium maxime, amet fuga neque minus error cupiditate
                  quaerat officiis. Repudiandae ullam maxime aperiam aliquid
                  repellat totam doloribus deleniti magni, neque ut ipsam
                  suscipit fugit aspernatur tempore odit at excepturi
                  perferendis enim esse quidem facere magnam similique! Odit
                  inventore aliquam saepe, dolorem cupiditate maiores labore ea
                  illo ullam, unde eum. Reiciendis vitae illo ut debitis velit.
                  Ea architecto, maiores consequatur esse consequuntur itaque,
                  quas quaerat, cum ab quod temporibus rem praesentium corrupti
                  iure. Suscipit, et. Iusto reprehenderit doloribus, error quam
                  quos voluptates porro asperiores ullam minus consequuntur
                  consequatur corrupti et.
                </p>
              </motion.div>
              {/* <button className="">Download CV</button> */}
            </div>
          </motion.div>
          <motion.div
            ref={refProject}
            className="pt-20 pb-20 text-white relative z-10  w-full h-screen"
            // style={{ height: "100vh" }}
            style={{ scrollSnapAlign: "start" }}
            // onMouseEnter={() => navigateToDiv2()}
            // onFocus={() => alert(2)}
          >
            <h1
              className="text-xl font-semibold tablet:pl-56 tablet:mt-10 mt-5 ml-10"
              style={{
                fontSize: "30px",
                fontFamily: "'Inter Tight', sans-serif",
              }}
            >
              Projects
            </h1>
            <div className="flex justify-center ">
              <motion.img
                onHoverStart={() =>
                  animate("#p1", { x: 500 }, { duration: 0.3 })
                }
                whileHover={{ rotate: "5deg" }}
                className="tablet:h-96 tablet:mt-10 relative z-10 mt-10  w-auto p-0"
                // src={blue} // Use img directly without require
                src={project1} //
                alt={project1}
                // onClick={addToCardClick}
                // onClick={() => alert(img)}
              />
              <motion.div
                animate={{
                  y: [-10, 0],
                  x: [-10, 0], // move up by 10px and then back to the original position
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  width: "100px",
                  height: "100px",
                  background:
                    "radial-gradient(#000000, #190033, #40007d, #9400ff)",
                  borderRadius: "50%",
                  position: "absolute",
                  animation: "move-up6 2s ease-in infinite alternate-reverse",
                  marginRight: "450px",
                  marginTop: "50px",
                }}
                className="z-0 animate-pulse"
              ></motion.div>
              <motion.div
                animate={{
                  y: [-10, 0], // move up by 10px and then back to the original position
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  width: "70px",
                  height: "70px",
                  background:
                    "radial-gradient(#000000, #190033, #40007d, #9400ff)",
                  borderRadius: "50%",
                  position: "absolute",
                  animation: "move-up6 2s ease-in infinite alternate-reverse",
                  marginRight: "200px",
                  marginTop: "40px",
                }}
                className="z-0 animate-pulse"
              ></motion.div>
              <motion.div
                animate={{
                  y: [-10, 0], // move up by 10px and then back to the original position
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  width: "100px",
                  height: "100px",
                  background:
                    "radial-gradient(#000000, #190033, #40007d, #9400ff)",
                  borderRadius: "50%",
                  position: "absolute",
                  animation: "move-up6 2s ease-in infinite alternate-reverse",
                  marginLeft: "500px",
                  marginTop: "350px",
                }}
                className="z-0 animate-pulse"
              ></motion.div>
              <motion.button
                onViewportLeave={() =>
                  animate("#p1", { x: 0 }, { duration: 0.3 })
                }
                id="p1"
                // initial={{ y: -700, x: -220 }}
                whileTap={{ scale: "0.96", rotate: "0.5deg" }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                style={{
                  // fontSize: "9px",
                  fontFamily: "Montserrat, sans-serif",
                  position: "absolute",
                  marginTop: "200px",
                  fontSize: "12px",
                }}
                type="button"
                className=" p-1 text-white  rounded-sm  justify-center pr-2 pl-2 h-10 z-0 hover:bg-slate-50 hover:text-black border border-white"
                // onClick={() => alert(4)}
              >
                {/* <AddShoppingCartIcon
                sx={{
                  width: "14px",
                  height: "14px",
                  marginRight: "1px",
                }}
              /> */}
                <VisibilityIcon className="animate-pulse mr-1" />
                View Project
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            ref={refProject_2}
            // onMouseEnter={() => navigateToDiv2_1()}
            className="flex justify-center relative z-10  w-full h-screen"
            // style={{ height: "100vh" }}
            style={{ scrollSnapAlign: "start" }}
          >
            <motion.img
              onHoverStart={() => handleAnimateViewButton()}
              whileHover={{ rotate: "5deg" }}
              className="h-96 flex flex-col items-center mt-44 relative z-10"
              // src={blue} // Use img directly without require
              src={project1} //
              alt={project1}
              // onClick={addToCardClick}
              // onClick={() => alert(img)}
            />
            <motion.div
              animate={{
                y: [-10, 0], // move up by 10px and then back to the original position
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(#000000, #190033, #40007d, #9400ff)",
                borderRadius: "50%",
                position: "absolute",
                animation: "move-up6 2s ease-in infinite alternate-reverse",
                marginRight: "490px",
                marginTop: "250px",
              }}
              className="z-0"
            ></motion.div>
            <motion.div
              animate={{
                y: [-10, 0], // move up by 10px and then back to the original position
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(#000000, #190033, #40007d, #9400ff)",
                borderRadius: "50%",
                position: "absolute",
                animation: "move-up6 2s ease-in infinite alternate-reverse",
                marginLeft: "500px",
                marginTop: "350px",
              }}
              className="z-0"
            ></motion.div>
            <motion.button
              onViewportLeave={() =>
                animate("#view", { x: 0 }, { duration: 0.3 })
              }
              id="view"
              // initial={{ y: -700, x: -220 }}
              whileTap={{ scale: "0.96", rotate: "0.5deg" }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              style={{
                // fontSize: "9px",
                fontFamily: "Montserrat, sans-serif",
                position: "absolute",
                marginTop: "300px",
                fontSize: "12px",
              }}
              type="button"
              className=" p-1 text-white  rounded-sm  justify-center pr-2 pl-2 h-10 z-0 hover:bg-slate-50 hover:text-black border border-white"
              // onClick={() => alert(4)}
            >
              {/* <AddShoppingCartIcon
                sx={{
                  width: "14px",
                  height: "14px",
                  marginRight: "1px",
                }}
              /> */}
              <VisibilityIcon className="animate-pulse mr-1" />
              View Project
            </motion.button>
          </motion.div>

          <motion.div
            ref={refSkill}
            // onMouseEnter={() => navigateToDiv3()}
            // className="  p-10 pb-36 pt-20 text-white w-full h-screen"
            className="pb-36 pt-20 text-white relative w-full h-screen z-20"
            style={{
              // height: "100vh",
              background: "rgb(69,69,69)",
              backgroundImage:
                "radial-gradient(ellipse at center, rgba(90,1,255,1) 0%, rgba(0,0,0,1) 65%)",
              scrollSnapAlign: "start",
            }}
          >
            <h1
              className="text-xl font-semibold tablet:pl-56 tablet:mt-10 ml-10 mt-5"
              style={{
                fontSize: "30px",
                fontFamily: "'Inter Tight', sans-serif",
              }}
            >
              Skills
            </h1>
            <div className="flex items-center justify-center mt-5">
              <motion.div
                className="grid grid-cols-4 relative z-10 pb-44 w-3/4 tablet:pl-56 tablet:pr-56"
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>
                <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl tablet:w-24 tablet:h-24 w-20 h-20">
                  <img
                    className="hover:scale-110 w-14 h-14 "
                    src={react}
                    alt={react}
                  />
                  <p style={{ fontSize: "11px" }}>React</p>
                </div>

                {/* <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={ts}
                  alt={ts}
                />
                <p>TypeScript</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={css}
                  alt={css}
                />
                <p>CSS</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={html}
                  alt={html}
                />
                <p>HTML</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={mysql}
                  alt={mysql}
                />
                <p>MySQL</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={js}
                  alt={js}
                />
                <p>Javascript</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={tw}
                  alt={tw}
                />
                <p>Tailwind CSS</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={mui}
                  alt={mui}
                />
                <p>Material UI</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={vb}
                  alt={vb}
                />
                <p>Vb.net</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={tw}
                  alt={tw}
                />
                <p>Tailwind CSS</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={mui}
                  alt={mui}
                />
                <p>Material UI</p>
              </div>
              <div className=" flex flex-col items-center m-3 p-4 bg-gray-900 rounded-3xl">
                <img
                  className=" hover:cursor-pointer hover:scale-110 hover:animate-spin "
                  src={vb}
                  alt={vb}
                />
                <p>Vb.net</p>
              </div> */}
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            // onMouseEnter={() => navigateToDiv4()}
            // whileInView={alert(34)}
            // onViewportEnter={() => alert(1)}
            style={{
              scrollSnapAlign: "start",
              transition: "scroll-snap-align 0.5s ease",
            }}
            // onViewportEnter={() =>
            //   refAbout.current?.scrollIntoView({ behavior: "smooth" })
            // }
            ref={refEducation}
            className="pb-36 mt-44 text-white pt-10  relative z-10  w-full h-screen"
          >
            <h1
              className="text-xl font-semibold tablet:pl-56 tablet:mt-20 mt-16 ml-10"
              style={{
                fontSize: "30px",
                fontFamily: "'Inter Tight', sans-serif",
              }}
            >
              Education
            </h1>
            <div className="flex items-center justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                className="tablet:mt-8 tablet:w-1/2 mt-5 p-7 marker:w-"
                initial={{ opacity: 0, x: -60 }}
                transition={{ duration: 1 }}
              >
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  className="text-xs tablet:text-sm"
                >
                  {/* <Expandable>
                  As a dedicated web developer with 100 years of experience, I
                  bring a passion for creating innovative and user-friendly
                  digital experiences. Specializing in front-end development, I
                  thrive on turning concepts into visually appealing and
                  functional websites. With a keen eye for detail and a
                  commitment to staying current with the latest technologies, I
                  strive to deliver high-quality results that exceed
                  expectations. Let's collaborate to bring your ideas to life in
                  the digital world.
                </Expandable> */}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam exercitationem odio eveniet laborum rerum nesciunt
                  provident quia minus. Veniam reiciendis beatae inventore
                  asperiores modi pariatur ipsum dicta praesentium reprehenderit
                  adipisci repellat ducimus ab, itaque fuga molestias labore
                  quasi totam blanditiis provident alias debitis dolorem.
                  Consectetur nostrum, delectus perferendis eum quod voluptas
                  laborum enim unde quasi error beatae quam fugiat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quidem tempora
                  praesentium maxime, amet fuga neque minus error cupiditate
                  quaerat officiis. Repudiandae ullam maxime aperiam aliquid
                  repellat totam doloribus deleniti magni, neque ut ipsam
                  suscipit fugit aspernatur tempore odit at excepturi
                  perferendis enim esse quidem facere magnam similique! Odit
                  inventore aliquam saepe, dolorem cupiditate maiores labore ea
                  illo ullam, unde eum. Reiciendis vitae illo ut debitis velit.
                  Ea architecto, maiores consequatur esse consequuntur itaque,
                  quas quaerat, cum ab quod temporibus rem praesentium corrupti
                  iure. Suscipit, et. Iusto reprehenderit doloribus, error quam
                  quos voluptates porro asperiores ullam minus consequuntur
                  consequatur corrupti et.
                </p>
              </motion.div>
              {/* <button className="">Download CV</button> */}
            </div>
          </motion.div>

          <div
            className="relative z-10"
            style={{
              scrollSnapAlign: "start",
              transition: "scroll-snap-align 0.3s ease",
            }}
          >
            <Footer />
          </div>
          {/* <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars
                radius={60}
                count={1000}
                factor={4}
                speed={4}
                fade={true}
              />
            </Canvas>
          </div> */}

          {/* <motion.div
            className="z-0"
            style={{
              width: 200, // Adjust the width as needed
              height: 200, // Adjust the height as needed
              background: "rgb(69,69,69)",
              radius: "50%",
              backgroundImage:
                "radial-gradient(circle,rgba(90,1,255,0.8) 0%, rgba(0,0,0,1) 45%)",

              position: "absolute",
              top: position.y - 120,
              left: position.x - 80,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          /> */}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
