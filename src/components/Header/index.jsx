import React, { useState } from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import TextLogo from '../../../public/assets/img/main-logo.png'
import { Bebas_Neue, Teko } from 'next/font/google'
import { useRouter } from 'next/router'
import { RiMenu3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa"

function Header () {
    const router = useRouter()
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [dropdownOpen, setDropDownOpen] = useState(false)

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
                            <li>
                                <Link href={`/articles`} title='Archives | PhysioTrends' className={`${router?.route?.includes('/articles') && styles?.active}`} onClick={(e) => handleClick(e, '/articles')}>Archives</Link>
                            </li>
                            <li>
                                <Link href='/advertise' title='Advertise | PhysioTrends' className={`${router?.route?.includes('/advertise') && styles?.active}`} onClick={(e) => handleClick(e, '/advertise')}>Advertise </Link>
                            </li>
                            <li>
                                <Link href={'/editorialMember'} title='Editorial Members | PhysioTrends' className={`${router?.route?.includes('/editorialMember') && styles?.active}`} onClick={(e) => handleClick(e, '/editorialMember')}>Editorial Members</Link>
                            </li>
                            <li className={`${styles.drop_down}`}>
                                <span className={`${styles?.dropDownButton}`} title='Policies | PhysioTrends' onClick={() => setDropDownOpen(!dropdownOpen)}>Policies <FaChevronDown /></span>
                                <ul style={dropdownOpen ? { display: 'block' } : { display: 'none' }}>
                                    <li>
                                        <Link href={'/terms-and-conditions'} title='Terms & Conditions | PhysioTrends' className={`${router?.route?.includes('/terms-and-conditions') && styles?.active}`} onClick={(e) => handleClick(e, '/terms-and-conditions')}>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href={'/policy/disclaimerPolicy'} title='Disclaimer Policy | PhysioTrends' className={`${router?.route?.includes('/policy/disclaimerPolicy') && styles?.active}`} onClick={(e) => handleClick(e, '/policy/disclaimerPolicy')}>Disclaimer Policy</Link>
                                    </li>
                                    <li>
                                        <Link href={'/policy/privacyPolicy'} title='Privacy Policy | PhysioTrends' className={`${router?.route?.includes('/policy/privacyPolicy') && styles?.active}`} onClick={(e) => handleClick(e, '/policy/privacyPolicy')}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href={'/policy/plagiarismPolicy'} title='Plagiarism Policy | PhysioTrends' className={`${router?.route?.includes('/policy/plagiarismPolicy') && styles?.active}`} onClick={(e) => handleClick(e, '/policy/plagiarismPolicy')}>Plagiarism Policy</Link>
                                    </li>
                                    <li><Link href={'/policy/editorialPolicy'} title='Editorial Policy | PhysioTrends' className={`${router?.route?.includes('/policy/editorialPolicy') && styles?.active}`} onClick={(e) => handleClick(e, '/policy/editorialPolicy')}>Editorial Policy</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/supportUs'} title='Support Us | PhysioTrends' className={`${router?.route?.includes('/supportUs') && styles?.active}`} onClick={(e) => handleClick(e, '/supportUs')}>Support Us</Link>
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