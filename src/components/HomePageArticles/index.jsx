import React, { useEffect } from 'react'
import { articles } from '@/data/articles';
import Image from 'next/image';
import styles from '../../styles/HomePageArticles.module.scss'
import { saveAs } from 'file-saver'
import pdfFile from '../../../public/assets/pdfs/vol-1-issue-1/Physiotrends Vol 1, Issue 1.pdf'
import { GrNext, GrPrevious } from 'react-icons/gr';

const HomePageArticles = () => {
    return (
        <>
            <div className={`${styles?.magazine}`}>
                <div id="carouselExampleControls" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        {articles.map((article, index) => (
                            <div div key={article._id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className={`${styles.magazineCard}`} onClick={() => saveAs(`${article?.eBook}`, `PhysioTrends_${article?.title}`)}>
                                    <div className={`${styles.magazineImg}`}>
                                        <Image src={article.img} alt={article.title} width={100} height={100} />
                                    </div>
                                    <p className={`${styles.cardTitle}`}>{article.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={`carousel-control-prev ${styles?.prevBtn}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <GrPrevious />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className={`carousel-control-next ${styles?.nextBtn}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <GrNext />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div >
        </>
    )
}

export default HomePageArticles
