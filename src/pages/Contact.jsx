import styles from "../styles/pages/Contact.module.css";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useState } from "react";

const Contact = () => {
    const [nameRef, setNameRef] = useState();
    const [emailRef, setEmailRef] = useState();
    const [subjectRef, setSubjectRef] = useState();
    const [messageRef, setMessageRef] = useState();

    const submitHandler = (e) => {
        e.preventDefault();

        setNameRef('');
        setEmailRef('');
        setSubjectRef('');
        setMessageRef('');
    };

    return (
        <Helmet title="Contact">
            <CommonSection title="Contact"></CommonSection>
            <section className={ styles.contact }>
                <Container>
                    <Row>
                        <Col md="6" className="m-auto">
                            <h2>Drop a Message</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque
                                dicta dolore exercitationem, fugiat illo ipsum iste nemo non ratione.
                            </p>
                            <div className={ styles["contact__form"] }>
                                <form onSubmit={ submitHandler }>
                                    <div>
                                        <input value={nameRef} type="text" placeholder="Enter your name"
                                               className={ `${ styles["create__input"] } form__group input-primary` } onChange={(e) => setNameRef(e.target.value)}/>
                                    </div>
                                    <div>
                                        <input value={emailRef} type="email" placeholder="Enter your email"
                                               className={ `${ styles["create__input"] } form__group input-primary` } onChange={(e) => setEmailRef(e.target.value)}/>
                                    </div>
                                    <div>
                                        <input value={subjectRef} type="text" placeholder="Enter subject"
                                               className={ `${ styles["create__input"] } form__group input-primary` } onChange={(e) => setSubjectRef(e.target.value)}/>
                                    </div>
                                    <div>
                                        <textarea value={messageRef} rows="5" placeholder="Write message"
                                                  className={ `${ styles["create__input"] } form__group input-primary` } onChange={(e) => setMessageRef(e.target.value)}/>
                                    </div>
                                    <div className="d-flex w-100 justify-content-end">
                                        <button type="submit" className="btn btn__primary without__responsive">Send a
                                            Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;