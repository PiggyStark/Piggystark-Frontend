import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Button from "./button";
import clsx from "clsx";

import { Syne, Unbounded } from "next/font/google";

export interface CardType {
  title: string;
  details: string;
  width: string; // Tailwind class for width (e.g., "w-full", "md:w-1/2")
  height: string; // Tailwind class for height (e.g., "h-64", "md:h-96")
  display: "row" | "col";
  rounded?: string;
  padding?: string;
}

export interface CardProps {
  icon: StaticImageData | string;
  img: {
    url: StaticImageData | string;
    size?: { width: number; height: number };
    position?: string;
  };
  card: CardType;
  button?: boolean;
}

const syne = Syne({ weight: ["400", "600", "700"], subsets: ["latin"] });
const unbounded = Unbounded({ weight: ["400", "600"], subsets: ["latin"] });

const Card: React.FC<CardProps> = ({ icon, img, card, button }) => {
  const isRow = card.display === "row";

  return (
    <div
      className={clsx(
        "bg-white relative flex",
        isRow
          ? "flex-col md:flex-row justify-between"
          : "flex-col items-center",
        `rounded-[22px] md:rounded-[44px]`,
        card.width,
        card.height
      )}
    >
      {/* Content Section */}
      <div
        className={clsx(
          "flex flex-col p-8 md:p-10 lg:p-[52px] gap-4",
          isRow ? "md:w-[50%] w-full" : "w-auto"
        )}
      >
        <Image src={icon} alt={card.title} width={40} height={40} priority />
        <h3
          className={clsx(
            "text-[24px] font-medium md:leading-[50px] text-black",
            unbounded.className
          )}
        >
          {card.title}
        </h3>
        <p
          className={clsx(
            "text-[16px] md:leading-[30px] font-medium text-[#000000B2] text-left",
            syne.className
          )}
        >
          {card.details}
        </p>

        {button && (
          <div className="mt-8 md:mt-16">
            <Button text="Get started" bgColor="#FBF6FF" fontFamily={syne.className} />
          </div>
        )}
      </div>

      {/* Image Section */}
      <div
        className={clsx(
          "overflow-hidden rounded-[22px] md:rounded-[44px]",
          isRow ? "md:absolute bottom-0 right-0" : "",
          img.position ? img.position : "",
        )}
      >
        <Image
          src={img.url}
          alt={card.title}
          width={img.size?.width}
          height={img.size?.height}
          className={clsx(
            "object-cover w-full h-full",
            isRow && "float-end",
          )}
        />
      </div>
    </div>
  );
};

export default Card;
