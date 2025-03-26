
interface ButtonProps {
  text?: string;
  bgColor?: `bg-${string}`;
  fontFamily?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, bgColor, fontFamily }) => {
  return (
    <button
      className={`w-[200px] h-[60px] ${bgColor} rounded-2xl  text-black border-b-6 transition-all hover:border-b-0 hover:cursor-pointer hover:bg-black hover:text-white border-black ${
        fontFamily || "font-display"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;