import Footer from "./Components/layout/Footer";
import Navber from "./Components/layout/Navber";
import Hero from "./Components/section/Hero";
import TrendingProducts from "./Components/section/Product";
import Faq from "./Components/section/Faq";
import Review from "./Components/section/Review";
import PopularCategory from "./Components/section/Catagory";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="">
          <Navber />
        </div>
        <Hero />
        <PopularCategory></PopularCategory>
        <TrendingProducts />
        <Review />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
