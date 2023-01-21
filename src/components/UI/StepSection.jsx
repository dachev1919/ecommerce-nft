import styles from '../../styles/components/UI/StepSection.module.css';
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const STEP__DATA = [
    {
        id: 1,
        title: 'Setup your wallet',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque consequatur ducimus.',
        icon: 'ri-wallet-line'
    },
    {
        id: 2,
        title: 'Create your collection',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque consequatur ducimus.',
        icon: 'ri-layout-masonry-line'
    },
    {
        id: 3,
        title: 'Add your NFTs',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque consequatur ducimus.',
        icon: 'ri-image-line'
    },
    {
        id: 4,
        title: 'List them for sale',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque consequatur ducimus.',
        icon: 'ri-list-check'
    },
]

const StepSection = () => {
    return (
        <section className={styles['step-section']}>
            <Container>
                <Row>
                    <Col className='col-12 mb-4'>
                        <h3>Create And Sell Your NFTs</h3>
                    </Col>
                    {
                        STEP__DATA.map((item) => (
                            <Col className={styles['step-section__item__wrapper']} key={item.id} lg='3'>
                                <Link to={'/ecommerce-nft/wallet'}>
                                    <div className={styles['single-step__item']}>
                                        <span><i className={ item.icon } /></span>
                                        <div className={styles['single-step__content']}>
                                            <h5>{ item.title }</h5>
                                            <p>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default StepSection;