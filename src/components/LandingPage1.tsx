// LandingPage1.tsx
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const LandingPage1 = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#E3E3E3] text-4xl md:grid md:grid-cols-3">
      {/* Left Text Section */}
      <div className="col-span-1 flex flex-col p-8 justify-center items-center">
        <div className="relative text-[4rem] sm:text-[6rem] flex flex-col gap-1 mb-8">
          <span className="uppercase font-semibold">
            <BlurText text="LIVE" delay={150} animateBy="letters" direction="top" />
          </span>

          <span className="relative left-16 sm:left-20 uppercase flex font-semibold">
            <BlurText text="LIFE" delay={300} animateBy="letters" direction="top" />
            <div
              data-scroll
              data-scroll-speed="0.1"
              className="absolute uppercase text-sm rounded-full right-8 -top-12 sm:-top-16 sm:-right-6 h-20 w-20 sm:h-[120px] sm:w-[120px] border-4 border-[#E3E3E3] flex flex-col font-bold justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
              </svg>
              play
            </div>
          </span>

          <span className="uppercase font-semibold">
            <BlurText text="LOUD" delay={150} animateBy="letters" direction="top" />
          </span>
        </div>

        <div className="relative left-16 sm:left-24 flex flex-col gap-10">
          <div className="text-[1rem] sm:text-[1.2rem] text-[#BDBDBD]">
            Feel the Bass, <br /> Unleash the Vibe.
          </div>
<div
  data-scroll
  data-scroll-speed="0.1"
  className="absolute uppercase text-sm rounded-full right-8 -top-12 sm:-top-16 sm:-right-6 h-20 w-20 sm:h-[120px] sm:w-[120px] border-4 border-[#E3E3E3] flex flex-col font-bold justify-center items-center animate-pulse bg-gradient-to-br from-[#4717F6] to-[#A239CA] text-white shadow-lg"
>
</div>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative p-4 text-[1.2rem] w-fit rounded-md font-semibold duration-300 cursor-pointer border border-[#BDBDBD] shadow-[#6D28D9] shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-sm bg-[#A239CA] text-white"
          >
            Check Out the Boom

          </motion.button>
        </div>
      </div>

      {/* Right Image Section */}
      <motion.div className="col-span-2 relative flex justify-center items-center">
        {/* Floating Bubbles */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-15, 0, -15] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bg-gradient-to-r h-10 w-10 top-10 rounded-full from-[#D53369] to-[#DAAE51]"
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bg-gradient-to-r z-[999] h-16 w-16 top-40 left-[120px] rounded-full from-[#A239CA] to-[#4717F6]"
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-15, 0, -15] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bg-gradient-to-r z-[9] h-20 w-20 top-60 sm:top-80 right-[120px] sm:right-10 rounded-full from-[#8E2DE2] to-[#4A00E0]"
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-15, 0, -15] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bg-gradient-to-r max-sm:hidden h-24 w-24 z-[999] bottom-20 left-10 rounded-full from-[#C471ED] to-[#F64F59]"
        />

        {/* Speaker Image */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          data-scroll
          data-scroll-speed="0.2"
          src="/Speaker1.png"
          alt="Sony Speaker"
          className="z-[99]"
        />

        {/* Text Overlay */}
        <div data-scroll data-scroll-speed="0.2" className="absolute z-[999] text-[1rem] md:text-[1.2rem] text-white font-sans">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-15, 0, -15] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            src="/right-up.png"
            alt="Curved arrow"
            className="left-10 z-[999] sm:left-40 top-12 relative h-20 w-20 sm:h-40 sm:w-40 scale-y-[-1]"
          />

          <div className="top-36 -left-16 z-[999] backdrop-blur-xl bg-black/50 rounded-xl p-4 sm:top-48 md:top-[13.5rem] h-fit sm:left-40 md:left-28 absolute w-64">
            Sleek. Sustainable. Sonic perfection.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage1;