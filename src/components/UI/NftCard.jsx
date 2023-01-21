import React, { useState } from "react";
import styles from "../../styles/components/UI/NftCard.module.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const NftCard = ({ product }) => {
    const { id, title, imgUrl, creator, creatorImg, currentBid } = product;
    const [showModal, setShowModal] = useState(false);


    return (
        <div className={ styles["nft-card"] }>
            <div className={ styles["nft-card__image"] }>
                <Link to={ `/ecommerce-nft/nft-details/${ id }` }><img src={ imgUrl } alt="single-card"/></Link>
            </div>
            <div className={ styles["nft-card__content"] }>
                <Link to={ `/ecommerce-nft/nft-details/${ id }` }><h5
                    className={ styles["nft-card__title"] }>{ title }</h5></Link>

                <div className={ `${ styles["creator-info__wrapper"] } d-flex gap-3` }>
                    <div className={ `${ styles["creator-info__image"] } d-flex align-items-center` }>
                        <img src={ creatorImg } alt="creator"/>
                    </div>
                    <div
                        className={ `${ styles["creator-info"] } d-flex align-items-center justify-content-between w-100` }>
                        <div className={ styles["creator-info__author"] }>
                            <h6>Created By</h6>
                            <p>{ creator }</p>
                        </div>
                        <div className={ styles["creator-info__price"] }>
                            <h6>Current Bid</h6>
                            <p>{ currentBid } ETH</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles['creator-info__btns']} mt-3 d-flex align-items-center justify-content-between`}>
                    <button className="btn btn__primary without__responsive" onClick={() => setShowModal(true)}><i className="ri-shopping-basket-line"/>Place
                        Bid
                    </button>

                    {showModal && <Modal setShowModal={setShowModal} />}

                    <Link to="#">View History</Link>
                </div>
            </div>
        </div>
    );
};

export default NftCard;