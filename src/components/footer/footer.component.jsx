import React from 'react'
import './footer.styles.scss'
export default function Footer() {
  return (
    <footer className="footer">


      <div className="footer__contact" >
        <a className='anchor' href="mailto:info@theboywhodesigns.com"> info@theboywhodesigns.com
        </a>
        <br />
        <a className='anchor' href="tel:+91 84539 69124">+91 84539 69124
        </a>
      </div>

      <div className="footer__social">
        <ul>
          <li><a className='anchor anchor--1' href="https://www.facebook.com/prithvirai06/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a className='anchor anchor--1' href="https://wa.link/bybzt4" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a className='anchor anchor--1' href="https://www.instagram.com/theboywhodesigns_/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" ></i></a></li>
          <li><a className='anchor anchor--1' href="https://www.linkedin.com/in/prithviraj-rai-9b2a411b3/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li><a className='anchor anchor--1' href="https://www.threads.net/@theboywhodesigns_" target="_blank" rel="noreferrer"><i className="fa-solid fa-at"></i></a></li>
        </ul>
      </div>
      <div className="footer__copyright" >
        <a className="anchor" data-bs-toggle="tooltip" href="https://www.linkedin.com/in/surajroydev/">Crafted by Suraj</a>
        <br />
        <span className="anchor" id="date" >
          copyright @{new Date().getFullYear()}
        </span>
      </div>


    </footer>
  )
}
