import styles from "../styles/pages/NftDetails.module.css";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const NftDetails = () => {
    const { id } = useParams();
    const product = NFT__DATA.find(({ id: itemId }) => itemId === id);
    const { title, desc, imgUrl, creator, creatorImg, currentBid } = product;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Helmet title={ title }>
            <CommonSection title={ title }></CommonSection>

            <section className={ styles["nft-details"] }>
                <Container>
                    <Row>
                        <Col sm="6" className={ styles["nft-details__image"] }>
                            <img src={ imgUrl } alt="product"/>
                        </Col>
                        <Col sm="6" className={ styles["nft-details__content"] }>
                            <h2>{ title }</h2>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className={`${styles['nft-details__content-seen']} d-flex align-items-center gap-4`}>
                                    <span className='d-flex align-items-center gap-2'><i className='ri-eye-line' />234</span>
                                    <span className='d-flex align-items-center gap-2'><i className='ri-heart-line' />123</span>
                                </div>

                                <div className={`${styles['nft-details__content-share']} d-flex align-items-center gap-4`}>
                                    <span className='d-flex align-items-center gap-2'><i className='ri-send-plane-line' /></span>
                                    <span className='d-flex align-items-center gap-2'><i className='ri-more-2-line' /></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default NftDetails;