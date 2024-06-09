import React, { useEffect, useRef, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Advertise.module.scss'
import { Col, Row, Table } from 'react-bootstrap'
import { MdNoiseAware } from "react-icons/md"
import { AiOutlineStock } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import Image from 'next/image'
import ThePhysioBrothers from '../../public/assets/img/Clients/physiobrothers.png'
import YogaSanskriti from '../../public/assets/img/Clients/header-logo.png'
import PhysioGyan from '../../public/assets/img/Clients/physioGyan.jpeg'
import PricePlan from '../../public/assets/PricePlan'
import AdsImg from '../../public/assets/img/adsSpec.png'
import { Abril_Fatface, Comfortaa } from 'next/font/google'
import DynamicChart from '@/components/DynamicChart'
import physiothonline from '../../public/assets/img/associated/physioth-online.jpeg'
import smartPT from '../../public/assets/img/associated/smart-pt.jpeg'
import { motion, useAnimation } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useInView } from 'react-intersection-observer'

const abrilFatface = Abril_Fatface({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const Advertise = () => {
    const width = useMediaQuery('(max-width: 576px)')

    const aboutSectionRef = useRef(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-100px' });

    const [chartOptions, setChartOptions] = useState({
        series: [10000, 4640, 3176, 1500],
        options: {
            chart: {
                height: 390,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        }
                    },
                    barLabels: {
                        enabled: true,
                        useSeriesColors: true,
                        margin: 8,
                        fontSize: '16px',
                        formatter: function (seriesName, opts) {
                            return seriesName + ": " + opts.w.globals.series[opts.seriesIndex];
                        },
                    },
                },
            },
            colors: ['#38aaf1', '#f58529', '#0A66C2', '#25D366'],
            labels: ['Total Magazine Reader', 'Instagram Followers', 'LinkedIn Network', 'Whatsapp Network'],
            responsive: [
                {
                    breakpoint: 1400,
                    options: {
                        chart: {
                            height: 450,
                        },
                    }
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 230,
                        },
                        legend: {
                            show: false
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    style: {
                                        fontSize: '10px' // Adjust the font size for phone view
                                    }
                                },
                                barLabels: {
                                    fontSize: '9px',
                                }
                            }
                        },
                    }
                },
            ]
        },
    });

    const fadeLeftAnimation = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const fadeRightAnimation = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <>
            <Head>
                <title>Advertise | PhysioTrends</title>
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

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Advertise'} />
            <section className={`${styles?.advertise} container`}>
                <div className={`${styles?.advertiseContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Advertise With Us!</h1>
                    <div className={`${styles?.line}`}></div>
                    <motion.p
                        className={`${styles?.advertiseDesc} mt-4`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: width ? 0.3 : 0.8, duration: width ? 0.5 : 1, animate: 'easeInOut' }}
                    >
                        PHYSIOTRENDS is one of the fastest growing ISSN Certified E-magazine for the Physiotherapist. Articles from the great Innovators, Thinkers, Researchers and Creators in the field of physiotherapy can be found in the PhysioTrends E-Magazine. Additionally, PhysioTrends has an advertisement section where users can promote their products or services in order to target consumers.
                    </motion.p>

                    <div className={`${styles?.analytics}`}>
                        <Row>
                            <Col sm={6}>
                                {/* <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="radialBar" height={390} /> */}
                                <DynamicChart options={chartOptions.options} series={chartOptions.series} type="radialBar" height={390} />
                            </Col>
                            <Col sm={6}>
                                <div className={`${styles?.totalAudience}`}>
                                    <h1 className={`${styles?.totalCount} ${abrilFatface?.className}`}>19,316+</h1>
                                    <h1 className={`${styles?.audienceTitle} ${comfortaa?.className}`}>Total Audience</h1>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={`${styles?.whyUs}`} ref={aboutSectionRef}>
                        <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Why Us?</h1>
                        <div className={`${styles?.line}`}></div>

                        <div className={`${styles?.detailCardContent}`}>
                            <Row>
                                <Col lg={4} md={6}>
                                    <motion.div
                                        className={`${styles?.detailCard}`}
                                        ref={ref}
                                        variants={fadeRightAnimation}
                                        initial={'hidden'}
                                        animate={controls}
                                        transition={{
                                            delay: width ? 0 : 0.5, // delay the animation by 0.2 seconds
                                            duration: width ? 0.5 : 1, // animation duration of 0.8 seconds
                                            ease: 'easeInOut', // easing function for a smoother animation
                                        }}
                                    >
                                        <div className={`${styles?.detailCardIcon}`}>
                                            <MdNoiseAware />
                                        </div>
                                        <p className={`${styles?.detailCardBody}`}>Build Brand Awareness</p>
                                    </motion.div>
                                </Col>
                                <Col lg={4} md={6} className='mt-md-0 mt-3'>
                                    <motion.div
                                        className={`${styles?.detailCard}`}
                                        ref={ref}
                                        variants={fadeAnimation}
                                        initial={'hidden'}
                                        animate={controls}
                                        transition={{
                                            delay: width ? 0 : 0.5, // delay the animation by 0.2 seconds
                                            duration: width ? 0.5 : 1, // animation duration of 0.8 seconds
                                            ease: 'easeInOut', // easing function for a smoother animation
                                        }}
                                    >
                                        <div className={`${styles?.detailCardIcon}`}>
                                            <AiOutlineStock />
                                        </div>
                                        <p className={`${styles?.detailCardBody}`}>Increase Reach</p>
                                    </motion.div>
                                </Col>
                                <Col lg={4} md={6} className='mt-lg-0 mt-md-3 mt-3'>
                                    <motion.div
                                        className={`${styles?.detailCard}`}
                                        ref={ref}
                                        variants={fadeLeftAnimation}
                                        initial={'hidden'}
                                        animate={controls}
                                        transition={{
                                            delay: width ? 0 : 0.5, // delay the animation by 0.2 seconds
                                            duration: width ? 0.5 : 1, // animation duration of 0.8 seconds
                                            ease: 'easeInOut', // easing function for a smoother animation
                                        }}
                                    >
                                        <div className={`${styles?.detailCardIcon}`}>
                                            <FaUsers />
                                        </div>
                                        <p className={`${styles?.detailCardBody}`}>Get Targeted Audience</p>
                                    </motion.div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div>
                        <h1 className={`sectionTitle ${styles?.sectionTitle} mt-4`} title='Rate of Advertisement | PhysioTrends'>Rate of Advertisement:</h1>
                        <div className={`${styles?.line}`}></div>

                        <Row className={`${styles?.priceSection}`}>
                            <Col lg={6} md={12}>
                                <div className={`${styles?.adsImg}`}>
                                    <PricePlan />
                                </div>
                            </Col>
                            <Col lg={6} md={12} className={`${styles?.tableContent}`}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Single Issue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Double Pages</td>
                                            <td className={`${styles?.price}`}>3000/-</td>
                                        </tr>
                                        <tr>
                                            <td>Single Page</td>
                                            <td className={`${styles?.price}`}>2000/-</td>
                                        </tr>
                                        <tr>
                                            <td>Half Page</td>
                                            <td className={`${styles?.price}`}>1,500/-</td>
                                        </tr>
                                        <tr>
                                            <td>1/4 Page</td>
                                            <td className={`${styles?.price}`}>1,000/-</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <span className={`${styles?.notes}`}>Note: 100% payment is mandatory for the Advertisement</span>
                            </Col>

                            <Col sm={12}>
                                <div className={`${styles.adsImg}`}>
                                    <Image
                                        src={AdsImg}
                                        alt=''
                                        quality={100}
                                        priority
                                    />
                                </div>
                            </Col>
                        </Row>

                    </div>

                    <div className={`${styles?.clientContent} mt-4`}>
                        <h1 className={`${styles?.contentTitle}`}>A few of our many Satisfied Clients</h1>

                        <div className='d-flex flex-wrap justify-content-center gap-2 mt-4'>
                            <div className={`${styles?.clientLogo}`}>
                                <Image src={ThePhysioBrothers} className={'img-fluid'} alt='' quality={100} priority />
                            </div>
                            <div className={`${styles?.clientLogo}`}>
                                <Image src={YogaSanskriti} className={'img-fluid'} alt='' quality={100} priority />
                            </div>
                            <div className={`${styles?.clientLogo}`}>
                                <Image src={PhysioGyan} className={'img-fluid'} alt='' quality={100} priority />
                            </div>
                            <div className={`${styles?.clientLogo}`}>
                                <Image src={physiothonline} className={'img-fluid'} alt='' quality={100} priority />
                            </div>
                            <div className={`${styles?.clientLogo}`}>
                                <Image src={smartPT} className={'img-fluid'} alt='' quality={100} priority />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advertise
