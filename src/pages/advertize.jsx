import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Advertize.module.scss'
import { Table } from 'react-bootstrap'

const Advertize = () => {
    return (
        <>
            <Head>
                <title>Advertize | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Advertize | PhysioTrends'} link={'Home'} current={'Advertize'} />
            <section className={`${styles?.advertize}`}>
                <div className={`${styles?.advertizeContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Advertize With Us!</h1>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles?.advertizeDesc} mt-4`}>
                        PHYSIOTRENDS is one of the fastest growing E-magazine for the Physiotherapist. Articles from the great Innovators, Thinkers, Researchers and Creators in the field of physiotherapy can be found in the PhysioTrends E-Magazine. Additionally, PhysioTrends has an advertisement section where users can promote their products or services in order to target consumers.
                    </p>

                    <h1 className={`sectionTitle ${styles?.sectionTitle} mt-5`}>Who can give their Advertisement:</h1>
                    <div className={`${styles?.line}`}></div>
                    <ul className='mt-3'>
                        <li className={`${styles?.advertizePoints}`}>Physiotherapy Modalities Company/Distributor/Seller.</li>
                        <li className={`${styles?.advertizePoints}`}>Any Product which belongs to the field of Physiotherapy.</li>
                        <li className={`${styles?.advertizePoints}`}>Physiotherapy Innovations</li>
                        <li className={`${styles?.advertizePoints}`}>Physiotherapy Equipments Manufacturer/ Distributor/Seller.</li>
                        <li className={`${styles?.advertizePoints}`}>Beauty products</li>
                        <li className={`${styles?.advertizePoints}`}>Physiotherapy Book’s Distributor/Seller</li>
                        <li className={`${styles?.advertizePoints}`}>Events/Workshops/Webinars/Conferences of Physiotherapy.</li>
                        <li className={`${styles?.advertizePoints}`}>Business ideas for the field of Physiotherapy</li>
                        <li className={`${styles?.advertizePoints}`}>Banks that can give Financial support for students  </li>
                    </ul>

                    <div>
                        <h1 className={`sectionTitle ${styles?.sectionTitle} mt-5`}>Rate of Advertisement:</h1>
                        <div className={`${styles?.line}`}></div>
                        <Table striped bordered responsive className={`mt-4`}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Single Issue</th>
                                    <th>Advertizement for 3 Months</th>
                                    <th>Advertizement for 6 Months</th>
                                    <th>Advertizement for 12 Months</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full Page</td>
                                    <td className={`${styles?.price}`}>2000/-</td>
                                    <td className={`${styles?.price}`}>5,800/-</td>
                                    <td className={`${styles?.price}`}>11,000/-</td>
                                    <td className={`${styles?.price}`}>20,000/-</td>
                                </tr>
                                <tr>
                                    <td>Double Pages</td>
                                    <td className={`${styles?.price}`}>3000/-</td>
                                    <td className={`${styles?.price}`}>8,500/-</td>
                                    <td className={`${styles?.price}`}>16,000/-</td>
                                    <td className={`${styles?.price}`}>30,000/-</td>
                                </tr>
                                <tr>
                                    <td>Half Page</td>
                                    <td className={`${styles?.price}`}>1,500/-</td>
                                    <td className={`${styles?.price}`}>4,300/-</td>
                                    <td className={`${styles?.price}`}>8,000/-</td>
                                    <td className={`${styles?.price}`}>15,000/-</td>
                                </tr>
                            </tbody>
                        </Table>
                        <span className={`${styles?.notes}`}>Note: 100% payment is mandatory for the Advertisement</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advertize
