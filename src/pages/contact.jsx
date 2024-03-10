import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Contact.module.scss'
import { MdEmail } from "react-icons/md"
import { IoCall } from "react-icons/io5"
import { Col, Form, Row } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6"
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import ContactUs from '../../public/assets/ContactUs'
import { FaPaperPlane } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Contact = () => {
    const router = useRouter()
    const { control, register, handleSubmit, watch, errors } = useForm({ mode: 'all' })

    const onHandleSubmit = (data) => {
        // formData = `https://wa.me/7984377793?text=Hello%20there,%20I'am%20${watch('sName')}%20and%2C%20I%20wanted%20to%20discuss%20about%20${watch('sSubject')}%20that,%20${watch('sMessage')}`

        router?.push(`https://wa.me/7984377793?text=Hello%20there,%20I'am%20${data?.sName}%20and%2C%20I%20wanted%20to%20discuss%20about%20${data?.sSubject}%20that,%20${data?.sMessage}`)
    }
    return (
        <>
            <Head>
                <title>Contact | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Contact'} />
            <section className={`${styles?.contact}`}>
                <div className={`${styles?.contactContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Stay Connected With Us!</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles?.notes} mt-2`}>Note: One must read all the <Link href={'/terms-and-conditions'}>Terms & Conditions</Link> before submitting the Article.</p>
                    <div className='mt-5'>
                        <Row className={styles?.contactDetails}>
                            <Col lg={4} md={4}>
                                <div className={`${styles?.cardDetails}`}>
                                    <div className={`${styles?.cardIcon}`}>
                                        <FaLocationDot className={`${styles?.location}`} />
                                    </div>
                                    <p>Kuldevi Krupa, Sahkar Society,</p>
                                    <p>Street No.3, Sahkar Main Road,</p>
                                    <p>Bhaktinagar, Rajkot - 360002</p>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className={`${styles?.cardDetails}`}>
                                    <div className={`${styles?.cardIcon}`}>
                                        <IoCall className={`${styles?.phoneNo}`} />
                                    </div>
                                    <p>+91 7984-377-793</p>
                                    <p>+91 9820-553-515</p>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className={`${styles?.cardDetails}`}>
                                    <div className={`${styles?.cardIcon}`}>
                                        <MdEmail className={`${styles?.email}`} />
                                    </div>
                                    <p>physiothrendsmagazine@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={`${styles?.contactForm}`}>
                        <Row>
                            <Col lg={6}>
                                <div className={`${styles?.sideLogo}`}>
                                    <ContactUs />
                                </div>
                            </Col>
                            <Col lg={6} className={`${styles?.formContent}`}>
                                <Form onSubmit={handleSubmit(onHandleSubmit)} autoComplete='off'>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Controller
                                            name='sName'
                                            control={control}
                                            rules={{ required: { value: true, message: 'Name is required.' } }}
                                            render={({ field: { onChange, value, ref } }) => (
                                                <Form.Control
                                                    ref={ref}
                                                    type="text"
                                                    className={`form-control ${errors && errors?.sName}`}
                                                    placeholder="Enter your name"
                                                    value={value}
                                                    onChange={onChange}
                                                />
                                            )}
                                        />
                                        {errors?.sName && <Form.Control.Feedback type='invalid'>{errors?.sName?.message}</Form.Control.Feedback>}
                                    </Form.Group>

                                    <Form.Group className='mt-2'>
                                        <Form.Label>Subject</Form.Label>
                                        <Controller
                                            name='sSubject'
                                            control={control}
                                            rules={{ required: { value: true, message: 'Subject to discuss is required.' } }}
                                            render={({ field: { onChange, value, ref } }) => (
                                                <Form.Control
                                                    ref={ref}
                                                    type="text"
                                                    placeholder="Enter topic to discuss"
                                                    value={value}
                                                    onChange={onChange}
                                                    className={`form-control ${errors && errors?.sSubject}`}
                                                />
                                            )}
                                        />
                                        {errors?.sSubject && <Form.Control.Feedback type='invalid'>{errors?.sSubject?.message}</Form.Control.Feedback>}
                                    </Form.Group>

                                    <Form.Group className='mt-2'>
                                        <Form.Label>Message</Form.Label>
                                        <Controller
                                            name='sMessage'
                                            control={control}
                                            rules={{ required: { value: true, message: 'Message is required.' } }}
                                            render={({ field: { onChange, value, ref } }) => (
                                                <Form.Control
                                                    as="textarea"
                                                    style={{ height: '100px' }}
                                                    ref={ref}
                                                    placeholder="Enter the message..."
                                                    value={value}
                                                    className={`form-control ${errors && errors?.sMessage}`}
                                                    onChange={onChange}
                                                />
                                            )}
                                        />
                                        {errors?.sMessage && <Form.Control.Feedback type='invalid'>{errors?.sMessage?.message}</Form.Control.Feedback>}
                                    </Form.Group>

                                    <div className='mt-3'>
                                        <button type='submit' className='button'>
                                            <FaPaperPlane className='button-icon' /> Send Message
                                        </button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
