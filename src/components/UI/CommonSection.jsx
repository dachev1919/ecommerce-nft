import styles from "../../styles/components/UI/CommonSection.module.css";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {
    return (
        <section className={ `${styles["common-section"]} d-flex align-items-center justify-content-center` }>
            <Container className="text-center">
                <h2 className='m-0'>{ title }</h2>
            </Container>
        </section>
    );
};

export default CommonSection;