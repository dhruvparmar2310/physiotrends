import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Contact.module.scss'
import { MdEmail } from "react-icons/md"
import { IoCall } from "react-icons/io5"
import { Col, Form, Row } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6"
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Contact'} />
            <section className={`${styles?.contact}`}>
                <div className={`${styles?.contactContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Stay Connected With Us!</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles?.notes} mt-2`}>Note: One must read all the <Link href={'/terms-and-conditions'}>Terms & Conditions</Link> before submitting the Article.</p>
                    <div className='gap-3 mt-5'>
                        <Row>
                            <Col lg={4}>
                                <div className={`${styles?.cardDetails}`}>
                                    <div className={`${styles?.cardIcon}`}>
                                        <FaLocationDot className={`${styles?.location}`} />
                                    </div>
                                    <p>Kuldevi Krupa, Sahkar Society,</p>
                                    <p>Street No.3, Sahkar Main Road,</p>
                                    <p>Bhaktinagar, Rajkot - 360002</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={`${styles?.cardDetails}`}>
                                    <div className={`${styles?.cardIcon}`}>
                                        <IoCall className={`${styles?.phoneNo}`} />
                                    </div>
                                    <p>+91 7984-377-793</p>
                                    <p>+91 9820-553-515</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={`${styles?.cardDetails}`}>
                                    <div className={`${styles?.cardIcon}`}>
                                        <MdEmail className={`${styles?.email}`} />
                                    </div>
                                    <p>physiothrendsmagazine@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
