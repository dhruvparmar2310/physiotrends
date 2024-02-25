import React, { useState } from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import TextLogo from '../../../public/assets/img/header-logo.png'
import { Bebas_Neue, Teko } from 'next/font/google'

// const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
// const Teko_Font = Teko({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal'] })

function Header () {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <>
            <header id={styles.header} className={`fixed-top shadow bg-white ${styles.header}`}>
                <div className={`container d-flex align-items-center ${styles.home}`}>
                    <div className={
                        isNavExpanded ? `${styles.top_header}` : ``}>
                        <h1 className={`${styles.logo} mr-auto`} title={`PhysioTrends`}>
                            <Link href='/' style={{ fontWeight: '500' }}>
                                <Image src={TextLogo} alt='' quality={100} width={250} height={100} />
                            </Link>
                        </h1>
                        <button className={styles.menu}
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }}
                        >
                            <i className={`ri-menu-line`}></i>
                        </button>
                    </div>
                    <nav className={
                        isNavExpanded ? `${styles.nav_menu} ${styles.expanded} d-lg-block` : `${styles.nav_menu} d-lg-block`}
                    >
                        <ul>
                            <li className="active">
                                <Link href='/' title='Home | PhysioTrends'>Home</Link>
                            </li>
                            <li className={`${styles.drop_down}`}>
                                <Link href={`#articles`} title='Advertize | PhysioTrends'>Articles</Link>
                            </li>
                            <li className={`${styles.drop_down}`}>
                                <Link href={`#about-us`} title='Advertize | PhysioTrends'>Advertize </Link>
                            </li>
                            <li><Link href={'/about/adhyay'} title='Editorial Members | PhysioTrends'>Editorial Members</Link></li>
                            <li><Link href={'/contact'} title='Contact | PhysioTrends'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header 