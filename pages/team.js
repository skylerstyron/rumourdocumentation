import Head from 'next/head'
import styles from '../styles/Team.module.css'
import Layout from './comps/layout'
import Spacer from './comps/spacer'


function Member(props) {
    return (
        <div className={styles.info}>
            <h4 className={styles.name}>{props.name}</h4>
            <div className={styles.alias}> - {props.alias}</div>
            <p className={styles.email}>{props.email}</p>
            <hr />
            <p className={styles.text}>{props.position}</p>
            <p className={styles.text}>{props.description}</p>
        </div>
    )
}

export default function QuickLinks() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rumour Media Docs | Quick Links</title>
                <meta name="description" content="How we manage projects at Rumour Media." />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Layout>
                <main className={styles.main}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            Our Team
                        </h1>
                    </div>
                    <Spacer />
                    <Member name="Rob" alias="Mango" position="Creative Director of Marketing" description="His creative team designs all graphics needed for web, print or social. If there is a graphic, image, illustration, video, or engineering manual needed his team should be contacted. All Creative material must follow brand style guides go through Rob for approval prior to use." email="mango@rumourmedia.com" />
                    <Member name="Skyler" alias="TheLettuce" position="Lead Web Developer" description="His team creates and handles everything for web. If there is anything that needs to be changed or created on any website his team handles it. All web development or web design must follow brand style guides and go through Skyler for approval prior to going live." email="thelettuce@rumourmedia.com" />
                    <Member name="Jonathan" alias="Sour" position="Project Manager" description="Jonathan keeps all of marketing on task. He prioritizes what client projects are needing to be done for the week and handles all client billing. Jonathan meets with Mike weekly to let him know where marketing is at. " email="sour@rumourmedia.com" />
                    <Member name="Duncan" alias="7" position="Content Lead" description="Duncan is responsible for creating all video content, as well as creating and scheduling content for distribution channels (social, RSTMD APP, etc). Duncan is also responsible for product photography, lifestyle photography, and capturing any photo or video content needed." email="7@rumourmedia.com" />
                    <Member name="Zach" alias="Double A" position="Graphic Designer" description="Zach is responsible for handling Graphics pertaining to apparel and screen printing. " email="zmetz@rumourmedia.com" />
                </main>

            </Layout>
        </div>
    )
}
