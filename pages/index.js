import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth Ecomm</title>
      </Head>
    <main className={styles.main}>
       <h1 className="text-3xl font-bold underline">
        Hello World!
       </h1>
    </main>
    </div>
  )
}
