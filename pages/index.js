import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Spacer from './comps/spacer'
import Footer from './comps/footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rumour Media Docs</title>
        <meta name="description" content="Internal documentation for Rumour Media" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <h2>Welcome to</h2>
        <h1 className={styles.title}>
          <a href="https://rumourmedia.com">RUM<span className={styles.logoIcon}><Image src="/icon.png" alt="Vercel Logo" width={70} height={70} /></span>UR <span className={styles.titlebold}>MEDIA</span></a>
        </h1>

        <Spacer />

        <div className={styles.grid}>
          <Link href="/quicklinks">
            <a className={styles.card}>
              <h2>Quick Links &rarr;</h2>
              <p>
                Getting set up. Email login, Monday.com, Slack.
              </p>
            </a>
          </Link>
          <Link href="/monday">
            <a className={styles.card}>
              <h2>Project Management  &rarr;</h2>
              <p>How we manage tasks, update projects, and track time.</p>
            </a>
          </Link>

          <Link href="/clients">
            <a className={styles.card}>
              <h2>Our Clients &rarr;</h2>
              <p>Learn about the clients we work with and thier brand image.</p>
            </a>
          </Link>

          <Link href="/team">
            <a className={styles.card}>
              <h2>Our Team &rarr; </h2>
              <p>Get to know our team and who does what.</p>
            </a>
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  )
}
