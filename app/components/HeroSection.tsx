import React from "react";
import Button from "./ui/button";
import Image from "next/image";
import piggyImage from "../../public/images/piggyimage.svg";
import ellipse from "../../public/images/Ellipse.svg";
const HeroSection = () => {
   return (
      <section className="h-screen w-full flex flex-col items-center px-4">
         <div className="min-h-[400px] max-w-[1270.7px] xl:w-[1270.7px] mt-28 flex flex-row justify-between items-center">
            <div className=" space-y-6 sm:space-y-9">
               <h1 className="text-[40px] sm:text-[56px] font-bold tracking-wide max-w-[666px] font-heading text-white">
                  Your decentralized way to Save, <br className="hidden md:" /> Invest and HODL
               </h1>
               <p className="text-[#EFDFFF] font-normal text-[20px] max-w-[633px] text-header">Automate your savings, maximize your yield, and grow your HODL effortlessly</p>
               <Button text="Get started" bgColor="bg-white" />
            </div>
            <div className=" relative hidden lg:flex">
               <Image src={ellipse} alt="piggyimage" className="absolute opacity-70 blur-md" width={378} height={476.56} />
               <Image src={piggyImage} alt="piggyimage" className="z-20" width={411} height={354.56} />
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
