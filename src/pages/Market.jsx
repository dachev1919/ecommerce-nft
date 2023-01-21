import styles from '../styles/pages/Market.module.css';
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import NftCard from "../components/UI/NftCard";

const Market = () => {
    const categoryHandler = () => {

    };
    const itemsHandler = () => {

    };
    const sortHandler = () => {

    };

    return (
        <Helmet title='Market'>
            <CommonSection title='Market' />

            <section className={styles['market']}>
                <Container>
                    <Row>
                        <Col className='col-12 mb-2'>
                            <div className={`${styles['filters']} d-flex align-items-center justify-content-between`}>
                                <div className={`${styles['filters__left']} d-flex gap-4`}>
                                    <div className={`${styles['filter__category']} input-wrapper`}>
                                        <select className='input-primary' onChange={categoryHandler}>
                                            <option>All Categories</option>
                                            <option value="art">Art</option>
                                            <option value="music">Music</option>
                                            <option value="domain-name">Domain Name</option>
                                            <option value="virtual-world">Virtual World</option>
                                            <option value="trending-card">Trending Card</option>
                                        </select>
                                    </div>
                                    <div className={`${styles['filter__items']} input-wrapper`}>
                                        <select className='input-primary' onChange={itemsHandler}>
                                            <option>All Items</option>
                                            <option value="single-item">Single Item</option>
                                            <option value="bundle">Bundle</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={`${styles['filters__right']} input-wrapper w-auto`}>
                                    <select className='input-primary' onChange={sortHandler}>
                                        <option>Sort By</option>
                                        <option value="high-rate">High Rate</option>
                                        <option value="mid-rate">Mid Rate</option>
                                        <option value="low-rate">Low Rate</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                        {
                            NFT__DATA.map((product) => (
                                <Col key={product.id} xl='3' md="6" className='mb-4'>
                                    <NftCard product={product} />
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