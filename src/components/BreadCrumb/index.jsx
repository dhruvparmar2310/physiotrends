import React from 'react'
import styles from '../../styles/BreadCrumb.module.scss'
import Link from 'next/link'

const BreadCrumb = ({ title, link, current }) => {
    return (
        <>
            <div className={`${styles?.breadcrumbContent} mt-5`}>
                <div className={`${styles?.breadcrumb}`}>
                    <span className={`${styles?.breadcrumbItem}`}>
                        <Link href={'/'} title={title}>{link}</Link>
                    </span>
                    <span className={`${styles?.currentPage}`}>{current}</span>
                </div>
            </div>
        </>
    )
}

export default BreadCrumb
