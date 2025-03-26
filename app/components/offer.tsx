import React from "react";
import Card from "@components/ui/card";


const Offer: React.FC = () => {
  return (
    <div className="bg-[url('/images/bggrad.webp')] bg-cover bg-center px-10 py-16 xl:px-8">
      <h2
        className={`text-[#211F23] font-medium text-[25px] md:text-[32px] text-center mb-[2rem] font-display`}
      >
        What we offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[1.3rem] gap-x-[1rem] w-fit mx-auto">
        <Card
          icon="/icons/auto.svg"
          title="Automated savings plan"
          description="Effortlessly grow your savings with automated deposits. Choose between flexible or fixed plans and watch your crypto stack up over time."
          image="/images/savings.webp"
          extraClasses="xl:w-[612px] h-[566px]"
          imgClasses="xl:w-[439px] xl:h-[138.8px]"
        />

        <Card
          icon="/icons/wallet.svg"
          title="Allocate goal specific savings"
          description="Save with purpose. Allocate funds to specific financial goals and track your progress—all while earning passive income."
          image="/images/phone.webp"
          extraClasses="xl:w-[612px] h-[566px] relative"
          imgClasses="absolute w-[70%] sm:w-[60%] lg:w-[339.21px] xl:h-[313.22px] left-1/2 transform -translate-x-1/2 bottom-0"
        />

        <Card
          icon="/icons/shield.svg"
          title="Long term crypto storage"
          description="Effortlessly grow your savings with automated deposits. Choose between flexible or fixed plans and watch your crypto stack up over time."
          image="/images/storage.webp"
          button
          extraClasses="md:col-span-2 max-h-[700px] md:max-h-[528px] relative"
          imgClasses="absolute w-[65%] md:w-[40%] float-end right-0 bottom-0 rounded-br-[44px]"
        />
      </div>
    </div>
  );
};

export default Offer;
