import React from "react";
import Image from "next/image";
import Button from "@components/ui/button";

import { Syne, Unbounded } from "next/font/google";
const syne = Syne({ weight: ["400", "600", "700"], subsets: ["latin"] });
const unbounded = Unbounded({ weight: ["400", "600"], subsets: ["latin"] });


interface CardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  extraClasses?: string;
  imgClasses?: string;
  button?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  image,
  extraClasses = "",
  imgClasses = "",
  button,
}) => {
  return (
    <div
      className={`bg-white rounded-[44px] p-[42px] xl:p-[52px] ${extraClasses}`}
    >
      <div className="space-y-[1.2rem] mb-[3rem] md:mb-[6rem]">
        <Image src={icon} alt={title} width={40} height={39.44} />
        <h2 className={`text-black font-medium text-[18px] md:text-[24px] ${unbounded.className}`}>{title}</h2>
        <p className={`text-[#000000B2] font-medium text-[16px] max-w-[612px] ${syne.className}`}>
          {description}
        </p>
        {button && (
          <div className="mt-[4rem]">
            <Button
              bgColor="#FBF6FF"
              fontFamily={syne.className}
              text="Get started"
            />
          </div>
        )}
      </div>
      <img src={image} alt="Card image" className={imgClasses} />
    </div>
  );
};

export default Card;
