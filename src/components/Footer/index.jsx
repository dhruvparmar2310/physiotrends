import React from 'react'
import styles from '../../styles/Footer.module.scss'
import Link from 'next/link'
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <footer id="footer" className={`${styles.footer}`}>

                <div className={`${styles.footer_top}`}>
                    <div className={`${styles?.footerContent}`}>
                        <div className={`${styles.footer_contact}`} style={{ width: '20rem' }}>
                            <h3 title='PhysioTrends'>
                                <Link href="/">PHYSIO<span>TRENDS</span></Link>
                            </h3>
                            <h4 style={{ padding: '0', margin: '0' }}>Get in touch :</h4>
                            <p style={{ fontSize: '16px' }} className='mt-2'>
                                <span className=''>Phone:<Link href="tel:7984377793"> +91 7984-377-793</Link></span><br />
                                <span>Email:<Link href="mailto:physiothrendsmagazine@gmail.com" title='physiothrendsmagazine@gmail.com'> physiothrendsmagazine@gmail.com</Link></span><br />
                            </p>
                        </div>

                        <div className={`${styles?.footerLinksContent}`}>
                            <div className={`${styles.footer_links}`}>
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/" title='Home | PhysioTrends'>Home</Link></li>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/#about" title='About Us | PhysioTrends'>About us</Link></li>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/articles" title='Our Latest Articles | PhysioTrends'>Latest Magazine</Link></li>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/contact" title='Contact Us | PhysioTrends'>Contact</Link></li>
                                </ul>
                            </div>

                            <div className={`${styles.footer_links}`}>
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/articles" title='All Articles | PhysioTrends'>All Articles</Link></li>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/advertise" title='Advertise with Us | PhysioTrends'>Advertisement</Link></li>
                                </ul>
                            </div>

                            <div className={`${styles.footer_links}`}>
                                <h4>Additional Links</h4>
                                <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/terms-and-conditions" title='Our Terms & Conditions | PhysioTrends'>Terms & Conditions</Link></li>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/policy/privacyPolicy" title='Privacy Policy | PhysioTrends'>Privacy Policy</Link></li>
                                    <li><i className="ri-arrow-right-s-line"></i> <Link href="/policy/editorialPolicy" title='Editorial Policy | PhysioTrends'>Editorial Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`row ${styles?.footerCopyRight}`} style={{ display: 'flex !important', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: '20px', margin: '0 auto' }}>

                    <div className="col-lg-6 p-0">
                        <div className={`${styles.copyright}`}>
                            Copyright &copy; <span style={{ fontSize: '18px' }}>2024</span>, <strong style={{ color: 'var(--primary-color)' }}>PHYSIO<span style={{ color: '#ddd' }}>TRENDS</span></strong>. All Rights Reserved
                        </div>
                        <div className={styles.credits}>
                            Developed by <Link href="https://dhanparmar.netlify.app" target="_blank" title='Dhruv Parmar'>Dhruv Parmar</Link>
                        </div>
                    </div>
                    <div className={`col-lg-6 p-0 ${styles.social_links}`} style={{ textAlign: 'end' }}>
                        <Link href="https://www.linkedin.com/posts/physiotrends_physiotrends-linkedin-activity-7171034285615898625-nQlZ" target="_blank" className={styles.linkedin} title='LinkedIn | PhysioTrends'>
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://chat.whatsapp.com/JDCR6lerXr95qfKZKzexoV" target="_blank" className={styles.whatsapp} title='Whatsapp | PhysioTrends'>
                            <FaWhatsapp />
                        </Link>
                        <Link href="https://www.instagram.com/thephysiobrothers8/" target="_blank" className={styles.instagram} title='Instagram | PhysioTrends'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
