import styles from "../styles/pages/Create.module.css";
import Helmet from "../components/Helmet";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import NftCard from "../components/UI/NftCard";
import img01 from "../assets/images/img-01.jpg";
import ava01 from "../assets/images/ava-01.png";

const ITEM = {
    id: "01",
    title: "Travel Monkey Club",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img01,
    creator: "Trista Francis",
    creatorImg: ava01,
    currentBid: 5.89,
    category: "art",
};


const Create = () => {
    return (
        <Helmet title="Create">
            <CommonSection title="Create Item"/>
            <section className={ styles.create }>
                <Container>
                    <Row>
                        <Col md="6" lg="4">
                            <h5 className="mb-4">Preview Item</h5>
                            <NftCard product={ ITEM }/>
                        </Col>
                        <Col md="6" lg="8" className={ styles["create__item"] }>
                            <form onSubmit={ (e) => e.preventDefault() }>
                                <div>
                                    <label htmlFor="file" className="mb-2">Upload File</label>
                                    <input type="file" placeholder="Browse" id="file"
                                           className={ `${ styles["create__input"] } form__group input-primary` }/>
                                </div>
                                <div>
                                    <label htmlFor="price" className="mb-2">Price</label>
                                    <input type="number" min="0" placeholder="Enter price for one item (ETH)" id="price"
                                           className={ `${ styles["create__input"] } form__group input-primary` }/>
                                </div>
                                <div>
                                    <label htmlFor="min-bid" className="mb-2">Minimum Bud</label>
                                    <input type="number" min="0" placeholder="Enter minimum bid" id="min-bid"
                                           className={ `${ styles["create__input"] } form__group input-primary` }/>
                                </div>
                                <div className="d-flex justify-content-between gap-3">
                                    <div className="w-50">
                                        <label htmlFor="start-date" className="mb-2">Starting Date</label>
                                        <input type="date" id="start-date"
                                               className={ `${ styles["create__input"] } form__group input-primary` }/>
                                    </div>
                                    <div className="w-50">
                                        <label htmlFor="end-date" className="mb-2">Expiration Date</label>
                                        <input type="date" id="end-date"
                                               className={ `${ styles["create__input"] } form__group input-primary` }/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="title" className="mb-2">Title</label>
                                    <input type="text" id="title" placeholder="Enter Title"
                                           className={ `${ styles["create__input"] } form__group input-primary` }/>
                                </div>
                                <div>
                                    <label htmlFor="description" className="mb-2">Description</label>
                                    <textarea rows="7" cols="30" id="description" placeholder="Enter Description"
                                              className={ `${ styles["create__input"] } form__group input-primary` }/>
                                </div>
                                <div className="d-flex w-100 justify-content-end">
                                    <button type="submit" className="btn btn__primary without__responsive">Create
                                    </button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Create;