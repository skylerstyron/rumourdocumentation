import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Quicklinks.module.css'
import Link from 'next/link'

export default function QuickLinks() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rumour Media Docs | Quick Links</title>
                <meta name="description" content="How we manage projects at Rumour Media." />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Link href="/">
                <a className={styles.backtohome}><code className={styles.code}>back to home</code></a>
            </Link>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Quick Links
                    </h1>
                </div>

                <p className={styles.description}>

                </p>

                <div className={styles.wrapper}>

                    <div className={styles.grid}>
                        <a href="https://sso.godaddy.com/?app=o365&realm=pass&marketid=en-US" target="_blank" className={styles.card}>
                            <h2>Email Login &rarr;</h2>
                        </a>

                        <a href="https://rumourmedia.slack.com/?redir=%2Fssb%2Fredirect%3Fentry_point%3Dsignin" target="_blank" className={styles.card}>
                            <h2>Slack &rarr;</h2>
                        </a>

                        <a href="https://rumourmedia.monday.com/auth/login_monday/email_password" target="_blank" className={styles.card}>
                            <h2>Monday.com &rarr;</h2>
                        </a>
                        <a href="https://apps.apple.com/us/app/monday-com/id1298450641?mt=12" target="_blank" className={styles.card}>
                            <h2>Monday.com Desktop App &rarr;</h2>
                        </a>

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
