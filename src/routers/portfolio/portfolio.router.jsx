import React from 'react'
import { CreativeDisplay, CreativeVideoDisplay, HomeHero1 } from '../../components'
import './portfolio.styles.scss'
import smc1 from '../../asset/image/socialMediaCreatives/1.jpg';
import smc2 from '../../asset/image/socialMediaCreatives/2.jpg';
import smc3 from '../../asset/image/socialMediaCreatives/3.jpg';
import smc4 from '../../asset/image/socialMediaCreatives/4.jpg';
import smc5 from '../../asset/image/socialMediaCreatives/5.jpg';
import smc6 from '../../asset/image/socialMediaCreatives/6.jpg';
import smc7 from '../../asset/image/socialMediaCreatives/7.jpg';
import smc8 from '../../asset/image/socialMediaCreatives/8.jpg';
import smc9 from '../../asset/image/socialMediaCreatives/9.jpg';
import smc10 from '../../asset/image/socialMediaCreatives/10.jpg';
import smc11 from '../../asset/image/socialMediaCreatives/11.jpg';
import smc12 from '../../asset/image/socialMediaCreatives/12.jpg';
import smc13 from '../../asset/image/socialMediaCreatives/13.jpeg';
import smc14 from '../../asset/image/socialMediaCreatives/14.jpg';
import smc15 from '../../asset/image/socialMediaCreatives/15.jpg';
import smc16 from '../../asset/image/socialMediaCreatives/16.jpg';
import Logo1 from '../../asset/image/logos/1.jpg'
import Logo2 from '../../asset/image/logos/2.jpg'
import Logo3 from '../../asset/image/logos/3.jpg'
import Logo4 from '../../asset/image/logos/4.jpg'
import Logo5 from '../../asset/image/logos/5.png'
import Logo6 from '../../asset/image/logos/6.jpg'
import Logo7 from '../../asset/image/logos/7.jpg'
import Logo8 from '../../asset/image/logos/8.jpg'
import Motion1 from '../../asset/image/motionGraphics/m1.mp4'
import Motion2 from '../../asset/image/motionGraphics/m2.mp4'
import Motion3 from '../../asset/image/motionGraphics/m3.mp4'
import Motion4 from '../../asset/image/motionGraphics/m4.mp4'
import thumb1 from '../../asset/image/motionGraphics/thumb1.png'
import thumb2 from '../../asset/image/motionGraphics/thumb2.png'
import thumb3 from '../../asset/image/motionGraphics/thumb3.png'
import thumb4 from '../../asset/image/motionGraphics/thumb4.png'
import print1 from '../../asset/image/printAds/print1.jpg';
import print2 from '../../asset/image/printAds/print2.jpg';
import print3 from '../../asset/image/printAds/print3.jpg';
import print4 from '../../asset/image/printAds/print4.jpg';
import print5 from '../../asset/image/printAds/print5.jpg';
import print6 from '../../asset/image/printAds/print6.jpg';
import print7 from '../../asset/image/printAds/print7.jpg';
import print8 from '../../asset/image/printAds/print8.jpg';

export default function PortFolio() {

    return (
        <>
            <HomeHero1 />
            <div className='portfolio'>

                <CreativeDisplay header="Social Media Creative" images={[[smc1, smc2, smc3, smc4, smc5, smc6, smc7, smc8], [smc9, smc10, smc11, smc12, smc13, smc14, smc15, smc16]]} arrow={true} />
                <CreativeDisplay header="Logo Design" images={[[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8],]} />
                <CreativeVideoDisplay header="Motion Graphics" images={[[{ video: Motion1, img: thumb1 }, { video: Motion2, img: thumb2 }], [{ video: Motion3, img: thumb3 }, { video: Motion4, img: thumb4 }]]} />
                <CreativeDisplay header="Print Ads" images={[[print1, print2, print3, print4, print5, print6, print7, print8]]} />
            </div>
        </>
    )
}
