import styles from '../styles/pages/Home.module.css';
import Helmet from "../styles/components/Helmet";
import HeroSection from "../components/UI/HeroSection";

const Home = () => {
    return (
        <Helmet title='Home'>
            <HeroSection />
        </Helmet>
    );
};

export default Home;