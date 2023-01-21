import styles from "../styles/pages/Market.module.css";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import NftCard from "../components/UI/NftCard";
import { useState } from "react";

const Market = () => {
    const [data, setData] = useState(NFT__DATA);

    const categoryHandler = (e) => {
        const categoryValue = e.target.value;

        if (categoryValue !== 'default') {
            const filteredData = NFT__DATA.filter(({category}) => category === categoryValue);
            setData(filteredData);
        } else {
            setData(NFT__DATA);
        }
    };
    const itemsHandler = (e) => {
        const value = e.target.value;


        switch (value) {
            case 'single-item':
                const singleItemData = NFT__DATA.filter(({ currentBid }) => currentBid >= 5.5);
                setData(singleItemData);
                break;
            case 'bundle':
                const bundleData = NFT__DATA.filter(({ currentBid }) => currentBid < 5.5);
                setData(bundleData);
                break;
            default:
                setData(NFT__DATA);
                break;
        }

    };

    const sortHandler = (e) => {
        const filterValue = e.target.value;

        switch (filterValue) {
            case "high":
                const highData = NFT__DATA.filter(({ currentBid }) => currentBid >= 6);
                setData(highData);
                break;
            case "mid":
                const midData = NFT__DATA.filter(({ currentBid }) => currentBid >= 5.5 && currentBid < 6);
                setData(midData);
                break;
            case "low":
                const lowData = NFT__DATA.filter(({ currentBid }) => currentBid >= 4.89 && currentBid < 5.5);
                setData(lowData);
                break;
            default:
                setData(NFT__DATA);
                break;
        }
    };

    return (
        <Helmet title="Market">
            <CommonSection title="Market"/>

            <section className={ styles["market"] }>
                <Container>
                    <Row>
                        <Col className="col-12 mb-2">
                            <div
                                className={ `${ styles["filters"] } d-flex align-items-center justify-content-between` }>
                                <div className={ `${ styles["filters__left"] } d-flex gap-4` }>
                                    <div className={ `${ styles["filter__category"] } input-wrapper` }>
                                        <select className="input-primary" onChange={ categoryHandler }>
                                            <option value='default'>All Categories</option>
                                            <option value="art">Art</option>
                                            <option value="music">Music</option>
                                            <option value="domain-name">Domain Name</option>
                                            <option value="virtual-world">Virtual World</option>
                                            <option value="trending-card">Trending Card</option>
                                        </select>
                                    </div>
                                    <div className={ `${ styles["filter__items"] } input-wrapper` }>
                                        <select className="input-primary" onChange={ itemsHandler }>
                                            <option>All Items</option>
                                            <option value="single-item">Single Item</option>
                                            <option value="bundle">Bundle</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={ `${ styles["filters__right"] } input-wrapper w-auto` }>
                                    <select className="input-primary" onChange={ sortHandler }>
                                        <option value="default">Sort By</option>
                                        <option value="high">High Rate</option>
                                        <option value="mid">Mid Rate</option>
                                        <option value="low">Low Rate</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                        {
                            data.map((product) => (
                                <Col key={ product.id } xl="3" md="6" className="mb-4">
                                    <NftCard product={ product }/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Market;