import React from "react";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });
export const Button: React.FC = () => {
  return (
    <button
      className={`w-[200px] h-[60px] bg-white rounded-2xl text-black shadow-[0_8px_15px_-3px_rgba(0,0,0,0.4)] ${unbounded.className} `}
    >
      Get started
    </button>
  );
};
