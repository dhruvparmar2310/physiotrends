import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Contact.module.scss'
import { MdEmail } from "react-icons/md"
import { IoCall } from "react-icons/io5"

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

            <BreadCrumb title={'Contact | PhysioTrends'} link={'Home'} current={'Contact'} />
            <section className={`${styles?.contact}`}>
                <div className={`${styles?.contactContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Stay Connected With Us!</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='d-flex flex-wrap gap-3 mt-4'>
                        <div className={`${styles?.contactCard}`}>
                            <span className={`${styles?.cardIcon}`}>
                                <p className={`${styles?.cardTitle}`}>Email Address</p>
                                <MdEmail />
                            </span>
                            <p className={`${styles?.cardValue}`}>darshanparmar680@gmail.com</p>
                        </div>

                        <div className={`${styles?.contactCard}`}>
                            <span className={`${styles?.cardIcon}`}>
                                <p className={`${styles?.cardTitle}`}>Phone Number</p>
                                <IoCall />
                            </span>
                            <p className={`${styles?.cardValue}`}>7984377793</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
