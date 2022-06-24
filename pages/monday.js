import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Monday.module.css'
import Link from 'next/link'
import Layout from './comps/layout'
// import Status from './comps/status'
import Spacer from './comps/spacer'


function Status(props) {
    return (
        <div className={styles.parent}>
            <div className={styles.div1}>
                <div className={styles.status} style={props.style}>
                    <p className={styles.statusName}>{props.name}</p>
                </div>
            </div>
            <div className={styles.div2}>
                <p className={styles.statusdescription}>{props.description}</p>
                </div>
            <div className={styles.div3}>
            <p className={styles.statusdescription}>{props.nextstep}</p>
            </div>
        </div>

    )
}

export default function Monday() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rumour Media Docs | Monday.com</title>
                <meta name="description" content="How we manage projects at Rumour Media." />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Layout>
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
                        <div className={styles.statusGrid}>

                            <Status name="Name" description="What does it mean?" nextstep="What to do next?"/>
                            <Status name="Completed" style={{ backgroundColor: '#30ce7e' }} description="The project is done. There is nothing else to do." nextstep="Nothing, an automation will take care of the rest."/>
                            <Status name="Need Approval" style={{ backgroundColor: '#844b8f' }} description="Completed, but needs approval by lead or director. " nextstep="Once it is marked NEED APPROVAL you must drag ticket to the group of the person supervising that area." />
                            <Status name="Workig on it" style={{ backgroundColor: '#fbb051' }} description="Actively tracking time on the project." nextstep="Make clear and detailed notes on what you are doing." />
                            <Status name="Paused" style={{ backgroundColor: '#fd6e46' }} description="Time has been tracked, currently notworking on it." nextstep="Make clear and detailed notes on why you had to pause the project." />
                            <Status name="Stuck" style={{ backgroundColor: '#e0506b' }} description="Need help, you can't move forward on the project." nextstep="Make clear and detailed notes on why you Stuck." />
                            <Status name="In Progress" style={{ backgroundColor: '#144851' }} description="Project in motion by others." nextstep="Make clear and detailed notes on what others are doing for you at the moment." />
                            <Status name="On Hold" style={{ backgroundColor: '#215ede' }} description="Important, but client wants other things done first." nextstep="Make clear and detailed notes on what client is wanting and when you will get back on the project." />
                            <Status name="Video Shoot Scheduled" style={{ backgroundColor: '#fd7a7f' }} description="A time has been alotted for a photo or video shoot and participants have been notified of the time/date." nextstep="Make clear and detailed notes on why you are waiting." />
                            <Status name="Waiting on Mike" style={{ backgroundColor: '#f7a0f1' }} description="Need input from Mike." nextstep="Make clear and detailed notes on why you are waiting." />
                            <Status name="Project Canceled" style={{ backgroundColor: '#432f2f' }} description="The project was canceled but work had already been done." nextstep="After it is marked PROJECT CANCELED drag the ticket to group Jonathan Current Projects." />
                            <Status name="Not Started" style={{ backgroundColor: '#666a80' }} description="Default setting, there is no work started." nextstep="No action needed." />
                            <Status name="Needs Work" style={{ backgroundColor: '#bb4562' }} description="" nextstep="" />
                           
                        </div>

                    </div>
                </main>
            </Layout>
        </div>
    )
}
