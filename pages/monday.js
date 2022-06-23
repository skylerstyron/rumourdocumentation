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

                <div className={styles.description}>
                    <p>If you have not received an invite </p>
                    <a href="https://rumourmedia.monday.com/users/sign_up?invitationId=12475538867640670000" target="_blank">
                        <code className={styles.code}>join here</code>
                    </a>
                </div>
                <div className={styles.info}>
                    <div className={styles.description}>
                        <h2 className={styles.sectionHead}>Navigation</h2>
                    </div>
                    <h3>Boards</h3>
                    <p>Each of our clients has their own projects board. These boards contain tickets for projects that are currently in progress and helps to organize...</p>
                    <hr />
                    <h3>Groups</h3>
                    <p>A board is made of groups. A group is a color coded section that will contain your tasks for each person on our team. This helps us manage workload and keep up with our own tasks.</p>
                    <hr />
                    <h3>Items</h3>
                    <p>An Item is an individual row (or line item) in a group that represent projects. Each Item is divided into columns:</p>
                    <ul>
                        <li>Files</li>
                        <li>Project Manager</li>
                        <li>Involved</li>
                        <li>Status</li>
                        <li>Due Date</li>
                        <li>Time Tracking</li>
                        <li>Time Tracking(Subitems)</li>
                        <li>Completed Date</li>
                        <li>Category</li>
                    </ul>
                    <hr />
                    <h3>Understanding Status</h3>
                    <ul>
                        <li>Completed</li>
                        <li>Need Approval</li>
                        <li>Working on it</li>
                        <li>Paused</li>
                        <li>Stuck</li>
                        <li>In Progress</li>
                        <li>On Hold</li>
                        <li>Video Shoot Scheduled</li>
                        <li>Waiting on Mike</li>
                        <li>Project Canceled</li>
                        <li>Not Started</li>
                        <li>Needs Work</li>
                    </ul>
                    <div className={styles.statusGrid}>

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
