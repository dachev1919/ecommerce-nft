import Helmet from "../components/Helmet";
import HeroSection from "../components/UI/HeroSection";
import LiveAuction from "../components/UI/LiveAuction";
import SellerSection from "../components/UI/SellerSection";
import TrendingSection from "../components/UI/TrendingSection";
import StepSection from "../components/UI/StepSection";

const Home = () => {
    return (
        <Helmet title='Home'>
            <HeroSection />

            <LiveAuction />

            <SellerSection />

            <TrendingSection />

            <StepSection />
        </Helmet>
    );
};

export default Home;