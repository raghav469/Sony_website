import { motion } from "framer-motion";

const LandingPageBar2 = () => {
  return (
    <div className="h-fit max-md:py-12 md:h-[70vh] bg-[#0F0F0F] text-[#E3E3E3] w-screen flex flex-col md:grid grid-cols-2 items-center">
      {/* Left Image Section */}
      <div className="col-span-1 max-md:flex grid grid-cols-3 justify-center items-center h-full">
        <img
          src="/Sale_img1.jpg"
          className="h-[40%] w-[40%] max-md:hidden rounded-r-xl object-cover col-span-1 shadow-lg shadow-[#4717F6]"
          alt="sale"
        />

        <div
          data-scroll
          data-scroll-speed="0.05"
          className="relative h-[80%] w-[70%] col-span-2 flex justify-center items-center"
        >
          <div className="absolute h-[95%] w-[90%] rounded-xl border-2 border-[#E3E3E3] z-[10]"></div>
          <img
            src="/Sale_img1.jpg"
            className="rounded-xl relative h-full w-full object-cover z-[5] shadow-lg shadow-[#8E2DE2]"
            alt="sale preview"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="col-span-1 h-full px-8 py-4 flex justify-center gap-6 items-center md:items-start flex-col">
        <h2 className="text-[2.5rem] sm:text-[3rem] font-bold tracking-tight">
          CONTROL IT <br /> ALL LIKE MAGIC
        </h2>
        <p className="text-base sm:text-lg text-[#BDBDBD]">
          Keep the party going for longer with waterproof <br />
          Bluetooth speaker that gives you 20 hours play time
        </p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative p-4 text-lg sm:text-xl w-fit rounded-md font-semibold border border-[#BDBDBD] bg-[#A239CA] text-white shadow-[5px_5px_0px_0px_#6D28D9] hover:shadow-sm transition duration-300"
        >
          Check out SONY
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPageBar2;
