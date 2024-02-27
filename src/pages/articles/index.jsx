import React from 'react'
import styles from '../../styles/Articles.module.scss'
import { Ysabeau } from 'next/font/google'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import { withRouter } from 'next/router'
import { articles } from '@/data/articles'
import articleImg from '../../../public/assets/img/magazines/vol1_issue1.jpg'

function Articles ({ data, router }) {
    return (
        <>
            <Head>
                <title>Articles | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Articles | PhysioTrends'} link={'Home'} current={'Articles'} />
            <section className={`${styles?.articles}`}>
                <div className={`${styles?.articlesContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Our Articles</h1>
                    <div className={`${styles?.line}`}></div>

                    <Row>
                        <Col>
                            <div className={`${styles?.magazine}`}>
                                {/* {data?.articles?.map(article => {
                                    return (<>
                                        <React.Fragment key={article?._id}>
                                            <div className={`${styles?.magazineCard}`} onClick={() => router.push(`/articles/${article?._id}`)}>
                                                <div className={`${styles?.magazineImg}`}>
                                                    <Image src={article?.img} alt={article?.title} width={100} height={100} />
                                                </div>
                                                <p className={`${styles?.cardTitle}`}>{article?.title}</p>
                                            </div >
                                        </React.Fragment>
                                    </>)
                                })} */}
                                {articles?.map(article => {
                                    return (<>
                                        <React.Fragment key={article?._id}>
                                            <div className={`${styles?.magazineCard}`}>
                                                <div className={`${styles?.magazineImg}`}>
                                                    <Image src={articleImg?.src} alt={article?.title} width={100} height={100} />
                                                </div>
                                                <p className={`${styles?.cardTitle}`}>{article?.title}</p>
                                            </div>
                                        </React.Fragment>
                                    </>)
                                })}
                            </div>
                        </Col>
                    </Row >
                </div >
            </section >
        </>
    )
}

export default withRouter(Articles)

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.DEPLOY}/api/articles`)
    const data = await res.json()
    return { props: { data } }
}