import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero";
import HomePageArticles from "@/components/HomePageArticles";
import { articles } from "@/data/articles";
import articleImg from '../../public/assets/img/magazines/vol1_issue1.jpg'
import { Button, Col, Row, Table } from "react-bootstrap";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Home () {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>PhysioTrends</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers' />
        <meta name="description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
        <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
        <meta property="og:description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation." />
        <meta property="og:url" content="https://physiotrends.vercel.app/" />
        <meta property="og:image" content="assets/img/favicon.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="assets/img/favicon.jpg" />
      </Head>
      <main>
        <Hero />

        <section id="about" className={`${styles?.about}`}>
          <h1 className={`sectionTitle`} data-heading='About' title='About Us | PhysioTrends'>PhysioTrends</h1>

          <div className={`${styles?.innerContent}`}>
            <p className={`${styles?.desc} mt-5`}>
              PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy.
            </p>

            <div className={`${styles?.visionContent} mt-5`}>
              <Row>
                <Col lg={6} md={12} sm={12}>
                  <div className={`${styles?.card}`}>
                    <h1 className={`${styles?.cardTitle}`}>Vision</h1>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles?.cardBody}`}>
                      "Empowering physiotherapists through timely evidence, fostering a collaborative community for elevated standards."
                    </p>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="mt-lg-0 mt-3">
                  <div className={`${styles?.card}`}>
                    <h1 className={`${styles?.cardTitle}`}>Mission</h1>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles?.cardBody}`}>
                      "Connect physiotherapists globally with cutting-edge knowledge, building a stronger profession."
                    </p>
                  </div>
                </Col>
              </Row>
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
                    <td className={`${styles?.dataValue}`} title="Dr. Jaspreet Kaur Kang | Chief Editor of PhysioTrends">Dr. Jaspreet Kaur Kang</td>
                  </tr>
                  <tr>
                    <td>Copyright</td>
                    <td className={`${styles?.dataValue}`}>PhysioTrends &copy; 2024, All rights Reserved.</td>
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
                    <td className={`${styles?.dataValue}`} title="Contact Us | Email Address of PhysioTrends">physiothrendsmagazine@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phone No.</td>
                    <td className={`${styles?.dataValue}`} title="Contact Us | Phone Number of PhysioTrends">+91 7984-377-793</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td className={`${styles?.dataValue}`} title="PhysioTrends | Website of PhysioTrends">https://physiotrends.vercel.app</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td className={`${styles?.dataValue}`} title='Contact Us | Address of PhysioTrends'>PhysioTrends, Kuldevi Krupa, Sahkar Society, Street No.3, Sahkar Main Road, Bhaktinagar, Rajkot - 360002</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </section>

        <section id="magazines" className={`${styles?.articles}`}>
          <h1 className={`sectionTitle`} data-heading='Our Latest' title="Our Latest Research Articles | PhysioTrends">Articles</h1>

          <HomePageArticles />

          <div className={`text-center mt-4 ${styles?.viewMoreBtn}`}>
            <span onClick={() => router.push('/articles')}>&lt;&lt; View More &gt;&gt;</span>
          </div>
        </section>
      </main>
      <ToastContainer stacked />
    </>
  );
}
