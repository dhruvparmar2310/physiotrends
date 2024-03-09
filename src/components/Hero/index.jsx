import React, { useEffect, useState } from 'react'
import styles from '../../styles/Hero.module.scss'
import { Bebas_Neue, Teko } from 'next/font/google'
import Image from 'next/image'
import Character from '../../../public/assets/img/char-1.png'
import { Button } from 'react-bootstrap'

// const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
// const Teko_Font = Teko({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal'] })

function Hero () {
    const [mobile, setMobile] = useState(null)

    useEffect(() => {
        if (window?.innerWidth < 576) {
            setMobile(true)
        }
    }, [mobile])

    return (
        <>
            <section className={`${styles?.hero}`} id='hero'>
                <div className={`${styles?.heroContent}`}>
                    <div className={`${styles?.adsContent}`}>
                        <h1 data-heading='ISSN Number'>PhysioTrends</h1>

                        <p className={`${styles?.desc} mt-lg-5 mt-3`}>
                            Empowering Physiotherapists
                        </p>
                        <p className={`${styles?.desc} mt-3`}>
                            Read the latest research and empower your physiotherapy journey.
                        </p>

                        <div className={`${styles?.btnContent} mt-3`}>
                            <a href="#magazines">
                                <Button className={`${styles?.readMoreBtn}`}>
                                    Read More
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className={`${styles?.imgContent}`}>
                        <Image src={Character} quality={100} width={100} height={100} className={`${styles?.phoneMockUp}`} />
                    </div>
                </div >

            </section >
        </>
    )
}

export default Hero