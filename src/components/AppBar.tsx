import { useState } from "react";
import MenuCrossIcons from "./MenuCrossIcons";
import gsap from "gsap";

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    const gsapTl = gsap.timeline();

    gsapTl.to(
      ".menu_options",
      {
        top: isOpen ? "3.5rem" : 0,
        stagger: isOpen ? -0.1 : 0.1,
        delay: isOpen ? 0 : 0.5,
        ease: isOpen ? "power3.in" : "power4.inOut",
      },
      "abc"
    );
    gsapTl.to(
      ".menu_bg",
      {
        left: isOpen ? "100%" : "50%",
        duration: 1,
        delay: isOpen ? 0.5 : 0.2,
        ease: "power3.inOut",
      },
      "abc"
    );

    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#0F0F0F] w-full relative text-[#E3E3E3] z-[9999] h-20 fixed grid grid-cols-2 md:grid-cols-3 shadow-md shadow-[#A239CA]">
      {/* Desktop Menu */}
      <div className="options max-md:hidden col-span-1 flex flex-row gap-6 justify-center items-center p-4 px-10">
        <a href="" className="hover:underline transition duration-300">
          Products
        </a>
        <a href="" className="hover:underline transition duration-300">
          My Account
        </a>
        <span className="hover:underline cursor-pointer transition duration-300">Offer</span>
      </div>

      {/* Sliding Mobile Menu */}
      <div className="absolute w-1/2 h-screen left-full z-[9999] bg-[#0F0F0F] flex flex-col top-20 menu_bg md:hidden transition-all">
        <div className="absolute flex flex-col gap-4 left-4">
          <a href="" className="decoration-none">
            <div className="overflow-hidden h-8 hover:underline duration-300">
              <span className="menu_options">Products</span>
            </div>
          </a>
          <a href="" className="decoration-none">
            <div className="overflow-hidden h-8 hover:underline duration-300">
              <span className="menu_options">My Account</span>
            </div>
          </a>
          <div className="overflow-hidden h-8 hover:underline duration-300">
            <span className="menu_options">Offer</span>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="col-span-1 flex justify-center items-center text-2xl font-bold tracking-widest">
        SONY
      </div>

      {/* Icons */}
      <div className="col-span-1 flex flex-row gap-6 justify-center items-center p-4 px-8">
        <a
          href=""
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-user-circle"
          >
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
        </a>
        <span className="hover:scale-110 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-basket-check"
          >
            <path d="M17 10l-2 -6" />
            <path d="M7 10l2 -6" />
            <path d="M11 20h-3.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.479 2.729" />
            <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M15 19l2 2l4 -4" />
          </svg>
        </span>

        {/* Mobile Toggle */}
        <div onClick={handleMenuOpen} className="md:hidden">
          <MenuCrossIcons />
        </div>
      </div>
    </div>
  );
};

export default AppBar;