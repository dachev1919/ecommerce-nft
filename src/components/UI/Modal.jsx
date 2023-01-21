import styles from "../../styles/components/UI/Modal.module.css";

const Modal = ({setShowModal}) => {
    return (
        <div className={styles['modal__wrapper']}>
            <div className={styles.overlay} onClick={() => setShowModal(false)}></div>
            <div className={styles.modal}>
                <span><i className={`${styles.close} ri-close-line`} onClick={() => setShowModal(false)} /></span>
                <h6 className='text-center text-light'>Place a Bid</h6>
                <p>You must bid at least <span>5.89 ETH</span></p>

                <div className={ `${styles['modal__input']} input-wrapper` }>
                    <input className='input-primary' type="number" placeholder='00 : 00 ETH' />
                </div>

                <div className={styles['modal__input']}>
                    <h6>Enter Quantity, 7 available</h6>
                    <div className={ `input-wrapper` }>
                        <input className='input-primary' type="number" placeholder='00 : 00 ETH' />
                    </div>
                </div>

                <div className='mt-3 gap-4 d-flex align-items-center justify-content-between'>
                    <p className='m-0'>You must bid at least</p>
                    <span>5.89 ETH</span>
                </div>

                <div className='mt-3 gap-4 d-flex align-items-center justify-content-between'>
                    <p className='m-0'>Service Fee</p>
                    <span>0.19 ETH</span>
                </div>

                <div className='mt-3 gap-4 d-flex align-items-center justify-content-between'>
                    <p className='m-0'>Total Bid Amount</p>
                    <span>6.08 ETH</span>
                </div>

                <button className='mt-3 btn__primary btn without__responsive'>
                    Place a Bid
                </button>
            </div>
        </div>
    );
};

export default Modal;