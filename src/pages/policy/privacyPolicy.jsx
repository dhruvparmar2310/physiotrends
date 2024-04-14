import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Policy.module.scss'

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Policy | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="Read the Privacy Policy carefully." />
                <meta property="og:title" content="Privacy Policy | Read the Privacy Policy carefully." />
                <meta property="og:description" content="Read the Privacy Policy carefully." />
                <meta property="og:url" content="https://physiotrends.vercel.app/policy/privacyPolicy" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Policy - Privacy Policy'} />
            <section className={`${styles?.policy} container`}>
                <div className={`${styles?.policyContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Privacy Policy</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} mt-3`}>
                        This Privacy Policy describes how PhysioTrends collects, uses, and protects the personal information you provide when using our e-magazine website PhysioTrends.
                    </p>

                    <h3 className={`${styles.subTitle}`}>Information Collection and Use</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} mt-3`}>
                        <strong>Personal Information</strong>: We may collect personal information such as your name, email address, and other contact details when you visit our newsletter, submit content, or participate in surveys or contests.
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        <strong>Usage Data</strong>: We may also collect non-personal information about your interactions with PhysioTrends, including your IP address, browser type, pages visited, and other usage statistics, to improve our website and services.
                    </p>

                    <h3 className={`${styles.subTitle}`}>Use of Information</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} mt-3`}>
                        We may use the information we collect for the following purposes:

                        <ul className='mt-2'>
                            <li>To personalize your experience and provide tailored content.</li>
                            <li>To send periodic emails, newsletters, or promotional materials.</li>
                            <li> To improve our website, content, and services based on your feedback and usage patterns.</li>
                            <li>To administer surveys, contests, or other site features.</li>
                            <li> To detect, prevent, and address technical issues or security concerns.</li>
                            <li>Data Security</li>
                        </ul>
                    </p>

                    <p className={`${styles.policyDetails}`}>
                        We are committed to protecting the security of your personal information. We implement a variety of security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.

                    </p>
                    <p className={`${styles.policyDetails}`}>
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to fulfill specific service requests (e.g., newsletter distribution).
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        PhysioTrends may use cookies and similar tracking technologies to enhance your browsing experience and collect usage data. You can choose to disable cookies through your browser settings, but please note that some features of PhysioTrends may not function properly as a result.
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        PhysioTrends may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any external sites you visit.
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for any updates.
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <strong>physiotrendsmagazine@gmail.com</strong>
                    </p>

                    <p className={`${styles.note}`}>
                        Note: This privacy policy outlines how PhysioTrends collects and uses personal information, as well as measures taken to protect user privacy and data security.
                    </p>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy
