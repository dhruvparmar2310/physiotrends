import { articles } from '@/data/articles';
import Image from 'next/image';
import React, { useEffect } from 'react'

const HomePageArticles = ({ allArticles }) => {
    const articles = [
        {
            _id: 'one',
            title: 'Volume - 1 | Issue - 1',
            img: '../../../public/assets/img/magazines/vol1_issue1.jpg',
        }
    ]
    console.log('articles :>> ', articles);
    return (
        <>
            {articles?.map(article => {
                <tr key={article?._id}>
                    <div>
                        <Image src={article?.img} alt={article?.title} width={100} height={100} quality={100} />
                    </div>
                </tr>
            })}
        </>
    )
}

export default HomePageArticles

// export const getServerSideProps = async () => {
//     const res = await fetch(`http://localhost:3000/api/articles`)
//     console.log('res :>> ', res);
//     const allArticles = await res.json()
//     return { props: { allArticles } }
// }
