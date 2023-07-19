import React, { useState, useRef, useEffect } from 'react'
import './whatIDo.styles.scss'
import { Header1 } from '../header/header.components'

export default function WhatIDo() {
    const slideCount = 4;
    const [activeIndex, setActiveIndex] = useState(0)
    const superContainer = useRef();
    const refVar = useRef()
    useEffect(() => {
        refVar.current = superContainer.current.querySelectorAll(".option")
        refVar.current[0].classList.remove("whatIDo1__option")
        refVar.current[0].classList.add("whatIDo1__option__active")
        refVar.current[0].classList.add("creatives__option--activeNext")
    }, [])

    const prevSlide = () => {
        if (activeIndex - 1 < 0) {
            refVar.current[0].className = ''
            refVar.current[0].classList.add("whatIDo1__option--InActiveNext")
            refVar.current[0].classList.add("whatIDo1__option")
            refVar.current[0].classList.add("option")
            refVar.current[slideCount - 1].classList.remove("whatIDo1__option")
            refVar.current[slideCount - 1].classList.add("whatIDo1__option__active")
            refVar.current[slideCount - 1].classList.add("whatIDo1__option--activePrev")
            setActiveIndex(slideCount - 1)
            return
        }
        refVar.current[activeIndex].className = ''
        refVar.current[activeIndex].classList.add("whatIDo1__option--InActiveNext")
        refVar.current[activeIndex].classList.add("whatIDo1__option")
        refVar.current[activeIndex].classList.add("option")
        refVar.current[activeIndex - 1].classList.remove("whatIDo1__option")
        refVar.current[activeIndex - 1].classList.add("whatIDo1__option__active")
        refVar.current[activeIndex - 1].classList.add("whatIDo1__option--activePrev")
        setActiveIndex(activeIndex - 1)

    }
    const nextSlide = () => {
        if (activeIndex + 1 < slideCount) {
            refVar.current[activeIndex].className = ''
            refVar.current[activeIndex].classList.add("whatIDo1__option--InActivePrev")
            refVar.current[activeIndex].classList.add("whatIDo1__option")
            refVar.current[activeIndex].classList.add("option")
            refVar.current[activeIndex + 1].classList.remove("whatIDo1__option")
            refVar.current[activeIndex + 1].classList.add("whatIDo1__option__active")
            refVar.current[activeIndex + 1].classList.add("whatIDo1__option--activeNext")
            setActiveIndex(activeIndex + 1)
            return
        }
        refVar.current[activeIndex].className = ''
        refVar.current[activeIndex].classList.add("whatIDo1__option--InActivePrev")
        refVar.current[activeIndex].classList.add("whatIDo1__option")
        refVar.current[activeIndex].classList.add("option")
        refVar.current[0].classList.remove("whatIDo1__option")
        refVar.current[0].classList.add("whatIDo1__option__active")
        refVar.current[0].classList.add("whatIDo1__option--activeNext")
        setActiveIndex(0)

    }

    return (
        <section>
            <div className="whatIDo" >
                <Header1 text="WHAT I DO" />

                <div className="whatIDo__options">
                    {/* <div className="whatIDo__option" >
                        <h2 className="whatIDo__option-as">SOCIAL MEDIA MARKETING</h2>
                        <p>In the age of connectivity, social media has become an indispensable tool for businesses. Effective social media marketing can help you connect with your target audience, build brand awareness, and drive engagement. With my expertise, I can craft compelling visuals and strategic campaigns that will elevate your social media presence and maximize your reach across platforms.</p>
                    </div> */}
                    <div className="whatIDo__option"  >
                        <h2 className="whatIDo__option-as">BRAND IDENTITY</h2>
                        <p className="p">Your brand identity is the essence of your business and how you want to be perceived by your audience. It encompasses your logo, color palette, typography, and overall visual style. I can help you establish a strong and cohesive brand identity that resonates with your target market, creating a memorable and impactful brand presence.</p>
                    </div>

                    <div className="whatIDo__option"  >
                        <h2 className="whatIDo__option-as">GRAPHIC DESIGN</h2>
                        <p className="p">Visual communication is paramount in capturing attention and conveying messages effectively. Whether it's designing eye-catching graphics for your website, crafting stunning print materials, or creating engaging infographics, I possess the skills to transform your ideas into visually captivating designs that leave a lasting impression on your audience.</p>

                    </div>
                    <div className="whatIDo__option" >
                        <h2 className="whatIDo__option-as">MOTION GRAPHICS</h2>
                        <p className="p">In the fast-paced digital world, motion graphics have emerged as a powerful tool for storytelling. Combining graphic design and animation, motion graphics bring your ideas to life and enhance user engagement. I can create dynamic and visually appealing motion graphics that effectively communicate your brand message and captivate your audience's attention.</p>
                    </div>
                    <div className="whatIDo__option" >
                        <h2 className="whatIDo__option-as">3D PRODUCT DESIGN</h2>
                        <p className="p">In today's competitive market, it's crucial to present your products in the most engaging and realistic way possible. 3D product design enables you to showcase your products from every angle, providing a virtual experience to potential customers. With my expertise in 3D modeling and rendering, I can create stunning visuals that highlight the unique features and benefits of your products, ultimately boosting sales and customer engagement</p>
                    </div>
                    {/* <div className="whatIDo__option" >
                        <h2 className="whatIDo__option-as">OUTDOOR MARKETING</h2>
                        <p>While the digital landscape is vital, outdoor marketing still plays a significant role in reaching your target audience. From billboards to event signage, I can create visually striking designs that stand out in the physical world. Whether you need captivating event graphics, attention-grabbing outdoor advertisements, or impactful event branding, I can help you make a lasting impression and ensure your message resonates with your audience</p>
                    </div> */}


                </div>

            </div>
            <div className="whatIDo1" >
                <Header1 text="WHAT I DO" />

                <div className="whatIDo1__options" ref={superContainer}>

                    {/* <div className="whatIDo1__option option" >
                        <h2 className="whatIDo1__option-as">SOCIAL MEDIA MARKETING</h2>
                        <p>In the age of connectivity, social media has become an indispensable tool for businesses. Effective social media marketing can help you connect with your target audience, build brand awareness, and drive engagement. With my expertise, I can craft compelling visuals and strategic campaigns that will elevate your social media presence and maximize your reach across platforms.</p>
                    </div> */}
                    <div className="whatIDo1__option option"  >
                        <h2 className="whatIDo1__option-as">BRAND IDENTITY</h2>
                        <p className="p">Your brand identity is the essence of your business and how you want to be perceived by your audience. It encompasses your logo, color palette, typography, and overall visual style. I can help you establish a strong and cohesive brand identity that resonates with your target market, creating a memorable and impactful brand presence.</p>
                    </div>
                    <div className="whatIDo1__option option"  >
                        <h2 className="whatIDo1__option-as">GRAPHIC DESIGN</h2>
                        <p className="p">Visual communication is paramount in capturing attention and conveying messages effectively. Whether it's designing eye-catching graphics for your website, crafting stunning print materials, or creating engaging infographics, I possess the skills to transform your ideas into visually captivating designs that leave a lasting impression on your audience.</p>

                    </div>
                    <div className="whatIDo1__option option" >
                        <h2 className="whatIDo1__option-as">MOTION GRAPHICS</h2>
                        <p className="p">In the fast-paced digital world, motion graphics have emerged as a powerful tool for storytelling. Combining graphic design and animation, motion graphics bring your ideas to life and enhance user engagement. I can create dynamic and visually appealing motion graphics that effectively communicate your brand message and captivate your audience's attention.</p>
                    </div>
                    <div className="whatIDo1__option option" >
                        <h2 className="whatIDo1__option-as">3D PRODUCT DESIGN</h2>
                        <p className="p">In today's competitive market, it's crucial to present your products in the most engaging and realistic way possible. 3D product design enables you to showcase your products from every angle, providing a virtual experience to potential customers. With my expertise in 3D modeling and rendering, I can create stunning visuals that highlight the unique features and benefits of your products, ultimately boosting sales and customer engagement</p>
                    </div>
                    {/* <div className="whatIDo1__option option" >
                        <h2 className="whatIDo1__option-as">OUTDOOR MARKETING</h2>
                        <p>While the digital landscape is vital, outdoor marketing still plays a significant role in reaching your target audience. From billboards to event signage, I can create visually striking designs that stand out in the physical world. Whether you need captivating event graphics, attention-grabbing outdoor advertisements, or impactful event branding, I can help you make a lasting impression and ensure your message resonates with your audience</p>
                    </div> */}

                    <span className="creatives__prev1" onClick={prevSlide}>&#10094;</span>
                    <span className="creatives__next1" onClick={nextSlide}>&#10095;</span>

                </div>
            </div>
        </section>
    )
}
