import React from 'react';
import Image from 'next/image';
import heroImage from "@assets/image.webp";

function GetStarted() {
  return (
    <div className="relative w-full pt-20 flex items-center justify-center overflow-hidden min-h-[500px]">
      {/* Image container */}
      <div className="relative flex justify-center items-center w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[65%] mx-auto h-auto xl:h-[400px]">
      <Image
          src={heroImage}
          alt="Hero Background"
          layout="fill"
          objectFit=""
          className="rounded-lg ml-1 object-center" />
        {/* Icon container */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 sm:px-10 sm:py-12">
          {/* Heading */}
          <h1 className="text-xl pt-8 mr-3 font-semibold text-center text-white sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            Lock in your coins and tokens and watch them grow with secured savings and guaranteed rewards
          </h1>

          {/* Button */}
          <button className="mt-6 px-4 mr-8 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out sm:mt-8 sm:px-6 sm:py-3">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;