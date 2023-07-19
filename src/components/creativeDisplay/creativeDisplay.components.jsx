import React, { useEffect, useRef, useState } from 'react'
import './creativeDisplay.styles.scss'
import { Header2 } from '../header/header.components'
export default function CreativeDisplay({ header, images }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideCount, setSlideCount] = useState(1)
    const superContainer = useRef();


    const refVar = useRef();
    useEffect(() => {
        setSlideCount(images.length);
        refVar.current = superContainer.current.querySelectorAll(".slideShow")
        refVar.current[0].classList.remove("creatives__slideshow")
        refVar.current[0].classList.add("creatives__slideshow--activeNext")
    }, [])

    const prevSlide = () => {
        if (activeIndex - 1 < 0) {
            refVar.current[0].className = ''
            refVar.current[0].classList.add("creatives__slideshow--InActiveNext")
            refVar.current[0].classList.add("creatives__slideshow")
            refVar.current[0].classList.add("slideshow")
            refVar.current[slideCount - 1].classList.remove("creatives__slideshow")
            refVar.current[slideCount - 1].classList.add("creatives__slideshow--activePrev")
            setActiveIndex(slideCount - 1)
            return
        }
        refVar.current[activeIndex].className = ''
        refVar.current[activeIndex].classList.add("creatives__slideshow--InActiveNext")
        refVar.current[activeIndex].classList.add("creatives__slideshow")
        refVar.current[activeIndex].classList.add("slideshow")
        refVar.current[activeIndex - 1].classList.remove("creatives__slideshow")
        refVar.current[activeIndex - 1].classList.add("creatives__slideshow--activePrev")
        setActiveIndex(activeIndex - 1)

    }
    const nextSlide = () => {
        if (activeIndex + 1 < slideCount) {

            refVar.current[activeIndex].className = ''
            refVar.current[activeIndex].classList.add("creatives__slideshow--InActivePrev")
            refVar.current[activeIndex].classList.add("creatives__slideshow")
            refVar.current[activeIndex].classList.add("slideshow")
            refVar.current[activeIndex + 1].classList.remove("creatives__slideshow")
            refVar.current[activeIndex + 1].classList.add("creatives__slideshow--activeNext")
            setActiveIndex(activeIndex + 1)
            return
        }
        refVar.current[activeIndex].className = ''
        refVar.current[activeIndex].classList.add("creatives__slideshow--InActivePrev")
        refVar.current[activeIndex].classList.add("creatives__slideshow")
        refVar.current[activeIndex].classList.add("slideshow")
        refVar.current[0].classList.remove("creatives__slideshow")
        refVar.current[0].classList.add("creatives__slideshow--activeNext")
        setActiveIndex(0)

    }

    const setSlide = (e) => {
        refVar.current[0].classList.remove("creatives__slideshow")
        refVar.current[0].classList.add("creatives__slideshow--activeNext")
    }

    return (
        <section className='creatives'>
            <Header2 text={header} />
            <div className="creatives__slideshow-container" ref={superContainer}>
                {images?.map((item) =>
                    <div className="creatives__slideshow slideShow" >
                        <div className="creatives__gallery">
                            {item?.map((e) =>
                                <div className="creatives__img-container"><img src={e} alt="" /></div>)}
                        </div>
                    </div>
                )}

                {
                    (slideCount > 1) && <>
                        <span className="creatives__prev" onClick={prevSlide} >&#10094;</span>
                        <span className="creatives__next" onClick={nextSlide}>&#10095;</span>
                    </>}
            </div>
            {/* {
                (slideCount > 1) &&
                <div >
                    <span className={`creatives__dot ${activeIndex === 0 && 'active'}`} onClick={() => { setActiveIndex(0) }} />
                    {slideCount === 2 && <span className={`creatives__dot ${activeIndex === 1 && 'active'}`} onClick={() => { setActiveIndex(1) }} />}
                    {slideCount === 3 && <span className={`creatives__dot ${activeIndex === 2 && 'active'}`} onClick={() => { setActiveIndex(2) }} />}
                </div>
            } */}

        </section>
    )
}
