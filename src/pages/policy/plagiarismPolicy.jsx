import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Policy.module.scss'

const PlagiarismPolicy = () => {
    return (
        <>
            <Head>
                <title>Plagiarism Policy | Policy | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers' />
                <meta name="description" content="Read the Plagiarism Policy carefully." />
                <meta property="og:title" content="Plagiarism Policy | Read the Plagiarism Policy carefully." />
                <meta property="og:description" content="Read the Plagiarism Policy carefully." />
                <meta property="og:url" content="https://physiotrends.vercel.app/policy/plagiarismPolicy" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Policy - Plagiarism Policy'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Plagiarism Policy</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} mt-3`}>
                        PhysioTrends is committed to upholding the highest standards of academic integrity and originality. Plagiarism, including the verbatim or near-verbatim copying of someone else's work without proper attribution, is strictly prohibited.
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        Authors submitting content to PhysioTrends must ensure that their work is original and properly cited. Any instances of plagiarism will result in immediate rejection of the submission and may lead to further consequences, including suspension or permanent ban from contributing to PhysioTrends.
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        PhysioTrends employs plagiarism detection tools to screen submissions and identify potential instances of plagiarism. Authors found to have engaged in plagiarism will be notified, and appropriate action will be taken in accordance with our editorial policies.
                    </p>
                    <p className={`${styles.policyDetails}`}>
                        By submitting content to PhysioTrends, authors affirm that their work is original, properly cited, and does not infringe upon the intellectual property rights of others.
                    </p>

                    <p className={`${styles.note}`}>
                        Note: This plagiarism policy emphasizes the importance of originality and proper citation while submitting content to PhysioTrends and outlines the consequences of engaging in plagiarism.
                    </p>
                </div>
            </section>
        </>
    )
}

export default PlagiarismPolicy
