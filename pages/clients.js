import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Quicklinks.module.css'
import Link from 'next/link'
import Layout from './comps/layout'
import Spacer from './comps/spacer'

export default function QuickLinks() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rumour Media Docs | Clients</title>
                <meta name="description" content="Rumour Media's Clients" />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Layout>
                <main className={styles.main}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            Our Clients
                        </h1>
                    </div>
                    <Spacer />
                    <div className={styles.wrapper}>
                        <div className={styles.grid}>
                            <a href="https://restomodair.com/" target="_blank" className={styles.card}>
                                <h2>Restomod Air &rarr;</h2>
                            </a>
                            <a href="https://www.classicautoair.com/" target="_blank" className={styles.card}>
                                <h2>Classic Auto Air &rarr;</h2>
                            </a>
                            <a href="https://driveshaftshop.com/" target="_blank" className={styles.card}>
                                <h2>The Driveshaft Shop &rarr;</h2>
                            </a>
                            <a href="https://www.originalair.com/" target="_blank" className={styles.card}>
                                <h2>Original Air &rarr;</h2>
                            </a>
                            <a href="https://www.mpbrakes.com/" target="_blank" className={styles.card}>
                                <h2>Master Power Brakes &rarr;</h2>
                            </a>
                        </div>
                    </div>
                </main>
            </Layout>
        </div>
    )
}
