import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatNumber } from "../formatNumber";

function Card({ product }) {
  const [showContent, setShowContent] = useState(false);
  //   console.log(showContent);

  return (
    <>
      <div className="flex  flex-col bg-base-100 rounded-sm w-full transition duration-200  hover:shadow-md">
        <Link className="w-full " to={`detail/${product.id}`}>
          <img
            className="object-cover w-full h-[220px]"
            src={product.thumbnail}
            alt="Shoes"
          />
        </Link>
        <div className="p-3">
          <p className=" font-normal line-clamp-2 h-[50px] ">{product.title}</p>
          <div className="flex items-center gap-1 text-black/50">
            <CiStar className="text-lg text-yellow-400" />
            <span>{product.rating} </span>
          </div>
          <s className="text-black/65">{formatNumber(product.price)}</s>
          <h4 className="text-lg font-extrabold">
            {formatNumber(product.price, product.discountPercentage)}
          </h4>
          <span className="inline-block p-1 bg-[#caffa0] rounded-sm text-xs">
            {formatNumber(product.price / 12)} / oyiga
          </span>
          <div className="mt-4 mb-2 flex items-center justify-between">
            <button
              onClick={() => {
                setShowContent(!showContent);
              }}
              className="h-[40px] flex items-center gap-2 p-2 border-2 border-peach bg-peach text-base-100 rounded-lg cursor-pointer  "
            >
              <FaCartShopping className="text-2xl" />
              <span>Savatga</span>
            </button>

            <button>
              <FaRegHeart className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          setShowContent(!showContent);
        }}
        className={` ${
          showContent ? "fixed" : "hidden"
        } top-0 left-0 z-30 w-full h-screen bg-black/50 `}
      ></div>
    </>
  );
}

export default Card;
