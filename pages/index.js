import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.navbar}>
          <img src="/ndc_logo.svg" alt="NDC Logo" className={styles.logo} />
          <div className={styles.navigation}>
          <Link href="/posts/first-post"><a>Våra tjänster</a></Link>
          <Link href="/posts/first-post"><a>Om oss</a></Link>
          <Link href="/posts/first-post"><a>Kontakta oss</a></Link>
          </div>
        </div>



      <main className={styles.main}>
      <div className={styles.hero}>
      <div className={styles.desc}>
        <h1 className={styles.title}>
        Fastighetsautomation för smarta hus
        </h1>
        <p className={styles.description}>Vi optimerar inomhusklimat för komfort och lägre energiförbrukning i Stockholmsområdet.</p>
        <button>Kontakta oss</button> 
</div>

        <img src="/modern-white-building-with-big-windows.jpg" alt="Building" className={styles.img} />
</div>
      
      </main>
   
<div className={styles.services}>
<h2 className={styles.title}>
        Vi erbjuder installation av system för mätning, loggning, analys, och styrning av ventilation.
        </h2>

        <div className={styles.grid}>
        <div className={styles.card}><h3>🔧</h3><h4>Styrinstallation</h4>Vi utför uppdrag från utredning till installation av PLC-system.</div>
        <div className={styles.card}><h3>📐</h3><h4>Konstruktion</h4>Vi utför projektering och konstruktion av energibesparande och funktionella styrsystem.</div>
        <div className={styles.card}><h3>💻</h3><h4>Programmering</h4>Vi är experter på PLC programmerbara styrsystem.</div>
</div></div>



  


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        <a href="dan.noren@ndcautomation.sem">dan.noren@ndcautomation.se</a>

        </a>
      </footer>
    </div>
  )
}
