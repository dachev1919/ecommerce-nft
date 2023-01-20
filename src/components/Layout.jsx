import Header from "./Header";
import Footer from "./Footer";
import Routers from "../routes/Routers";

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <Routers />
            <Footer/>
        </>
    );
};

export default Layout;