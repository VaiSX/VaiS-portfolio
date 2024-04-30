"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Background } from "@/components/background";

const Homepage = () => {
  const text = "Hey there!";
  return (
    <motion.div
      className="h-full overflow-x-hidden bg-black"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
  
      <Background className="max-w-4xl mx-auto pb-40 px-5">
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <p className="text-4xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            :)
      </div>
          Welcome to my website
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Make sure to check out my work and leave a message
      </p>  
      <div className="flex  gap-4  justify-center mt-5 md:hidden">
        <Link href="https://github.com/VaiSX">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/vais_xo/?next=%2F">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://leetcode.com/VaiSmonster/">
          <Image src="/leetcode.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/vais18/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
    </motion.div>
      <div className="w-full flex gap-4 mx-auto mt-10 justify-center">
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-lg ring-1 ring-black bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <Link href='/portfolio'>View my work</Link>
            </motion.button>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-lg ring-1 bg-white ring-black">
            <Link href='/contact'>Contact me</Link>
            </motion.button>
          </div>
      </Background>
    </motion.div>
  );
};

export default Homepage;
