import React from 'react'
import './aboutMe.styles.scss'
import profile from "../../asset/image/bioDp.jpg"
import { Header1 } from '../header/header.components'
export default function AboutMe() {
  return (
    <section className='aboutsection'>
      {/* <h1 className="aboutme__header" >Who am I?</h1> */}
      <div className="aboutme">
        <Header1 text="Who am I?" color='#1a1a1a' />

        <div className="aboutme__container">
          <div className="aboutme__desc" >
            <div className="aboutme__data">
              <div className="aboutme__data--head">prithvi Rai</div>
              <div className="aboutme__data--body">GREETINGS!  I'm Prithvi, an inquisitive Graphic & Motion Designer specializing in modern branding experiences. With a keen eye for detail and aesthetics, I specialize in crafting modern branding solutions that leave a lasting impression. From Logos to Motion Graphics, Social Media Designs to Packaging, and even 3D Product Designs, I bring your brand to life with creativity and finesse. Collaborating with me means having a partner who understands the power of visual storytelling and is committed to helping your brand stand out in today's competitive landscape. Let's embark on a creative journey together and transform your vision into a remarkable reality. Get in touch, and let's start crafting something extraordinary.</div>
            </div>
          </div>
          <div className="aboutme__img">
            <div className="aboutme__img1" />
            <img className="favicon" src={profile} alt="..." />
          </div>
        </div>

      </div>
    </section>
  )
}
