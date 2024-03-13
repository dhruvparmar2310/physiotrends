import React, { useEffect, useState } from 'react'
import styles from '../../styles/Hero.module.scss'
import { Bebas_Neue, Teko } from 'next/font/google'
import Image from 'next/image'
import Character from '../../../public/assets/img/char-1.png'
import { Button, Modal } from 'react-bootstrap'
import { useRouter } from 'next/router'

// const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
// const Teko_Font = Teko({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal'] })

function Hero () {
    const router = useRouter()
    const [mobile, setMobile] = useState(null)
    const [modal, setModal] = useState(false)

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
                            <span>
                                <Button className={`${styles?.readMoreBtn}`} onClick={() => setModal(true)}>
                                    Submit Your Article Now!
                                </Button>
                            </span>
                        </div>
                    </div>

                    <div className={`${styles?.imgContent}`}>
                        <Image src={Character} quality={100} width={100} height={100} className={`${styles?.phoneMockUp}`} />
                    </div>
                </div >

            </section >

            <Modal show={modal} onHide={() => setModal(false)} id='add-article' size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='add-ticket-header'>Read the Instruction Carefully!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Here are the rules and regulations for manuscript submission to PhysioTrends:
                    </p>

                    <ol>
                        <li>Manuscripts must be original and not published elsewhere.</li>
                        <li>Authors are responsible for obtaining permissions for any copyrighted material used.</li>
                        <li>Manuscripts should be submitted in English.</li>
                        <li>Follow the APA style guide for formatting, including citations and references.</li>
                        <li>Manuscripts must be submitted electronically in Microsoft Word format.</li>
                        <li>Include a cover letter with author information, affiliations, and contact details.</li>
                        <li>Clearly state the title and main text in the manuscript.</li>
                        <li>Figures and tables should be submitted as separate files in high resolution.</li>
                        <li>Manuscripts undergo peer review; authors should be prepared to revise based on feedback.</li>
                        <li>PhysioTrends reserves the right to reject submissions that do not adhere to these guidelines or are deemed unsuitable for publication.</li>
                    </ol>

                    <p>
                        These guidelines ensure a smooth submission process and maintain the quality and integrity of PhysioTrends.
                    </p>

                    <div className={`${styles.submitBtn}`}>
                        <a href='mailto:physiothrendsmagazine@gmail.com' target='_blank'>Submit Now</a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Hero