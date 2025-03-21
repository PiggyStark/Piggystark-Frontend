import React from "react";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });
export const Button: React.FC = () => {
  return (
    <button
      className={`w-[200px] h-[60px] bg-white rounded-2xl text-black border-b-8 border-black ${unbounded.className} `}
    >
      Get started
    </button>
  );
};
