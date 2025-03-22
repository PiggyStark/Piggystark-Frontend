import Hero from "./components/Hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-[#DD3C00] h-dvh">
      <Navbar />
      <Hero />
    </div>
  );
}
