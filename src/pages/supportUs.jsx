import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/SupportUs.module.scss'
import { Col, Form, Row } from 'react-bootstrap'
import Image from 'next/image'
import physioBrothersLogo from '../../public/assets/img/Clients/physiobrothers.png'

const SupportUs = () => {
    return (
        <>
            <Head>
                <title>Support Us | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="Promote your brand to targeted physio audiences - Advertise with Physiotrends." />
                <meta property="og:url" content="https://physiotrends.vercel.app/advertise" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Support Us'} />
            <section className={`${styles?.supportUs}`}>
                <div className={`${styles?.innerContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Support PhysioTrends</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            At PhysioTrends, we are dedicated to empowering physiotherapists, healthcare professionals, and students with valuable resources, insights, and opportunities to advance the field of physiotherapy. As a non-profit organization, we rely on the generosity and support of our community to sustain and expand our initiatives.
                        </p>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Financial Support</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            Your financial contribution plays a vital role in helping us maintain and improve our free digital magazine, as well as develop new content, programs, and resources for our growing community. Your support can help us:
                        </p>
                        <ul>
                            <li>
                                <span>Enhance the quality and frequency of our magazine, ensuring our readers have access to the latest research, best practices, and thought leadership in physiotherapy.</span>
                            </li>
                            <li>
                                <span>Organize engaging webinars, workshops, and educational events that provide professional development opportunities for our community.</span>
                            </li>
                            <li>
                                <span>Invest in innovative digital tools and technologies that improve the user experience on our platform.</span>
                            </li>
                            <li>
                                <span>Expand our outreach and marketing efforts to connect with more physiotherapists, students, and healthcare professionals worldwide.</span>
                            </li>
                        </ul>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Contribute to Our Magazine</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            In addition to financial support, we also welcome physiotherapy professionals, researchers, and subject matter experts to contribute articles and content to our free digital magazine. By sharing your expertise and insights, you can:
                        </p>
                        <ul>
                            <li>
                                <span>Showcase your thought leadership and elevate your personal and professional brand.</span>
                            </li>
                            <li>
                                <span>Inspire and educate our community, helping them stay at the forefront of the latest advancements in the field.</span>
                            </li>
                            <li>
                                <span>Expand your network and collaborate with like-minded individuals who are passionate about the future of physiotherapy.</span>
                            </li>
                            <li>
                                <span>Receive recognition and acknowledgment for your valuable contributions.</span>
                            </li>
                        </ul>

                        <p>
                            Whether you choose to support us financially or through your contributions to our magazine, your involvement will be instrumental in helping PhysioTrends continue our mission of empowering the physiotherapy community. Together, we can drive positive change and make a lasting impact on the healthcare landscape.
                        </p>

                        <p>
                            To learn more about how you can support PhysioTrends, please visit "<span>PhysioTrends</span>" or contact us directly. We appreciate your support and look forward to working with you.
                        </p>
                    </div>
                </div>

                <div className={`${styles?.allSponsor}`}>
                    <h1 className={`${styles?.subTitle}`}>Sponsor</h1>
                    <div className={`${styles?.sponsorContent} mt-3`}>
                        <div className={`${styles?.sponsorImg}`}>
                            <Image
                                src={physioBrothersLogo}
                                alt='PhysioBrothers Logo'
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SupportUs