import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero";
import HomePageArticles from "@/components/HomePageArticles";
import { articles } from "@/data/articles";
import articleImg from '../../public/assets/img/magazines/vol1_issue1.jpg'
import { Table } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PhysioTrends</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
        <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
        <link rel="icon" href="assets/img/favicon.jpg" />
      </Head>
      <main>
        <Hero />

        <section id="about" className={`${styles?.about}`}>
          <h1 className={`sectionTitle`} data-heading='About'>PhysioTrends</h1>

          <div className={`${styles?.innerContent}`}>
            <p className={`${styles?.desc} mt-5`}>
            PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy.
            </p>

            <div className={`${styles?.visionContent} mt-5`}>
              <div className={`${styles?.card}`}>
                <h1 className={`${styles?.cardTitle}`}>Vision</h1>
                <div className={`${styles?.line}`}></div>
                <p className={`${styles?.cardBody}`}>
                  "To be the premier global platform for physiotherapy professionals, recognized for our unparalleled commitment to delivering timely, evidence-based information, fostering innovation, and fostering a collaborative community dedicated to elevating standards and improving outcomes in physiotherapy practice."
                </p>
              </div>

              <div className={`${styles?.card}`}>
                <h1 className={`${styles?.cardTitle}`}>Mission</h1>
                <div className={`${styles?.line}`}></div>
                <p className={`${styles?.cardBody}`}>
                  "To empower physiotherapy professionals worldwide with cutting-edge knowledge, insights, and trends, enabling them to enhance patient care, advance their practice, and contribute to the evolution of the physiotherapy profession."
                </p>
              </div>
            </div>

            <div className={`${styles?.aboutUsDetails} mt-3`}>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Title</td>
                    <td className={`${styles?.dataValue}`}>PhysioTrends</td>
                  </tr>
                  <tr>
                    <td>Frequency</td>
                    <td className={`${styles?.dataValue}`}>Quarterly</td>
                  </tr>
                  <tr>
                    <td>ISSN No.</td>
                    <td className={`${styles?.dataValue}`}></td>
                  </tr>
                  <tr>
                    <td>Chief Editor</td>
                    <td className={`${styles?.dataValue}`}>Dr. Jaspreet Kaur Kang</td>
                  </tr>
                  <tr>
                    <td>Copyright</td>
                    <td className={`${styles?.dataValue}`}>PhysioTrends</td>
                  </tr>
                  <tr>
                    <td>Starting Year</td>
                    <td className={`${styles?.dataValue}`}>2024</td>
                  </tr>
                  <tr>
                    <td>Subject</td>
                    <td className={`${styles?.dataValue}`}>Medical Science, Physiotherapy</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td className={`${styles?.dataValue}`}>English</td>
                  </tr>
                  <tr>
                    <td>Publication Format</td>
                    <td className={`${styles?.dataValue}`}>Online</td>
                  </tr>
                  <tr>
                    <td>Email Address</td>
                    <td className={`${styles?.dataValue}`}>physiothrendsmagazine@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phone No.</td>
                    <td className={`${styles?.dataValue}`}>+91 7984-377-793</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td className={`${styles?.dataValue}`}>https://physiotrends.vercel.app</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td className={`${styles?.dataValue}`}>Kuldevi Krupa, Sahkar Society, Street No.3, Sahkar Main Road, Bhaktinagar, Rajkot - 360002</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </section>

        <section id="magazines" className={`${styles?.articles}`}>
          <h1 className={`sectionTitle`} data-heading='Our Latest'>Articles</h1>

          <HomePageArticles />
        </section>
      </main>
    </>
  );
}
