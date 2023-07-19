/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import "./navbar.styles.scss";
import logo from "../../asset/logo/logo.svg";
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from '../footer/footer.component';

export default function Navbar() {
  const [clicked, setClicked] = useState()
  const [nav, setNav] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth',
      });
    }, 200);
  }, [clicked]);
  return (
    <>
      <div className="navigation" >
        <nav className="navigation__container" >
          <label htmlFor="navi-toggle" class="navigation__button" onClick={() => setNav(!nav)}>
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className={nav ? "navigation__background--Active" : 'navigation__background'}>&nbsp;</div>

          <Link className="navigation__brand" to="/" onClick={() => { setClicked(!clicked) }}>
            <img src={logo} alt="logo" className="navigation__logo " />
          </Link>
          <div className={nav ? "navigation__nav--Active" : 'navigation__nav'}>
            <ul className="navigation__list navigation__ul">
              <li className="navigation__item" ><Link to="/" class="navigation__link" onClick={() => { setClicked(!clicked); setNav(false) }}>HOME</Link></li>
              <li className="navigation__item"><Link to="/portfolio" class="navigation__link" onClick={() => { setClicked(!clicked); setNav(false) }}>PORTFOLIO</Link></li>
              <li className="navigation__item"><HashLink smooth to="/#services" class="navigation__link" onClick={() => setNav(false)}>SERVICES</HashLink></li>
              <li className="navigation__item"><HashLink smooth to="/#contact" class="navigation__link" onClick={() => setNav(false)}>CONTACT</HashLink></li>
            </ul>
          </div>
        </nav>
      </div >

      <Outlet />
      <Footer />
    </>
  )
}
