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
import PricePlan from '../../public/assets/PricePlan'

const Advertise = () => {
    return (
        <>
            <Head>
                <title>Advertise | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="Promote your brand to targeted physio audiences - Advertise with Physiotrends." />
                <meta property="og:url" content="https://physiotrends.vercel.app/advertise" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
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
                            <Row>
                                <Col lg={4} md={6}>
                                    <div className={`${styles?.detailCard}`}>
                                        <div className={`${styles?.detailCardIcon}`}>
                                            <MdNoiseAware />
                                        </div>
                                        <p className={`${styles?.detailCardBody}`}>Build Brand Awareness</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} className='mt-md-0 mt-3'>
                                    <div className={`${styles?.detailCard}`}>
                                        <div className={`${styles?.detailCardIcon}`}>
                                            <AiOutlineStock />
                                        </div>
                                        <p className={`${styles?.detailCardBody}`}>Increase Reach</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} className='mt-lg-0 mt-md-3 mt-3'>
                                    <div className={`${styles?.detailCard}`}>
                                        <div className={`${styles?.detailCardIcon}`}>
                                            <FaUsers />
                                        </div>
                                        <p className={`${styles?.detailCardBody}`}>Get Targeted Audience</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div>
                        <h1 className={`sectionTitle ${styles?.sectionTitle} mt-4`} title='Rate of Advertisement | PhysioTrends'>Rate of Advertisement:</h1>
                        <div className={`${styles?.line}`}></div>

                        <Row className={`${styles?.priceSection}`}>
                            <Col lg={6} md={12}>
                                <div className={`${styles?.adsImg}`}>
                                    <PricePlan />
                                </div>
                            </Col>
                            <Col lg={6} md={12} className={`${styles?.tableContent}`}>
                                <Table responsive>
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
                            </Col>
                        </Row>
                    </div>

                    <div className={`${styles?.clientContent} mt-4`}>
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
