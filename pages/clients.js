import Head from "next/head";
import styles from "../styles/Clients.module.css";
import Layout from "./comps/layout";
import Spacer from "./comps/spacer";
import Heading from "./comps/heading";

function Company(props) {
  return (
    <>
      <a href={props.url} className={styles.card} target="_blank">
        <h2>{props.name} &rarr;</h2>
      </a>
      <p className={styles.description}>{props.description1}</p>
      <p className={styles.description}>{props.description2}</p>
      <p className={styles.description}>{props.description3}</p>
      <p className={styles.description}>{props.description4}</p>
      <div className={styles.border}></div>
    </>
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
              <Company
                url="https://restomodair.com/"
                name="Restomod Air"
                description1="Located in Coppell, Texas and founded in 2012 Restomod Air is a custom aftermarket air conditioning manufacture. Restomod Air believes the ac aftermarket has substituted style with sub-par performance and plain vanilla flavoring. This has caused many of the great custom car builders to hide the aftermarket AC systems and parts, sacrificing performance, looks, and wasted time."
                description2="Restomod Air was created because custom car builders wanted more; more technology, more class, more quality, and more performance. Restomod Air specializes in the custom builder. Their a/c kits and components are for those wanting to put together a custom look for their vehicle. Restomod Air collections come from a mix of gritty industrial styling and sleek, flowing lines."
                description3="They start with innovative ideas and sketches, their engineers then design and specify their new products using quality materials like 6061-T6 billet aluminum, tungsten, titanium, carbon fiber, carbon aluminum, brass, copper, and steel. Restomod Air feels that sometimes “when you want the best quality it’s easier to just build it yourself, but at Restomod Air, we do all the hard work for you!”"
                description4="Restomod Air is often featured at high-end car shows, such as SEMA."
              />
              <Company
                url="https://www.classicautoair.com/"
                name="Classic Auto Air"
                description1="Located in Coppell, Texas and founded in 1977 Classic Auto Air is an air conditioning manufacture that retrofit air conditioning systems for classic and vintage vehicles. Their model specific a/c systems / a/c kits are bolt in meaning there little to zero modifications to the vehicle to have modern day a/c system."
                description2="They have a/c kits for Ford, GM, Mopar, and some European models. They have released what is called the Smart Series. Model-Specific Fully Electronic Smart Series™ kits allow the customer to Retrofit an original classic Ford, GM, Mopar to full air-conditioning, easily and professionally on their own."
                description3="Classic Auto Air customers are those that want to have a/c in their vehicle easily and quickly. These customers want their vehicle to have a stock look and feel with modern comforts in a/c."
                description4=""
              />
              <Company
                url="https://driveshaftshop.com/"
                name="The Driveshaft Shop"
                description1="For 30+ years The Driveshaft Shop has been creating and manufacturing innovative drivetrain solutions for street and racing use. Driveshaft Shop axles and driveshafts have been integral in helping racers set and reset world records in categories of Front Wheel Drive, Rear Wheel Drive, and All Wheel Drive racing."
                description2="The Driveshaft Shop is a full CNC machine shop and manufacturing facility located in Salisbury, North Carolina, USA."
                description3=""
                description4=""
              />
              <Company
                url="https://www.originalair.com/"
                name="Original Air"
                description1="Located in Florida and founded in 1977 Original Air is a full-service classic car air conditioning company. Original Air restores classic air conditioning systems with the same expertise and passion as always, they also offer parts and compressor and condenser conversion kits."
                description2="Original Air restores a/c systems to their original glory. They are artist in their abilities to do so. Taking a once unusable system to a fully functional and high performing system. Original Air offers America’s most extensive in-house restoration and duplicating department, repairing, and restoring air conditioning parts and systems."
                description3="Original Air customer are those that want to keep everything original in their classic /vintage vehicle."
                description4=""
              />
              <Company
                url="https://www.mpbrakes.com/"
                name="Master Power Brakes"
                description1="Located in North Carolina and founded in 1983, Master Power Brakes is the leader in model specific brake kits for classic cars."
                description2="What sets Master Power Brakes apart is their focus on model specific kits. Each of their kits are engineered for specific models and designed to be as 'bolt-on' and easy to install."
                description3="Master Power Brakes work with a variety of businesses, including race car, street rod, antique, classic, and muscle car markets."
                description4="Master Power Brakes customers are those that want to have a simple bolt in kit for their classic vehicle."
              />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
