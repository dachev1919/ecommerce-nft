import styles from "../../styles/components/UI/SellerSection.module.css";
import { Col, Container, Row } from "reactstrap";
import { SELLER__DATA } from "../../assets/data/data";

const SellerSection = () => {
    return (
        <section className={ styles["seller-section"] }>
            <Container>
                <Row>
                    <Col className="col-12 mb-4">
                        <div className={ styles["seller-section__title"] }>
                            <h3>Top Seller</h3>
                        </div>
                    </Col>
                    {
                        SELLER__DATA.slice(0, 6).map(({ id, sellerName, sellerImg, currentBid }) => (
                            <Col key={ id } lg="2" sm="4" md="3" className="mb-3 col-6">
                                <div className={ `${ styles["single-seller__card"] } d-flex align-items-center gap-3` }>
                                    <div className={ styles["single-seller__image"] }>
                                        <img src={ sellerImg } alt=""/>
                                    </div>
                                    <div className={ styles["single-seller__content"] }>
                                        <h6>{ sellerName }</h6>
                                        <h6>{ currentBid } ETH</h6>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default SellerSection;