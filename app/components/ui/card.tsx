import React from "react";
import Image from "next/image";
import Button from "@components/ui/button";

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
        <h2 className={`text-black font-medium text-[18px] md:text-[24px] font-display`}>{title}</h2>
        <p className={`text-[#000000B2] font-medium text-[16px] max-w-[612px] font-syne`}>
          {description}
        </p>
        {button && (
          <div className="mt-[4rem] bg-white md:mt-[8rem]">
            <Button
              bgColor="bg-[#FBF6FF]"
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
