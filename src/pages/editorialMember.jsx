import React from 'react'
import styles from '../styles/EditorialMember.module.scss'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import Image from 'next/image'
import Owner from '../../public/assets/img/Members/Dr.DarshanParmar.JPG'
import DrChiragSolanki from '../../public/assets/img/Members/Dr.ChiragSolanki.jpg'
import DrPoorvinShah from '../../public/assets/img/Members/DrPoorvinShah.jpg'
import { Col, Row } from 'react-bootstrap'

const EditorialMember = () => {
    return (
        <>
            <Head>
                <title>Editorial Members | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Editorial Members | PhysioTrends'} link={'Home'} current={'Editorial Members'} />
            <section className={`${styles?.editorialMember}`}>
                <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Editorial Members</h1>
                <div className={`${styles?.line}`}></div>

                <Row className={`${styles?.memberContent} mt-4`}>
                    <Col xl={6} className={`${styles?.memberCard}`}>
                        <div className={`${styles?.memberProfile}`}>
                            <Image src={Owner} alt='' quality={100} width={100} height={100} className='img-fluid' />
                        </div>
                        <div className={`${styles?.memberCardBody}`}>
                            <h3 className={`${styles?.doctorName}`}>Dr. Darshan Parmar</h3>
                            <ul>
                                <li className={`${styles?.details}`}>MPT in Neurological Conditions</li>
                                <li className={`${styles?.details}`}>Assistant Professor at K.D.Institute of Physiotherapy</li>
                                <li className={`${styles?.details}`}>Founder of PhysioTrends, ThePhysioBrothers, YogaSanskriti</li>
                            </ul>
                        </div>
                    </Col>

                    <Col xl={6} className={`${styles?.memberCard}`}>
                        <div className={`${styles?.memberProfile}`}>
                            <Image src={Owner} alt='' quality={100} width={100} height={100} className='img-fluid' />
                        </div>
                        <div className={`${styles?.memberCardBody}`}>
                            <h3 className={`${styles?.doctorName}`}>Dr. Sujay Makwana</h3>
                            <ul>
                                <li className={`${styles?.details}`}>MPT in Neurological Conditions</li>
                                <li className={`${styles?.details}`}>Co-Founder of PhysioTrends, ThePhysioBrothers</li>
                            </ul>
                        </div>
                    </Col>

                    <Col xl={6} className={`${styles?.memberCard}`}>
                        <div className={`${styles?.memberProfile}`}>
                            <Image src={DrChiragSolanki} alt='' quality={100} width={100} height={100} className='img-fluid' />
                        </div>
                        <div className={`${styles?.memberCardBody}`}>
                            <h3 className={`${styles?.doctorName}`}>Dr. Chirag Solanki</h3>
                            <ul>
                                <li className={`${styles?.details}`}>MPT in Neurological Conditions</li>
                                <li className={`${styles?.details}`}>Assistant Professor at School of Physiotherapy, R.K.University</li>
                                <li className={`${styles?.details}`}>Owner and Director of Maruti Physiotherapy Center, Samarpan Physiotherapy Center</li>
                                <li className={`${styles?.details}`}>Consultant Chief Physiotherapist at Pulse + Multi Specialty Hospital</li>
                            </ul>
                        </div>
                    </Col>

                    <Col xl={6} className={`${styles?.memberCard}`}>
                        <div className={`${styles?.memberProfile}`}>
                            <Image src={DrPoorvinShah} alt='' quality={100} width={100} height={100} className='img-fluid' />
                        </div>
                        <div className={`${styles?.memberCardBody}`}>
                            <h3 className={`${styles?.doctorName}`}>Dr. Poorvin Shah</h3>
                            <ul>
                                <li className={`${styles?.details}`}>MPT in Orthopedics</li>
                                <li className={`${styles?.details}`}>Assistant Professor at K.D.Institute of Physiotherapy</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default EditorialMember
