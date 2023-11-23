
import AboutUs from "./AboutUs/AboutUs";
import HeroSection from "./HeroSection/HeroSection";
import LatestProductSection from "./LatestProductSection/LatestProductSection";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
    return (
        <>
           <HeroSection />
           <LatestProductSection />
           <AboutUs />
           <NewsLetter />
        </>
    );
};

export default Home;