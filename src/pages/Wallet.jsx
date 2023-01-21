import styles from "../styles/pages/Wallet.module.css";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import StepSection from "../components/UI/StepSection";
import { WALLET__DATA } from "../assets/data/data";

const Wallet = () => {
    return (
        <Helmet title="Wallet">
            <CommonSection title="Wallet"></CommonSection>
            <section className={ styles.wallet }>
                <Container>
                    <Row>
                        <Col className="col-12 mb-5 text-center">
                            <div className="w-50 m-auto">
                                <h3>Connect your wallet</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                    blanditiis expedita iure laborum molestias quia, sed sequi tempore vero vitae.
                                </p>
                            </div>
                        </Col>

                        <StepSection data={ WALLET__DATA }/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Wallet;