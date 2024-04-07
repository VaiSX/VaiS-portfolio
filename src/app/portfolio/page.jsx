"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel";
import { useRef,useState } from "react";

const items = [
  {
    id: 1,
    color: "from-black to-gray-900",
    title: "Fiver-MERN",
    desc: "An online freelance marketplace where you can buy or sell your services.",
    img: "https://i.ibb.co/sy3LH0K/fHome.png",
    link: "https://github.com/VaiSX/Fiverrrr-clone",
    objName:"fiverr",
  },
  {
    id: 2,
    color: "from-gray-900 to-gray-700",
    title: "yt-summarizer",
    desc: "A react app with flask api which creates short concise youtube video summaries using BART",
    img:"https://i.ibb.co/6JmwkPp/ytsumm.jpg",
    link: "https://github.com/VaiSX/yt-summz",
    objName:"sumzz",
  },
  {
    id: 3,
    color: "from-gray-700 to-gray-500",
    title: "GetSocial-SERN",
    desc: "A Social media site to connect with your friends.",
    img: "https://i.ibb.co/QjqKccr/gReg.png",
    link: "https://github.com/VaiSX/GetSocial",
    objName:"getSocial",
  },
];

const fiverr =["https://i.ibb.co/x3pMYjb/fLog.png","https://i.ibb.co/3WfT1MF/fReg.png","https://i.ibb.co/sy3LH0K/fHome.png","https://i.ibb.co/WPpBck0/fCat.png","https://i.ibb.co/8smDsDP/fallGigs.png","https://i.ibb.co/9nDzMHr/fgig.png","https://i.ibb.co/r7s0fpF/fgPay.png","https://i.ibb.co/MnKs4PZ/fgRev.png","https://i.ibb.co/Sd91MY9/fbGigs.png","https://i.ibb.co/r29QfXD/fMsg.png","https://i.ibb.co/SnLY9Kk/fConvo.png"]
const sumzz =["https://i.ibb.co/6JmwkPp/ytsumm.jpg"];
const getSocial =["https://i.ibb.co/d2VZJvK/gLogin.png","https://i.ibb.co/QjqKccr/gReg.png","https://i.ibb.co/kJC7Mnz/gDark.png","https://i.ibb.co/6n21GY9/gHome.png","https://i.ibb.co/Ltzy7rt/gPost2.png","https://i.ibb.co/CVgMXmM/gProf1.png","https://i.ibb.co/GP60TWd/gProf2.png"];

const PortfolioPage = () => {
  const ref = useRef();
  const [preView,togglePrev] = useState(false);
  const [prevID,setPrevId] = useState('');
  const [carouselImages, setCarouselImages] = useState([]);


  const handleClick = (objName) => {
    setPrevId(objName);
    togglePrev(!preView);
    switch (objName) {
      case "fiverr":
        setCarouselImages(fiverr);
        break;
      case "sumzz":
        setCarouselImages(sumzz);
        break;
      case "getSocial":
        setCarouselImages(getSocial);
        break;
      default:
        setCarouselImages([]);
    }
  };

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
    {preView && (
        <div className="fixed inset-0 flex justify-center items-center z-50  ">
        <div className="relative w-[80vh] p-8 bg-white rounded-lg shadow-lg transform rotate-90 sm:rotate-0 transition duration-500 ease-in-out lg:w-2/3">
            {/* Cross Icon */}
            <button className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800 focus:outline-none" onClick={() => handleClick('')}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {/* Content */}
            <h2 className="text-2xl font-bold mb-4">{prevID}</h2>
            <Carousel images={carouselImages} />
          </div>
        </div>
      )}
    <motion.div
      className="h-full bg-black text-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center">
          My Works
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="white"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-black" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative  h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-100 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                    <button onClick ={()=>handleClick(item.objName)} className="p-2 w-80 m-auto text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl text-black">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack web developer 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default PortfolioPage;
