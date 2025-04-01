import Convenient from "@components/convenient";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import FAQs from "./components/faqs";   // From `feat-6`
import Offer from "@components/offer";  // From `main`
import GetStarted from "@components/GetStarted";

export default function Home() {
  return (
    <>
      <div className="bg-[#DD3C00] h-dvh">
        <Navbar />
        <FAQs />       {/* From `feat-6` */}
      </div>
      <Offer />         {/* From `main` */}
      <Convenient />
      <GetStarted />
      <Footer />
    </>
  );
}
