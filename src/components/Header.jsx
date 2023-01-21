import styles from "../styles/components/Header.module.css";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const NAV__LINKS = [
    {
        display: "Home",
        path: "/ecommerce-nft",
    },
    {
        display: "Market",
        path: "/ecommerce-nft/market",
    },
    {
        display: "Create",
        path: "/ecommerce-nft/create",
    },
    {
        display: "Contact",
        path: "/ecommerce-nft/contact",
    },
];

const Header = () => {
    const headerRef = useRef();
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add(styles["header__shrink"]);
            } else {
                headerRef.current.classList.remove(styles["header__shrink"]);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const menuToggleHandler = () => menuRef.current.classList.toggle(styles['show']);



    return (
        <header ref={ headerRef } className={ styles.header }>
            <Container>
                <div className={ styles.nav }>
                    <div className="logo">
                        <Link to="/ecommerce-nft/">
                            <h2 className="m-0 d-flex gap-2 align-items-center">
                            <span>
                                <i className="ri-fire-fill"/>
                            </span>
                                NFTs
                            </h2>
                        </Link>
                    </div>
                    <div ref={ menuRef } className={ styles["nav__menu"] } onClick={menuToggleHandler}>
                        <ul className={ styles["nav__list"] }>
                            {
                                NAV__LINKS.map((link, index) => (
                                    <li key={ index } className={ styles["nav__item"] }>
                                        <NavLink to={ link.path }
                                                 className={ ({ isActive }) => isActive ? styles.active : "" }
                                                 end>{ link.display }</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={ `${ styles["nav__icons"] } d-flex align-items-center` }>
                        <Link to="/ecommerce-nft/wallet">
                            <button className="btn btn__primary">
                                <span><i className="ri-wallet-line"/></span>
                                Connect Wallet
                            </button>
                        </Link>
                        <span className={ styles["nav__mobile-menu"] } onClick={menuToggleHandler}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;