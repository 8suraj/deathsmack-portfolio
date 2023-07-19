import React, { useEffect, useRef, useState } from 'react'
import './creativeVideoDisplay.styles.scss'
import { Header2 } from '../header/header.components'
export default function CreativeDisplay({ header, images }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideCount, setSlideCount] = useState(1)
    const [img, setImg] = useState(false);
    const superContainer = useRef();
    const refVar = useRef();
    useEffect(() => {
        setSlideCount(images.length);
        refVar.current = superContainer.current.querySelectorAll(".slideShow")
        refVar.current[0].classList.remove("creatives1__slideshow1")
        refVar.current[0].classList.add("creatives1__slideshow1--activeNext")
    }, [])

    const prevSlide = () => {
        if (activeIndex - 1 < 0) {
            refVar.current[0].className = ''
            refVar.current[0].classList.add("creatives1__slideshow1--InActiveNext")
            refVar.current[0].classList.add("creatives1__slideshow1")
            refVar.current[0].classList.add("slideshow")
            refVar.current[slideCount - 1].classList.remove("creatives1__slideshow1")
            refVar.current[slideCount - 1].classList.add("creatives1__slideshow1--activePrev")
            setActiveIndex(slideCount - 1)
            return
        }
        refVar.current[activeIndex].className = ''
        refVar.current[activeIndex].classList.add("creatives1__slideshow1--InActiveNext")
        refVar.current[activeIndex].classList.add("creatives1__slideshow1")
        refVar.current[activeIndex].classList.add("slideshow")
        refVar.current[activeIndex - 1].classList.remove("creatives1__slideshow1")
        refVar.current[activeIndex - 1].classList.add("creatives1__slideshow1--activePrev")
        setActiveIndex(activeIndex - 1)

    }
    const nextSlide = () => {
        if (activeIndex + 1 < slideCount) {
            refVar.current[activeIndex].className = ''
            refVar.current[activeIndex].classList.add("creatives1__slideshow1--InActivePrev")
            refVar.current[activeIndex].classList.add("creatives1__slideshow1")
            refVar.current[activeIndex].classList.add("slideshow")
            refVar.current[activeIndex + 1].classList.remove("creatives1__slideshow1")
            refVar.current[activeIndex + 1].classList.add("creatives1__slideshow1--activeNext")
            setActiveIndex(activeIndex + 1)
            return
        }
        refVar.current[activeIndex].className = ''
        refVar.current[activeIndex].classList.add("creatives1__slideshow1--InActivePrev")
        refVar.current[activeIndex].classList.add("creatives1__slideshow1")
        refVar.current[activeIndex].classList.add("slideshow")
        refVar.current[0].classList.remove("creatives1__slideshow1")
        refVar.current[0].classList.add("creatives1__slideshow1--activeNext")
        setActiveIndex(0)

    }

    const setSlide = (e) => {
        refVar.forEach(element => {
            element.current.className = ''
            element.current.classList.add("slideshow")
            element.current.classList.add("creatives1__slideshow")
        });
        refVar.current[e].classList.remove("creatives1__slideshow")
        refVar.current[e].classList.add("creatives1__slideshow--activeNext")
    }

    return (
        <section className='creatives1' >
            <Header2 text={header} />
            <div className="creatives1__slideshow1-container" ref={superContainer} >
                {images?.map((item) =>
                    <div className="creatives1__slideshow1 slideShow"  >
                        <div className="creatives1__gallery1">
                            {item?.map((e) =>
                                <div className="creatives1__img-container1">

                                    <img src={e.img} alt="" onTouchMove={() => setImg(true)} className={`abs ${img && 'hidden'}`} />
                                    <video autoPlay preload="auto" loop muted playsInline onTouchMove={e => e.target.play()} className={`${!img && 'hidden'}`}>
                                        <source src={e.video} type="video/mp4" />
                                    </video>
                                </div>)}
                        </div>
                    </div>
                )}
                {
                    (slideCount > 1) && <>
                        <span className="creatives__prev" onClick={prevSlide} >&#10094;</span>
                        <span className="creatives__next" onClick={nextSlide}>&#10095;</span>
                    </>}
            </div>


        </section>
    )
}
