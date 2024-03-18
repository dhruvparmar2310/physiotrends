import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import { useRouter, withRouter } from 'next/router'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import styles from '../../styles/Articles.module.scss'
import { Button, Table } from 'react-bootstrap'
import { saveAs } from 'file-saver'
import { FaUserCircle, FaEye } from "react-icons/fa"
import { FaDownload } from "react-icons/fa6"
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ArticleID ({ data }) {
    const router = useRouter()
    const pdfViewRef = useRef(null)
    const { articleID, sArticle } = router.query
    const [currentPage, setCurrentPage] = useState(1)
    const [currentArticle, setCurrentArticle] = useState('100')
    const pageSize = 10

    const [pdfFile, setPdfFile] = useState(null)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize
        return items?.content?.slice(startIndex, startIndex + pageSize);
    }

    const paginatedArticle = paginate(data, currentPage, pageSize)

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fetchPdf = async () => {
            const pdf = await data?.aMagazines?.map(item => item?.sDownLoadUrl);
            console.log('pdf :>> ', pdf?.[0]);
            setCurrentArticle(pdf?.[0]);
        };
        fetchPdf();
    }, [data]);

    function onDocumentLoadSuccess ({ numPages }) {
        setNumPages(numPages);
    }

    const handleView = (e, url) => {
        e.preventDefault();

        setCurrentArticle(url)
        pdfViewRef.current.scrollIntoView({ behavior: 'smooth' })
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
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>{sArticle}:</h1>
                    <div className={`${styles?.line} mb-3`}></div>

                    {data?.aMagazines?.map((magazine, index) => {
                        return (
                            <>
                                <Fragment key={index}>
                                    <div className={`${styles?.magazineCard}`}>
                                        <div className={`${styles?.magazineCardHeader}`}>
                                            <span title={`${magazine?.sName} | PhysioTrends`} className={`${styles?.magazineCardTitle}`}>{magazine?.sName}</span>
                                        </div>
                                        <div className={`${styles?.authorContent}`}>
                                            <span className={`${styles?.author}`} title={`${magazine?.sAuthor} | PhysioTrends`}><FaUserCircle /> {magazine?.sAuthor}</span>
                                            <span className={`${styles?.pageNumber}`}>Page No.: {magazine?.sPageNo}</span>
                                        </div>
                                        <p className={`${styles?.number}`}>DOI: {magazine?.sDOINo}</p>
                                        <div className={`${styles?.functionality}`}>
                                            <Button variant='warning' size='sm' className='me-2' onClick={(e) => handleView(e, magazine?.sDownLoadUrl)}><FaEye /> View</Button>
                                            <Button variant='dark' size='sm' onClick={() => saveAs(`${magazine?.sDownLoadUrl}`, `${magazine?.sName}`)}><FaDownload /> Download</Button>
                                        </div>
                                    </div>
                                </Fragment>
                            </>
                        )
                    })}
                </div>

                <div className={`${styles?.pdfView} mt-5`} ref={pdfViewRef}>
                    {/* <p>Page {pageNumber} of {numPages}</p> */}
                    <Document
                        file={currentArticle}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {/* {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map(page => {
                            return (
                                <Page
                                    key={page}
                                    pageNumber={page}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            )
                        })} */}
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        ))}
                    </Document>
                    {/* <div className={`${styles?.buttons}`}>
                        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>
                            Previous
                        </button>
                        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === numPages}>
                            Next
                        </button>
                    </div> */}
                </div>
            </section >
        </>
    )
}

export default withRouter(ArticleID)

export const getServerSideProps = async ({ params }) => {
    const articleID = parseInt(params.articleID)
    const res = await fetch(`${process.env.DEPLOY}/api/articles/${articleID}`)
    const data = await res.json()
    return { props: { data } }
}
