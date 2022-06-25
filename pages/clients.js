import Head from "next/head";
import styles from "../styles/Quicklinks.module.css";
import Layout from "./comps/layout";
import Spacer from "./comps/spacer";
import Heading from "./comps/heading";

function Company(props) {
  return (
    <a href={props.url} className={styles.card} target="_blank">
      <h2>{props.name} &rarr;</h2>
    </a>
  );
}

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
          <Heading title="Our Clients" />
          <Spacer />
          <div className={styles.wrapper}>
            <div className={styles.grid}>
              <Company url="https://restomodair.com/" name="Restomod Air" />
              <Company url="https://www.classicautoair.com/" name="Classic Auto Air" />
              <Company url="https://driveshaftshop.com/" name="The Driveshaft Shop" />
              <Company url="https://www.originalair.com/" name="Original Air" />
              <Company url="https://www.mpbrakes.com/" name="Master Power Brakes" />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}