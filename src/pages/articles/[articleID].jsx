import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import { useRouter, withRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Articles.module.scss'
import { Button, Table } from 'react-bootstrap'

function ArticleID ({ data }) {
    const router = useRouter()
    const { articleID, sArticle } = router.query
    const [currentPage, setCurrentPage] = useState(1)
    const [currentArticle, setCurrentArticle] = useState('100')
    const pageSize = 10

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize
        return items?.content?.slice(startIndex, startIndex + pageSize);
    }

    const paginatedArticle = paginate(data, currentPage, pageSize)

    const onPageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <>
            <Head>
                <title>Articles - {sArticle} | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content={`PhysioTrends, Physiotrends, Physio trends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, ${sArticle} of PhysioTrends`} />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="PhysioTrends: Explore all the expert articles and latest research on Physiotherapy here." />
                <meta property="og:url" content="https://physiotrends.vercel.app/articles" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="article" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Articles | PhysioTrends'} link={'Home'} current={`Articles - ${sArticle}`} />
            <section className={`${styles?.articles}`}>
                <div className={`${styles?.articlesContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Table of Contents:</h1>
                    <div className={`${styles?.line}`}></div>

                    <Table striped bordered responsive className={`mt-4`}>
                        <thead>
                            <tr>
                                <td>Sr.</td>
                                <td>Name</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.aMagazines?.map((magazine, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td title={`${magazine?.name} | PhysioTrends`}>{magazine?.name}</td>
                                            <td>
                                                <Button variant='dark' size='sm' onClick={() => setCurrentArticle(magazine?._id)}>Read</Button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </Table>

                    <div className='mt-3'>
                        <>
                            <div>
                                <h1 className={`${styles?.magazineName}`} title={`${data?.aMagazines?.find(magazine => (magazine?._id === currentArticle))?.name} | Article by ${data?.aMagazines?.find(magazine => (magazine?._id === currentArticle))?.author} | PhysioTrends`}>{data?.aMagazines?.find(magazine => (magazine?._id === currentArticle))?.name}</h1>
                                <div className={`${styles?.line}`}></div>
                                <p className={`${styles?.authorName}`}>{data?.aMagazines?.find(magazine => (magazine?._id === currentArticle))?.author}</p>
                                <div dangerouslySetInnerHTML={{ __html: data?.aMagazines?.find(magazine => (magazine?._id === currentArticle))?.magazine }} className={`mt-3 ${styles?.magazineContent}`}></div>
                            </div>
                        </>
                    </div>
                </div>
            </section >
        </>
    )
}

export default withRouter(ArticleID)

// export const getStaticPaths = async () => {
//     const paths = []

//     for (let i = 1; i <= 4; i++) {
//         paths.push({
//             params: {
//                 // adhyay: 'adhyay',
//                 articleID: i.toString(),
//             },
//         })
//     }
//     return {
//         // paths: [
//         //   {
//         //     params: {
//         //       adhyay: 'some-value',
//         //       adhyayID: '1',
//         //     },
//         //   }, // See the "paths" section below
//         // ],
//         paths: paths,
//         fallback: true, // false or "blocking"
//     }
// }

// export const getStaticProps = async ({ params }) => {
//     const articleID = parseInt(params.articleID)
//     if (articleID >= 1 && articleID <= 4) {
//         const res = await fetch(`${process.env.LOCALHOST}/api/articles/${articleID}`)
//         const data = await res.json()
//         console.log(data, 'data')
//         return { props: { data } || {} }
//     } else {
//         return { notFound: true }
//     }
// }

export const getServerSideProps = async ({ params }) => {
    const articleID = parseInt(params.articleID)
    const res = await fetch(`${process.env.DEPLOY}/api/articles/${articleID}`)
    const data = await res.json()
    return { props: { data } }
}
