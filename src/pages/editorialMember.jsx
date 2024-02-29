import React from 'react'
import styles from '../styles/EditorialMember.module.scss'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'

const EditorialMember = ({ data }) => {
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

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Editorial Members'} />
            <section className={`${styles?.editorialMember}`}>
                <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Editorial Members</h1>
                <div className={`${styles?.line}`}></div>

                <Row className={`${styles?.memberContent} mt-4`}>
                    {data?.members?.map((member, _) => {
                        return (
                            <>
                                <React.Fragment key={member?._id}>
                                    <Col xl={6} className={`${styles?.memberCard}`}>
                                        <div className={`${styles?.memberProfile}`}>
                                            <Image src={member?.profile} alt={member?.name + 'profile'} quality={100} width={100} height={100} className='img-fluid' />
                                        </div>
                                        <div className={`${styles?.memberCardBody}`}>
                                            <h3 className={`${styles?.doctorName}`}>{member?.name}</h3>
                                            <span className={`${styles?.occupation}`}>{member?.occupation || ''}</span>
                                            <ul>
                                                <li className={`${styles?.details}`}>{member?.education}</li>
                                                <li className={`${styles?.details}`}>{member?.designation}</li>
                                                <li className={`${styles?.details}`}>
                                                    {typeof member?.role === 'string' ? '' : member?.role?.map((item, i) => {
                                                        return (
                                                            <React.Fragment key={i}>
                                                                <p className='mb-1'>{item}</p>
                                                            </React.Fragment >
                                                        )
                                                    })}
                                                </li>
                                                <li className={`${styles?.details}`}>Email Address: {member?.emailAddress}</li>
                                                <li className={`${styles?.details}`}>Address: {member?.address}</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </React.Fragment >
                            </>
                        )
                    })}
                </Row>
            </section >
        </>
    )
}

export default EditorialMember

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.DEPLOY}/api/editorialMembers`)
    const data = await res.json()
    return { props: { data } }
}
