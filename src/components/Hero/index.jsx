import React from 'react'
import styles from '../../styles/Hero.module.scss'
import { Bebas_Neue, Teko } from 'next/font/google'
import Image from 'next/image'
import PhoneMockUp from '../../../public/assets/img/phone-mockUp-2.png'
import { Button } from 'react-bootstrap'

// const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
// const Teko_Font = Teko({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal'] })

function Hero () {
    return (
        <>
            <section className={`${styles?.hero}`} id='hero'>
                <div className={`${styles?.heroContent}`}>
                    <div className={`${styles?.adsContent}`}>
                        <h1 data-heading='ISSN Number'>PhysioTrends</h1>

                        <p className={`${styles?.desc} mt-5`}>
                            PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist
                        </p>
                        <p className={`${styles?.desc} mt-3`}>
                            Join our family now by Publishing an article for <span className={`${styles?.freeTag}`}>Free</span>.
                        </p>

                        <div className={`${styles?.btnContent} mt-3`}>
                            <Button className={`${styles?.readMoreBtn}`}>Read More</Button>
                        </div>
                    </div>

                    <div className={`${styles?.imgContent}`}>
                        <Image src={PhoneMockUp} quality={100} width={100} height={100} className={`${styles?.phoneMockUp}`} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero