import { articles } from '@/data/articles';
import Image from 'next/image';
import React, { useEffect } from 'react'
import articleImg from '../../../public/assets/img/magazines/Vol-1-Issue-1.jpeg'
import styles from '../../styles/HomePageArticles.module.scss'
import { saveAs } from 'file-saver'
import pdfFile from '../../../public/assets/pdfs/vol-1-issue-1/Physiotrends Vol 1, Issue 1.pdf'

const HomePageArticles = ({ allArticles }) => {
    const singleArticle = articles[0]
    return (
        <>
            <div className={`${styles?.magazine}`}>
                {/* {articles?.map(article => {
                    return (<>
                        <React.Fragment key={article?._id}> */}
                <div className={`${styles?.magazineCard}`} onClick={() => saveAs(`${pdfFile}`, `PhysioTrends_Vol-1_Issue-1`)}>
                    <div className={`${styles?.magazineImg}`}>
                        <Image src={articleImg?.src} alt={singleArticle?.title} width={100} height={100} />
                    </div>
                    <p className={`${styles?.cardTitle}`}>{singleArticle?.title}</p>
                </div>
                {/* </React.Fragment>
                    </>)
                })} */}
            </div>
        </>
    )
}

export default HomePageArticles

export const getServerSideProps = async () => {
    const res = await fetch(`https://physiotrends.vercel.app/api/articles`)
    const allArticles = await res.json()
    return { props: { allArticles } }
}
