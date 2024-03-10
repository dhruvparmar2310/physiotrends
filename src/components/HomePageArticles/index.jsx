import { articles } from '@/data/articles';
import Image from 'next/image';
import React, { useEffect } from 'react'
import articleImg from '../../../public/assets/img/magazines/vol1_issue1.jpg'
import styles from '../../styles/HomePageArticles.module.scss'

const HomePageArticles = ({ allArticles }) => {
    const singleArticle = articles[0]
    return (
        <>
            <div className={`${styles?.magazine}`}>
                {/* {articles?.map(article => {
                    return (<>
                        <React.Fragment key={article?._id}> */}
                <div className={`${styles?.magazineCard}`}>
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
