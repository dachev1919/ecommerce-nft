import Helmet from "../components/Helmet";
import HeroSection from "../components/UI/HeroSection";
import LiveAuction from "../components/UI/LiveAuction";
import SellerSection from "../components/UI/SellerSection";
import TrendingSection from "../components/UI/TrendingSection";
import StepSection from "../components/UI/StepSection";
import { STEP__DATA } from "../assets/data/data";

const Home = () => {
    return (
        <Helmet title='Home'>
            <HeroSection />

            <LiveAuction />

            <SellerSection />

            <TrendingSection />

            <StepSection data={STEP__DATA} />
        </Helmet>
    );
};

export default Home;