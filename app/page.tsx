import Convenient from "@components/convenient";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import Offer from "@components/offer";
import GetStarted from "@components/GetStarted";

export default function Home() {
  return (
    <>
      <div className="bg-[#DD3C00] h-dvh">
        <Navbar />
      </div>
      <Offer />
<<<<<<< HEAD
      <Convenient/>
=======
      <GetStarted />
>>>>>>> 2e1324c (making_changes)
      <Footer />
    </>
  );
}
