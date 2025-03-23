import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Button from "./button";
import clsx from "clsx";

import { Syne, Unbounded } from "next/font/google";

export interface CardProps {
  symbol: StaticImageData | string;
  title: string;
  details: string;
  img: StaticImageData | string;
  display: "row" | "col";
  button?: boolean;
  imgBtm?: boolean;
}

const syne = Syne({ weight: ["400", "600", "700"], subsets: ["latin"] });
const unbounded = Unbounded({ weight: ["400", "600"], subsets: ["latin"] });

const Card: React.FC<CardProps> = ({
  symbol,
  title,
  details,
  img,
  imgBtm,
  display,
  button,
}) => {
  const isRow = display === "row";

  return (
    <div
      className={clsx(
        "bg-white rounded-[22px] md:rounded-[44px] relative flex h-full",
        isRow ? "flex-col md:flex-row justify-between" : "flex-col items-center"
      )}
    >
      {/* Content Section */}
      <div
        className={clsx(
          "flex flex-col p-8 md:p-10 lg:p-[52px] gap-4",
          isRow ? "md:w-[50%] w-full" : "w-auto"
        )}
      >
        <Image src={symbol} alt={title} width={40} height={40} priority />
        <h3
          className={clsx(
            "text-[24px] font-medium leading-[50px] text-black",
            unbounded.className
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "text-[16px] leading-[30px] font-medium text-[#000000B2] text-left",
            syne.className
          )}
        >
          {details}
        </p>

        {button && (
          <div className="mt-8 md:mt-16">
            <Button />
          </div>
        )}
      </div>

      {/* Image Section */}
      <div
        className={clsx(
          "overflow-hidden rounded-[44px]",
          isRow
            ? "md:absolute bottom-0 right-0"
            : "relative px-8 md:px-10 lg:px-[52px]"
        )}
      >
        <Image
          src={img}
          alt={title}
          width={500}
          height={300}
          className={clsx(
            "rounded-[44px] object-cover w-full h-full",
            isRow && "max-w-[320px] float-end",
            imgBtm && "w-[70rem]"
          )}
        />
      </div>
    </div>
  );
};

export default Card;
