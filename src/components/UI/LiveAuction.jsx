import styles from "../../styles/components/UI/LiveAuction.module.css";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { NFT__DATA } from "../../assets/data/data";
import NftCard from "./NftCard";

const LiveAuction = () => {
    return (
        <section className={ styles["live-auction"] }>
            <Container>
                <Row>
                    <Col lg="12">
                        <div
                            className={ `${ styles["live-auction__top"] } mb-4 d-flex align-items-center justify-content-between` }>
                            <h3>Live Auction</h3>
                            <Link to={ "/ecommerce-nft/market" }>Explore More</Link>
                        </div>
                    </Col>

                    {
                        NFT__DATA.slice(0, 4).map((product) => (
                            <Col lg="3" md="6" key={ product.id } className="mb-4">
                                <NftCard
                                    product={ product }
                                />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    );
};

export default LiveAuction;