import React from "react";
import Card, { CardProps } from "@components/ui/card";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ weight: ["400", "600"], subsets: ["latin"] });

const cardData: CardProps[] = [
  {
    icon: "/images/auto.webp",
    card: {
      title: "Automated savings plan",
      details:
        "Effortlessly grow your savings with automated deposits. Choose between flexible or fixed plans and watch your crypto stack up over time",
      width: "w-full md:w-[612px]",
      height: "h-[466px] md:h-[566px]",
      display: "col",
      rounded: "22px",
      padding: "16px",
    },
    img: {
      url: "/images/Frame 45.webp",
      size: { width: 439, height: 138.8 },
      position: "center",
    },
  },
  {
    icon: "/images/save.webp",
    card: {
      title: "Allocate goal specific savings",
      details:
        "Save with purpose. Allocate funds to specific financial goals and track your progress—all while earning passive income.",
      width: "w-full md:w-[612px]",
      height: "h-[566px]",
      display: "col",
      rounded: "22px",
      padding: "16px",
    },
    img: {
      url: "/images/phone.webp",
      size: { width: 339.21, height: 313.22 },
      position: "absolute bottom-0",
    },
  },
  {
    icon: "/images/shield.webp",
    card: {
      title: "Long term crypto storage",
      details:
        "Effortlessly grow your savings with automated deposits. Choose between flexible or fixed plans and watch your crypto stack up over time",
      width: "w-full xl:w-[1255px]",
      height: "md:h-[528px]",
      display: "row",
      rounded: "22px",
      padding: "16px",
    },
    img: {
      url: "/images/storage.webp",
      size: { width: 494.78, height: 465.29 },
      position: "center",
    },
    button: true,
  },
];

const Offer = () => {
  return (
    <div className="p-4 xl:px-16 pt-12 bg-[url('/images/bggrad.webp')] bg-cover bg-center">
      <h2
        className={`text-[32px] font-medium text-[#211F23] text-center mb-4 ${unbounded.className}`}
      >
        What we offer
      </h2>

      <div className="flex flex-wrap flex-col xl:flex-row bg-transparent items-center justify-center gap-6 p-6 w-fit mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={card.card.display === "row" ? "md:col-span-2" : ""}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
