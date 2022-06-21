import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Monday.module.css'
import Link from 'next/link'

export default function Monday() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rumour Media Docs | Monday.com</title>
                <meta name="description" content="How we manage projects at Rumour Media." />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Link href="/">
                <a className={styles.backtohome}><code className={styles.code}>back to home</code></a>
            </Link>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Monday.com
                </h1>

                <div className={styles.wrapper}>
                    <div className={styles.description}>
                        <h2 className={styles.sectionHead}>Navigation</h2>
                    </div>

                    <div className={styles.grid}>
                        <Link href="/">
                            <a className={styles.card}>
                                <h2>?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </Link>

                        <Link href="/">
                            <a className={styles.card}>
                                <h2>?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </Link>

                        <Link href="/">
                            <a className={styles.card}>
                                <h2>?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </Link>

                        <Link href="/">
                            <a className={styles.card}>
                                <h2>?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>
                    Powered by {' '}
                    <code className={styles.code}>brain wrinkles</code>
                </p>
            </footer>
        </div>
    )
}
