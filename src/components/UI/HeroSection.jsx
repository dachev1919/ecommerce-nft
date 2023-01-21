import styles from "../../styles/components/UI/HeroSection.module.css";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import image from '../../assets/images/hero.jpg';

const HeroSection = () => {
    return (
        <section className={ styles["hero-section"] }>
            <Container>
                <Row>
                    <Col md="6">
                        <div className={ styles["hero-section__content"] }>
                            <h2>Discover rare digital art and collect <span
                                className="logo">sell extraordinary</span> NFTs</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet deleniti id incidunt quam? Amet aperiam cumque necessitatibus
                                nostrum saepe vero?
                            </p>
                            <div className={`${styles['hero-section__btns']} d-flex align-items-center gap-4`}>
                                <Link to="/ecommerce-nft/market">
                                    <button className="btn btn__primary without__responsive"><i className="ri-rocket-line"/>Explore</button>
                                </Link>
                                <Link to="/ecommerce-nft/market">
                                    <button className="btn btn__primary without__responsive"><i className="ri-ball-pen-line"/>Explore
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={ styles["hero-section__image"] }>
                            <img src={image} alt="hero"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;