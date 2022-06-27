import Head from "next/head";
import styles from "../styles/Quicklinks.module.css";
import Layout from "./comps/layout";
import Spacer from "./comps/spacer";
import Heading from "./comps/heading";

function Card(props) {
  return (
    <a href={props.url} target="_blank" className={styles.card}>
      <h2>{props.name} &rarr;</h2>
    </a>
  );
}

export default function QuickLinks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rumour Media Docs | Quick Links</title>
        <meta
          name="description"
          content="How we manage projects at Rumour Media."
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <Heading title="Quick Links" />
          <Spacer />
          <div className={styles.wrapper}>
            <div className={styles.grid}>
              <Card name="Email Login" url="https://sso.godaddy.com/?app=o365&realm=pass&marketid=en-US" />
              <Card name="Slack" url="https://rumour-media.slack.com/" />
              <Card name="Monday.com" url="https://rumourmedia.monday.com/auth/login_monday/email_password" />
              <Card name="Monday.com Desktop App" url="https://apps.apple.com/us/app/monday-com/id1298450641?mt=12" />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
