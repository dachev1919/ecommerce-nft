import styles from "../../styles/components/UI/TrendingSection.module.css";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../../assets/data/data";
import NftCard from "./NftCard";

const TrendingSection = () => {
    return (
        <section className={ styles["trending-section"] }>
            <Container>
                <Row>
                    <Col className="col-12 mb-4">
                        <h3>Trending</h3>
                    </Col>
                    {
                        NFT__DATA.slice(0, 8).map((product, index) => (
                            <Col key={index} lg="3" md="6" className='mb-4'>
                                <NftCard product={product} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default TrendingSection;