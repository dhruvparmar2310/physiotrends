import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Advertise.module.scss'
import { Col, Row, Table } from 'react-bootstrap'
import { MdNoiseAware } from "react-icons/md"
import { AiOutlineStock } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import Image from 'next/image'
import ThePhysioBrothers from '../../public/assets/img/Clients/physiobrothers.png'
import YogaSanskriti from '../../public/assets/img/Clients/header-logo.png'

const Advertise = () => {
    return (
        <>
            <Head>
                <title>Advertise | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Advertise'} />
            <section className={`${styles?.advertise}`}>
                <div className={`${styles?.advertiseContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Advertise With Us!</h1>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles?.advertiseDesc} mt-4`}>
                        PHYSIOTRENDS is one of the fastest growing ISSN Certified E-magazine for the Physiotherapist. Articles from the great Innovators, Thinkers, Researchers and Creators in the field of physiotherapy can be found in the PhysioTrends E-Magazine. Additionally, PhysioTrends has an advertisement section where users can promote their products or services in order to target consumers.
                    </p>

                    <div className={`${styles?.whyUs}`}>
                        <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Why Us?</h1>
                        <div className={`${styles?.line}`}></div>

                        <div className={`${styles?.detailCardContent}`}>
                            <div className={`${styles?.detailCard}`}>
                                <div className={`${styles?.detailCardIcon}`}>
                                    <MdNoiseAware />
                                </div>
                                <p className={`${styles?.detailCardBody}`}>Build Brand Awareness</p>
                            </div>
                            <div className={`${styles?.detailCard}`}>
                                <div className={`${styles?.detailCardIcon}`}>
                                    <AiOutlineStock />
                                </div>
                                <p className={`${styles?.detailCardBody}`}>Increase Reach</p>
                            </div>
                            <div className={`${styles?.detailCard}`}>
                                <div className={`${styles?.detailCardIcon}`}>
                                    <FaUsers />
                                </div>
                                <p className={`${styles?.detailCardBody}`}>Get Targeted Audience</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className={`sectionTitle ${styles?.sectionTitle} mt-5`}>Rate of Advertisement:</h1>
                        <div className={`${styles?.line}`}></div>

                        <Table responsive className={`mt-4`}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Single Issue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full Page</td>
                                    <td className={`${styles?.price}`}>2000/-</td>
                                </tr>
                                <tr>
                                    <td>Double Pages</td>
                                    <td className={`${styles?.price}`}>3000/-</td>
                                </tr>
                                <tr>
                                    <td>Half Page</td>
                                    <td className={`${styles?.price}`}>1,500/-</td>
                                </tr>
                            </tbody>
                        </Table>
                        <span className={`${styles?.notes}`}>Note: 100% payment is mandatory for the Advertisement</span>
                    </div>

                    <div className={`${styles?.clientContent} mt-5`}>
                        <h1 className={`${styles?.contentTitle}`}>A few of our many Satisfied Clients</h1>

                        <div className='d-flex flex-wrap justify-content-center gap-2 mt-4'>
                            <div className={`${styles?.clientLogo}`}>
                                <Image src={ThePhysioBrothers} className={'img-fluid'} alt='' quality={100} />
                            </div>
                            <div className={`${styles?.clientLogo}`}>
                                <Image src={YogaSanskriti} className={'img-fluid'} alt='' quality={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advertise
