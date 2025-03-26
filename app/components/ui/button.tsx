import React from "react";
import { Unbounded } from "next/font/google";

interface ButtonProps {
  text?: string;
  bgColor: string;
  fontFamily?: string;
}

const unbounded = Unbounded({ subsets: ["latin"] });

export const Button: React.FC<ButtonProps> = ({ text, bgColor, fontFamily }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={`w-[200px] h-[60px] rounded-2xl text-black border-b-8 border-black ${
        fontFamily || unbounded.className
      }`}
    >
      {text}
    </button>
  );
};

export default Button;