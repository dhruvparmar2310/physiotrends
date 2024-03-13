import React, { useState } from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import TextLogo from '../../../public/assets/img/header-logo.png'
import { Bebas_Neue, Teko } from 'next/font/google'
import { useRouter } from 'next/router'
import { RiMenu3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa"

function Header () {
    const router = useRouter()
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const handleClick = (e, path) => {
        e?.preventDefault()

        setIsNavExpanded(false)
        router?.push(path)
    }
    return (
        <>
            <header id='header' className={`fixed-top shadow bg-white ${styles.header}`}>
                <div className={`d-flex align-items-center ${styles.home}`}>
                    <div className={isNavExpanded ? `${styles.top_header}` : ``}>
                        <h1 className={`${styles.logo} mr-auto`} title={`PhysioTrends`}>
                            <Link href='/' style={{ fontWeight: '500' }} passHref>
                                <Image src={TextLogo} alt='' quality={100} width={250} height={100} />
                            </Link>
                        </h1>
                        <button className={`${styles.menu}`}
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }}
                        >
                            <RiMenu3Fill />
                        </button>
                    </div>
                    <nav className={isNavExpanded ? `${styles.nav_menu} ${styles.expanded} d-lg-block` : `${styles.nav_menu} d-lg-block`}
                    >
                        <ul>
                            <li className="active">
                                <Link href='/' title='Home | PhysioTrends' className={`${router?.route === '/' && styles?.active} `} onClick={(e) => handleClick(e, '/')}>Home</Link>
                            </li>
                            <li className={`${styles.drop_down}`}>
                                <Link href={`/articles`} title='Articles | PhysioTrends' className={`${router?.route?.includes('/articles') && styles?.active}`} onClick={(e) => handleClick(e, '/articles')}>Articles</Link>
                            </li>
                            <li className={`${styles.drop_down}`}>
                                <Link href='/advertise' title='Advertise | PhysioTrends' className={`${router?.route?.includes('/advertise') && styles?.active}`} onClick={(e) => handleClick(e, '/advertise')}>Advertise </Link>
                            </li>
                            <li>
                                <Link href={'/editorialMember'} title='Editorial Members | PhysioTrends' className={`${router?.route?.includes('/editorialMember') && styles?.active}`} onClick={(e) => handleClick(e, '/editorialMember')}>Editorial Members</Link>
                            </li>
                            <li className={`${styles.drop_down}`}>
                                <span className={`${styles?.dropDownButton}`} title='Policies | PhysioTrends'>Policies <FaChevronDown /></span>
                                <ul>
                                    <li>
                                        <Link href={'/terms-and-conditions'}>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href={'/policy/disclaimerPolicy'}>Disclaimer Policy</Link>
                                    </li>
                                    <li>
                                        <Link href={'/policy/privacyPolicy'}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href={'/policy/plagiarismPolicy'}>Plagiarism Policy</Link>
                                    </li>
                                    <li><Link href={'/policy/editorialPolicy'}>Editorial Policy</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/contact'} title='Contact | PhysioTrends' onClick={(e) => handleClick(e, '/contact')}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header 