import Counter from "./Counter";
import Feedback from "./Feedback";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import MostPopularCourse from "./MostPopularCourse";
import Navbar from "./Navbar";
import TrendingCourse from "./TrendingCourse";

const Home = () => {
  return (
    <>
      <div className="row">
        <Navbar />
        <HeroSection />
        <Counter />
        <MostPopularCourse />
        <TrendingCourse />
        <Feedback />
        <Footer />
      </div>
    </>
  );
};

export default Home;
