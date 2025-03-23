import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Button from "./button";

import {Syne, Unbounded} from "next/font/google";

interface CardProps {
  symbol: StaticImageData | string;
  title: string;
  details: string;
  img: StaticImageData | string;
  display: string;
  button?: boolean;
  imgBtm?: boolean;
}

const syne = Syne({ weight: ["400", "600", "700"], subsets: ["latin"] });
const unbounded = Unbounded({ weight: ["400", "600"], subsets: ["latin"] });

const Card = ({ symbol, title, details, img, imgBtm, display, button }: CardProps) => {
  return (
    <div
      className={`bg-[#FFFFFF] rounded-[22px] md:rounded-[44px] relative flex ${
        display === "row"
          ? "flex-col md:flex-row justify-between"
          : "flex-col items-center"
      }`}
    >
      <div
        className={`flex flex-col p-8 md:p-10 lg:p-[52px] gap-[1rem] ${
          display === "row" ? "md:w-[50%] w-[100%]" : "w-auto"
        }`}
      >
        <Image src={symbol} alt={title} width={40} height={40} />
        <h3 className={`text-[24px] font-medium leading-[50px] text-black ${unbounded.className}`}>
          {title}
        </h3>
        <p className={`text-[16px] leading-[30px] font-medium text-[#000000B2] text-left ${syne.className}`}>
          {details}
        </p>

        {button && (
          <div className=" mt-[2rem] md:mt-[4rem]">
            <Button />
          </div>
        )}
      </div>
      <div
        className={`overflow-hidden rounded-[44px] ${
          display === "row" ? "md:absolute bottom-0 right-0 flex-wrap" : "relative px-8 md:px-10 lg:px-[52px]"
        } `}
      >
        <Image
          src={img}
          alt={title}
          width={500}
          height={300}
          className={`rounded-[44px] object-cover w-full h-full ${display === "row" ? "max-w-[320px]" : "" } float-end ${imgBtm ? "w-[70rem]" : ""}`}
        />
      </div>
    </div>
  );
};

export default Card;
