import styles from '../styles/components/Footer.module.css';
import { Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, Row } from "reactstrap";
import { Link } from "react-router-dom";

const ACCOUNT__LINK = [
    {
        display: 'Author Profile',
        path: '/ecommerce-nft/seller-profile'
    },
    {
        display: 'Create Item',
        path: '/ecommerce-nft/create'
    },
    {
        display: 'Collection',
        path: '/ecommerce-nft/market'
    },
    {
        display: 'Edit Profile',
        path: '/ecommerce-nft/edit-profile'
    },
];

const RESOURCES__LINK = [
    {
        display: 'Help Center',
        path: '/ecommerce-nft'
    },
    {
        display: 'Partner',
        path: '/ecommerce-nft'
    },
    {
        display: 'Community',
        path: '/ecommerce-nft'
    },
    {
        display: 'Activity',
        path: '/ecommerce-nft'
    },
];

const COMPANY__LINK = [
    {
        display: 'About',
        path: '/ecommerce-nft'
    },
    {
        display: 'Career',
        path: '/ecommerce-nft'
    },
    {
        display: 'Ranking',
        path: '/ecommerce-nft'
    },
    {
        display: 'Contact Us',
        path: '/ecommerce-nft/contact'
    },
];


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col lg='3' sm='6'>
                        <div className='logo'>
                            <Link to="/ecommerce-nft/">
                                <h2 className="d-flex gap-2 align-items-center">
                            <span>
                                <i className="ri-fire-fill"/>
                            </span>
                                    NFTs
                                </h2>
                            </Link>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium ad distinctio reprehenderit. Alias culpa dolorem
                            eos fugit officia similique ut!
                        </p>
                    </Col>
                    <Col lg='2' md='3' sm='6'>
                        <ListGroup className={styles['footer__list-group']}>
                            <ListGroupItemHeading className={styles['footer__title']}>My Account</ListGroupItemHeading>
                            {
                                ACCOUNT__LINK.map(({ path, display }, index) => (
                                        <Link to={path} key={index}>
                                            <ListGroupItem>{display}</ListGroupItem>
                                        </Link>
                                    )
                                )
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='2' md='3' sm='6'>
                        <ListGroup className={styles['footer__list-group']}>
                            <ListGroupItemHeading className={styles['footer__title']}>Resources</ListGroupItemHeading>
                            {
                                RESOURCES__LINK.map(({ path, display }, index) => (
                                        <Link to={path} key={index}>
                                            <ListGroupItem>{display}</ListGroupItem>
                                        </Link>
                                    )
                                )
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='2' md='3' sm='6'>
                        <ListGroup className={styles['footer__list-group']}>
                            <ListGroupItemHeading className={styles['footer__title']}>Company</ListGroupItemHeading>
                            {
                                COMPANY__LINK.map(({ path, display }, index) => (
                                        <Link to={path} key={index}>
                                            <ListGroupItem>{display}</ListGroupItem>
                                        </Link>
                                    )
                                )
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='2' sm='6'>
                        <h5 className={styles['footer__title']}>Newsletter</h5>
                        <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
                            <input className={styles['newsletter__input']} type='text' placeholder='Email'></input>
                            <button className={styles['newsletter__button']}><i className='ri-search-line' /></button>
                        </form>
                        <div className={`${styles['social-links']} d-flex gap-3 align-items-center`}>
                            <Link to={'/ecommerce-nft'}><i className='ri-facebook-line'/></Link>
                            <Link to={'/ecommerce-nft'}><i className='ri-twitter-line'/></Link>
                            <Link to={'/ecommerce-nft'}><i className='ri-instagram-line'/></Link>
                            <Link to={'/ecommerce-nft'}><i className='ri-telegram-line'/></Link>
                            <Link to={'/ecommerce-nft'}><i className='ri-discord-line'/></Link>
                        </div>
                    </Col>
                    <Col className={`col-12 ${styles['footer__copyrights']}`}>
                        <p className='text-center mt-4 mb-0'>Copyrights 2023, Developed by Dachev. All right reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;