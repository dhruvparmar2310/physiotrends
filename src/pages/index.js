import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero";
import HomePageArticles from "@/components/HomePageArticles";
import { articles } from "@/data/articles";
import articleImg from '../../public/assets/img/magazines/vol1_issue1.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log('articles :>> ', articles);
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
                  To become India's No. 1 E-Magazine for Physiotherapist.
                </p>
              </div>

              <div className={`${styles?.card}`}>
                <h1 className={`${styles?.cardTitle}`}>Mission</h1>
                <div className={`${styles?.line}`}></div>
                <p className={`${styles?.cardBody}`}>
                  To showcase Physio's Innovation, Talent, and Creativity in the form of Articles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className={`${styles?.articles}`}>
          <h1 className={`sectionTitle`} data-heading='Our Latest'>Articles</h1>

          <HomePageArticles />
        </section>
      </main>
    </>
  );
}
