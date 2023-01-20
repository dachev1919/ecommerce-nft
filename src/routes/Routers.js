import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Contact from "../pages/Contact";
import EditProfile from "../pages/EditProfile";
import NftDetails from "../pages/NftDetails";
import SellerProfile from "../pages/SellerProfile";
import Wallet from "../pages/Wallet";
import Create from "../pages/Create";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/ecommerce-nft' />}/>
            <Route path='/ecommerce-nft' element={<Home />} />
            <Route path='/ecommerce-nft/market' element={<Market />} />
            <Route path='/ecommerce-nft/contact' element={<Contact />} />
            <Route path='/ecommerce-nft/edit-profile' element={<EditProfile />} />
            <Route path='/ecommerce-nft/nft-details/:id' element={<NftDetails />} />
            <Route path='/ecommerce-nft/seller-profile' element={<SellerProfile />} />
            <Route path='/ecommerce-nft/wallet' element={<Wallet />} />
            <Route path='/ecommerce-nft/create' element={<Create />} />
        </Routes>
    );
};

export default Routers;