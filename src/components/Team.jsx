import React, { useState } from "react";
import Bgcircle from "../assets/images/Circle1.png";
import teamImg1 from "../assets/icons/Member-Image1.jpg";
import teamImg2 from "../assets/icons/Member-Image2.jpg";
import teamImg3 from "../assets/icons/Member-Image3.jpg";
import { motion } from "framer-motion";
import Footer from "./Footer"

const team = [
  {
    name: "JOHN CARTER",
    role: "CTO",
    image: teamImg1,
    desc: "We build scalable technology solutions that empower businesses worldwide.",
  },
  {
    name: "MANSI SHUKLA",
    role: "CEO FutureSphere",
    image: teamImg2,
    desc: "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
  },
  {
    name: "ALEX BROWN",
    role: "Product Head",
    image: teamImg3,
    desc: "We focus on building intuitive and human-centered digital products.",
  },
];
const ITEM_WIDTH = 160; // image + gap
const CENTER_OFFSET = ITEM_WIDTH * 1; // center index offset

function Team() {
  const [index, setIndex] = useState(1);

  const next = () => {
    setIndex((prev) => (prev + 1) % team.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <section className="w-full h-screen relative ">
      {/* bacground circle image  */}
      <div className="bg absolute top-15 -left-20 -z-10">
        <img src={Bgcircle} alt="bg background" />
      </div>
      {/* title */}
      <div className="team-tite text-center pt-30 pb-10 ">
        <h2 className="font-raleway text-5xl font-semibold mb-3 ">
          {" "}
          Meet our team{" "}
        </h2>
        <p
          className="font-manrope font-normal text-2xl inline-block bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]  
       bg-clip-text text-transparent  mb-3 "
        >
          Meet our passionate and talented team, committed to delivering
          exceptional <br /> results, driving innovation, and transforming your
          vision into reality.
        </p>
      </div>
      {/* slide content */}
      {/* Arrows */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={prev}
          className="w-12 h-12 bg-primary rounded-xl text-white"
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-12 h-12 bg-primary rounded-xl text-white"
        >
          →
        </button>
      </div>

      {/* Carsouls */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-12 justify-center"
          animate={{
            x: CENTER_OFFSET - index * ITEM_WIDTH,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 22,
          }}
        >
          {team.map((member, i) => {
            const isActive = i === index;

            return (
              <motion.div
                key={i}
                className="flex items-center justify-center transition-all duration-300"
                animate={{
                  opacity: isActive ? 1 : 0.45,
                }}
              >
                <div
                  className={`rounded-full overflow-hidden transition-all duration-300
          ${isActive ? "w-[220px] h-[220px]" : "w-[120px] h-[120px]"}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* info cars */}
      <div className="relative mt-20 flex justify-center">
        <div
          className="absolute -top-3 w-0 h-0
          border-l-[14px] border-r-[14px] border-b-[14px]
          border-l-transparent border-r-transparent
          border-b-primary text-primary"
        />
        <motion.div
          key={team[index].name}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-primary text-white rounded-3xl px-20 py-10 max-w-4xl shadow-xl"
        >
          <h3 className="text-3xl font-semibold mb-2">{team[index].name}</h3>
          <p className="text-[#FFB37C] mb-4">{team[index].role}</p>
          <p>{team[index].desc}</p>
        </motion.div>
      </div>
     <div className="mt-40">
         <Footer />
     </div>
    </section>
  );
}

export default Team;
