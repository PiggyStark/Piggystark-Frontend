import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import Offer from "@components/offer";

export default function Home() {
  return (
    <>
      <div className="bg-[#DD3C00] h-dvh">
        <Navbar />
      </div>
      <Offer />
      <Footer />
    </>
  );
}
