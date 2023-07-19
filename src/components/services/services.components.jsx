import React from 'react'
import './services.styles.scss'
import { Header1 } from '../header/header.components'
export default function Services() {

  return (
    <section className="servics" id='services'>

      <div className="services__container" >
        <Header1 text="SERVICES" />

        <div className="services__body" >

          <div className="services__body--item">
            <h3 className="services__body--item-head" >Brand Identity</h3>
            <p className="services__body--item-para">Create a lasting impression with a compelling brand identity that reflects your unique story and resonates with your target audience</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head">Logo Design</h3>
            <p className="services__body--item-para">Craft a visually stunning logo that captures the essence of your brand and communicates its values with simplicity and impact</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head" >Social Media Design</h3>
            <p className="services__body--item-para">Elevate your online presence with captivating social media designs that engage your audience and strengthen your brand's digital footprint</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head">Outdoor Advertising</h3>
            <p className="services__body--item-para">Make a bold statement in the physical world with eye-catching outdoor advertising designs that grab attention and leave a lasting impression</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head">Packaging Design</h3>
            <p className="services__body--item-para">Enhance your product's appeal and showcase its quality through innovative packaging designs that entice customers and stand out on shelves</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head" >Logo Animation</h3>
            <p className="services__body--item-para">Bring your brand to life with dynamic logo animations that captivate viewers and add a touch of professionalism and excitement to your digital presence</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head">Motion Graphics</h3>
            <p className="services__body--item-para">Tell your brand's story in a visually stunning way through mesmerizing motion graphics that combine animation, design, and storytelling elements</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head" >3D PRODUCT DESIGN</h3>
            <p className="services__body--item-para"> Creating realistic and visually striking 3D product designs that showcase your products from every angle, leaving a lasting impression on customers</p>
          </div>
          <div className="services__body--item">
            <h3 className="services__body--item-head">Print Media Design</h3>
            <p className="services__body--item-para">Create visually striking print materials, from brochures to business cards, that effectively communicate your brand's message and leave a lasting impression in the physical world</p>
          </div>

        </div>
      </div>
    </section>
  )
}
