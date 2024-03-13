import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Policy.module.scss'

const EditorialPolicy = () => {
    return (
        <>
            <Head>
                <title>Editorial Policy | Policy | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="Read the Editorial Policy carefully." />
                <meta property="og:title" content="Editorial Policy | Read the Editorial Policy carefully." />
                <meta property="og:description" content="Read the Editorial Policy carefully." />
                <meta property="og:url" content="https://physiotrends.vercel.app/policy/editorialPolicy" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Policy - Editorial Policy'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Editorial Policy</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} mt-3`}>
                        PhysioTrends is dedicated to providing high-quality, accurate, and informative content related to the field of physiotherapy. Our editorial policy encompasses the following principles:
                    </p>
                    <ol className='mt-2'>
                        <li><strong>Content Quality</strong>: We strive to publish content that is well-researched, evidence-based, and relevant to our audience of physiotherapy professionals, students, and enthusiasts.</li>
                        <li><strong>Originality</strong>: All content submitted to PhysioTrends must be original and not published elsewhere. Plagiarism is strictly prohibited, and submissions undergo plagiarism checks.</li>
                        <li><strong>Peer Review</strong>: Manuscripts submitted for publication undergo a rigorous peer review process by qualified experts in the field to ensure accuracy, credibility, and adherence to editorial standards.</li>
                        <li><strong>Diversity and Inclusivity</strong>: We aim to represent diverse perspectives, populations, and topics within the field of physiotherapy, promoting inclusivity and equity in our content.</li>
                        <li><strong>Transparency</strong>: PhysioTrends is committed to transparency in our editorial processes, including disclosure of conflicts of interest and sources of funding.</li>
                        <li><strong>Ethical Standards</strong>We adhere to ethical guidelines for publication and research integrity, including respect for intellectual property rights, confidentiality, and avoidance of conflicts of interest.</li>
                        <li><strong>Editorial Independence</strong>: PhysioTrends maintains editorial independence and does not allow advertisers or sponsors to influence editorial decisions or content.</li>
                        <li><strong>Feedback and Corrections</strong>: We welcome feedback from readers and authors and strive to address any errors or concerns promptly. Corrections or clarifications will be issued as necessary.</li>
                        <li><strong>Compliance with Laws and Regulations</strong>: PhysioTrends operates in compliance with applicable laws and regulations governing online publishing, data protection, and privacy.</li>
                    </ol>

                    <p className={`${styles.policyDetails} mt-3`}>
                        By adhering to these editorial principles, PhysioTrends aims to uphold the highest standards of integrity, accuracy, and professionalism in delivering valuable content to our audience.
                    </p>

                    <p className={`${styles.note}`}>
                        Note: This editorial policy outlines the guiding principles that govern content selection, publication processes, and ethical standards at PhysioTrends.
                    </p>
                </div>
            </section >
        </>
    )
}

export default EditorialPolicy
