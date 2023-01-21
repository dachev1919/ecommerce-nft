import styles from "../styles/pages/NftDetails.module.css";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import LiveAuction from "../components/UI/LiveAuction";

const NftDetails = () => {
    const { id } = useParams();
    const product = NFT__DATA.find(({ id: itemId }) => itemId === id);
    const { title, desc, imgUrl, creator, creatorImg, currentBid } = product;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


    return (
        <Helmet title={ title }>
            <CommonSection title={ title }></CommonSection>

            <section className={ styles["nft-details"] }>
                <Container>
                    <Row>
                        <Col md="6" className={ styles["nft-details__image"] }>
                            <img src={ imgUrl } alt="product"/>
                        </Col>
                        <Col md="6" className={ styles["nft-details__content"] }>
                            <h2>{ title }</h2>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className={ `${ styles["nft-details__seen"] } d-flex align-items-center gap-4` }>
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="ri-eye-line"/>
                                        234
                                    </span>
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="ri-heart-line"/>
                                        123
                                    </span>
                                </div>

                                <div className={ `${ styles["nft-details__share"] } d-flex align-items-center gap-4` }>
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="ri-send-plane-line"/>
                                    </span>
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="ri-more-2-line"/>
                                    </span>
                                </div>
                            </div>
                            <div className={ `${styles["nft-details__creator"]} d-flex align-items-center` }>
                                <div className={ styles["nft-details__creator-image"] }>
                                    <img src={ creatorImg } alt="creator"/>
                                </div>
                                <div className={ `${styles["nft-details__creator-details"]}` }>
                                    <p className='mb-1'>Created by</p>
                                    <h6 className='m-0'>{ creator }</h6>
                                </div>
                            </div>
                            <p className={`${styles["nft-details__description"]}`}>{desc}</p>
                            <Link className={styles['nft-details__btn-primary']} to={'/ecommerce-nft/wallet'}><button className='w-100 justify-content-center btn btn__primary without__responsive'><i className='ri-shopping-basket-line'/>Place a Bid</button></Link>
                            <Link to={'/ecommerce-nft/market'}><button className='w-100 justify-content-center btn btn__secondary without__responsive'><i className='ri-arrow-go-back-line'/>NFTs list</button></Link>
                            <div className={`${styles['nft-details__share']} d-flex align-items-center gap-3`}>
                                <p className='m-0'>Share: </p>
                                <div className={`${styles['nft-details__social']} d-flex gap-3 align-items-center`}>
                                    <Link to={'/ecommerce-nft'}><i className='ri-facebook-line'/></Link>
                                    <Link to={'/ecommerce-nft'}><i className='ri-twitter-line'/></Link>
                                    <Link to={'/ecommerce-nft'}><i className='ri-instagram-line'/></Link>
                                    <Link to={'/ecommerce-nft'}><i className='ri-telegram-line'/></Link>
                                    <Link to={'/ecommerce-nft'}><i className='ri-discord-line'/></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <LiveAuction />
        </Helmet>
    );
};

export default NftDetails;