import styles from '../../styles/components/UI/StepSection.module.css';
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";



const StepSection = ({data}) => {
    return (
        <section className={styles['step-section']}>
            <Container>
                <Row>
                    <Col className='col-12 mb-4'>
                        <h3>Create And Sell Your NFTs</h3>
                    </Col>
                    {
                        data.map((item) => (
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