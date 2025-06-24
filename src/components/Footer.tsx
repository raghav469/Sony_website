import { motion } from "framer-motion";

const LandingPageBar2 = () => {
  return (
    <>
      <div className="h-fit max-md:py-12 md:h-[70vh] bg-[#0F0F0F] text-[#E3E3E3] w-screen flex flex-col md:grid grid-cols-2 items-center">
        {/* Left Image Section */}
        <div className="col-span-1 flex justify-center items-center h-full">
          <div
            data-scroll
            data-scroll-speed="0.05"
            className="relative h-[80%] w-[80%] flex justify-center items-center"
          >
            <div className="absolute h-[95%] w-[95%] rounded-xl border-2 border-[#E3E3E3] z-[10]"></div>
            <img
              src="/Sale_img2.jpg"
              className="rounded-xl relative h-full w-full object-cover z-[5] shadow-lg shadow-[#8E2DE2]"
              alt="speaker close-up"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="col-span-1 h-full px-8 py-4 flex justify-center gap-6 items-center md:items-start flex-col">
          <h2 className="text-[2.5rem] sm:text-[3rem] font-bold tracking-tight">
            FORM MEETS FUNCTION
          </h2>
          <p className="text-base sm:text-lg text-[#BDBDBD]">
            Soft curves. Recycled fabric. Big sound. Minimal impact.<br />
            The outer shell wraps your audio in sustainable design.
          </p>

          <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative p-4 text-lg sm:text-xl w-fit rounded-md font-semibold border border-[#BDBDBD] bg-[#A239CA] text-white shadow-[5px_5px_0px_0px_#6D28D9] hover:shadow-sm transition duration-300"
        >
          Explore The Build
        </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="rounded-md w-[96%] mx-auto mt-8 shadow bg-[#0F0F0F] text-[#E3E3E3]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">
            © {new Date().getFullYear()} &nbsp;
            <a href="" className="hover:underline font-medium">
              RAGHAV
            </a>{" "}
            All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/in/raghav233"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/raghav469"
                className="hover:underline me-4 md:me-6"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/raghav469"
                className="hover:underline me-4 md:me-6"
              >
                Project Repository
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default LandingPageBar2;