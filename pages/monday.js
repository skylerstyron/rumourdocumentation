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
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Monday.com
                    </h1>
                </div>

                <p className={styles.description}>
                    If you have not received an invite {' '}<br /><br />
                    <a href="https://rumourmedia.monday.com/users/sign_up?invitationId=12475538867640670000" target="_blank">
                        <code className={styles.code}>join here</code>
                    </a>
                </p>
                <div className={styles.info}>
                    <div className={styles.description}>
                        <h2 className={styles.sectionHead}>Navigation</h2>
                    </div>
                    <h3>Boards</h3>
                    <p>Each of our clients has their own projects board. These boards contain tickets for projects that are currently in progress and helps to organize...</p>
                    <h3>Groups</h3>
                    <p>A board is made of groups. A group is a color coded section that will contain your tasks for each person on our team. This helps us manage workload and keep up with our own tasks.</p>
                </div>

                <div className={styles.wrapper}>



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
