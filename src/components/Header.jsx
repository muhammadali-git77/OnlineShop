import React, { useEffect, useRef } from "react";
import { FaBasketShopping, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbCategoryPlus } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const boxRef = useRef(null);
  console.log(boxRef);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
      boxRef.current.classList.remove("absolute");
      boxRef.current.classList.add("fixed");
      boxRef.current.classList.add("shadow-md");
    } else {
      boxRef.current.classList.remove("fixed");
      boxRef.current.classList.add("absolute");
      boxRef.current.classList.remove("shadow-md");
    }
  });

  return (
    <header>
      <div className="bg-[#FFAD94] h-10 flex items-center justify-center">
        <p>Ustoz vazifam hali bitgani yo'q tez orada bitirib qo'yaman.</p>
      </div>
      <div className="relative w-full">
        <div ref={boxRef} className="absolute top-0 z-20 bg-base-100 w-full ">
          <div className="align-elements py-5 flex items-center justify-between gap-10">
            <Link to={"/"}>
              <h1 className="text-2xl md:text-3xl font-black text-peach">
                Shaftoli qoqi
              </h1>
            </Link>
            <div className="grow flex items-center gap-5 ">
              <button className="hidden lg:flex items-center h-[50px] gap-2 border-2 py-2 px-5 rounded-lg cursor-pointer transition-all duration-200 hover:text-peach">
                <RxHamburgerMenu className="text-2xl" />
                <span>Katalog</span>
              </button>
              <div className="grow relative">
                <input
                  className="w-full h-[50px] rounded-lg py-2 px-5 bg-base-200 focus:outline-none"
                  type="text"
                  placeholder="Mahsulotlarni izlash.."
                />
                <IoSearch className="text-2xl text-black/50 absolute right-3 top-[14px] " />
              </div>
            </div>

            {/* Nav DESCTOP */}
            <nav className="hidden lg:flex items-center gap-5">
              <NavLink className="flex flex-col items-center" to={"/"}>
                <FaRegHeart className="text-2xl" />
                <span>Sevimlilar</span>
              </NavLink>
              <NavLink className="flex flex-col items-center" to={"/"}>
                <FaBasketShopping className="text-2xl" />
                <span>Savatcha</span>
              </NavLink>
              <NavLink className="flex flex-col items-center" to={"/"}>
                <FaRegUser className="text-2xl" />
                <span>Kabinet</span>
              </NavLink>
            </nav>

            <button>
              <RxHamburgerMenu className="hidden max-lg:block text-4xl p-2 rounded-md border" />
            </button>
          </div>
        </div>

        {/* Nav MOBILE */}
        <nav className="flex lg:hidden items-center justify-between py-3 px-7 fixed z-30 bottom-0 w-full bg-base-100  shadow-[inset_0px_3px_9px_-5px_rgba(0,_0,_0,_0.1)] !text-[#333]">
          <NavLink className="flex flex-col items-center" to={"/"}>
            <GrHomeRounded className="text-2xl" />
            <span>Uy</span>
          </NavLink>
          <NavLink className="flex flex-col items-center" to={"/"}>
            <FaRegHeart className="text-2xl" />
            <span>Saralangan</span>
          </NavLink>
          <NavLink className="flex flex-col items-center" to={"/"}>
            <FaBasketShopping className="text-2xl" />
            <span>Savatcha</span>
          </NavLink>
          <NavLink className="flex flex-col items-center" to={"/"}>
            <FaRegUser className="text-2xl" />
            <span>Kabinet</span>
          </NavLink>
        </nav>
        <div className="h-[90px]"></div>
      </div>
    </header>
  );
}

export default Header;
