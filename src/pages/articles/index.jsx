import React, { Suspense, useState } from 'react'
import styles from '../../styles/Articles.module.scss'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import { Button, OverlayTrigger, Spinner, Table, Tooltip } from 'react-bootstrap'
import { withRouter } from 'next/router'
import { articles } from '@/data/articles'
import { MdContentCopy } from "react-icons/md"
import copy from 'clipboard-copy'

function Articles ({ data, router }) {
    const [isCopied, setIsCopied] = useState(false)
    const handleCopyLink = async (link) => {
        try {
            await copy(link)
            setIsCopied(true)
            console.log('Link copied to clipboard!')
        } catch (err) {
            setIsCopied(false)
            console.error('Failed to copy link:', err)
        }
    }
    return (
        <>
            <Head>
                <title>Articles | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="PhysioTrends: Explore all the expert articles and latest research on Physiotherapy here." />
                <meta property="og:url" content="https://physiotrends.vercel.app/articles" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="article" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <Suspense fallback={<Spinner animation='border' size='md' variant='primary' />}>
                <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Articles'} />
                <section className={`${styles?.articles}`}>
                    <div className={`${styles?.articlesContent}`}>
                        <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Our Articles</h1>
                        <div className={`${styles?.line}`}></div>

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
                        <Table striped bordered responsive className={`mt-4 ${styles?.articleIndex}`}>
                            <thead>
                                <tr>
                                    <th style={{ width: '100px !important' }}>Sr. No.:</th>
                                    <th>Magazines</th>
                                    <th>Month</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles?.map(article => {
                                    return (<>
                                        <tr key={article?._id}>
                                            <td><span>{article?._id}</span></td>
                                            <td style={{ textAlign: 'left !important' }}><span>{article?.title}</span></td>
                                            <td><span>{article?.nMonth}</span></td>
                                            <td>
                                                {article?.nMonth === 'Coming Soon...' ? '---' :
                                                    <>
                                                        <Button
                                                            variant='dark'
                                                            size='sm'
                                                            onClick={() => router.push(`/articles/${article?._id}?sArticle=${article?.title}`)}
                                                            title={`${article?.title} | PhysioTrends`}
                                                        >
                                                            Read
                                                        </Button>

                                                        <OverlayTrigger
                                                            placement='top'
                                                            overlay={
                                                                <Tooltip id='copyLink'>
                                                                    {isCopied ? 'Copied to ClipBoard' : 'Copy'}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Button
                                                                variant='info'
                                                                size='sm'
                                                                title={`${article?.title} | PhysioTrends`}
                                                                style={{ marginLeft: '5px' }}
                                                                onClick={() => handleCopyLink(`${process.env.DEPLOY}/articles/${article?._id}?sArticle=${article?.title}`)}
                                                            >
                                                                <MdContentCopy />
                                                            </Button>
                                                        </OverlayTrigger>
                                                    </>
                                                }
                                            </td>
                                        </tr>
                                    </>)
                                })}
                            </tbody>
                        </Table>

                        <span className={`${styles?.notes}`}>Note: Publish your Article for Free in the upcoming Issue.</span>
                    </div>
                </section >
            </Suspense >
        </>
    )
}

export default withRouter(Articles)

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.DEPLOY}/api/articles`)
    const data = await res.json()
    return { props: { data } }
}