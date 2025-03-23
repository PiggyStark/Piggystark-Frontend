import React from "react";
import Card, { CardProps } from "./ui/card";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ weight: ["400", "600"], subsets: ["latin"] });

const cardData: CardProps[] = [
  {
    symbol: "/images/auto.png",
    title: "Automated savings plan",
    details:
      "Effortlessly grow your savings with automated deposits. Choose between flexible or fixed plans and watch your crypto stack up over time",
    img: "/images/Frame 45.png",
    display: "col",
    imgBtm: true,
  },
  {
    symbol: "/images/save.png",
    title: "Automated savings plan",
    details:
      "Effortlessly grow your savings with automated deposits. Choose between flexible or fixed plans and watch your crypto stack up over time",
    img: "/images/phone.png",
    display: "col",
  },
  {
    symbol: "/images/shield.png",
    title: "Automated savings plan",
    details:
      "Effortlessly grow your savings with automated deposits. Choose between flexible or fixed plans and watch your crypto stack up over time",
    img: "/images/storage.png",
    display: "row",
    button: true,
  },
];

const Offer = () => {
  return (
    <div className="bg-gradient-to-b from-[#F3E8FF] to-[#FCE7F3] p-4 xl:px-16 pt-12">
      <h2
        className={`text-[32px] font-medium text-[#211F23] text-center mb-4 ${unbounded.className}`}
      >
        What we offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={card.display === "row" ? "md:col-span-2" : ""}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
