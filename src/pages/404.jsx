import React from 'react'
import styles from '../styles/PageNotFound.module.scss'
import Link from 'next/link'

const PageNotFound = () => {
    return (
        <>
            <section className={`${styles?.notFound}`}>
                <h1>404</h1>
                <p className={`${styles?.sorryText}`}>Sorry!</p>
                <p className={`${styles?.details}`}>The page you're Looking for</p>
                <p className={`${styles?.details}`}>was not Found</p>

                <Link href='/'>Go Back</Link>
            </section>
        </>
    )
}

export default PageNotFound
