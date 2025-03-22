import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="bg-[#DD3C00] text-white h-screen flex items-center justify-center">
      <main className="flex flex-row items-center justify-between text-start max-w-7xl w-full px-16">
        {/* Left Section: Write-up */}
        <div className="flex-1">
            <p className="text-5xl font-bold font-unbounded">
              Your Decentralized way to save,<br />
              invest <span className="inline-flex items-center"><Image src="/coin.svg" alt="coin" width={35} height={35} /></span> and HODL
            </p>
          <p className="text-sm mt-4 font-unbounded">
            Automate your savings, maximize your yields, and grow your HODL effortlessly.
          </p>
          <div className="mt-10">
            <Button className="bg-white text-[#DD3C00] text-lg font-bold px-6 py-3 rounded pointer">
              Get Started
            </Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-end">
          <Image src="/mask.svg" alt="Mask Image" width={500} height={500} />
        </div>
      </main>
    </div>
  );
};

export default Hero;