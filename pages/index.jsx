import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth Ecomm</title>
      </Head>
      <Guest/>
    </div>
  )
}

// Guest
function Guest(){
  return(
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>
      <div className='flex justify-center'>
        <Link href={'/login'} legacyBehavior passHref><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500'>Sign In</a></Link>
      </div>
    </main>
  )
}

// Authorized User

function User(){
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>Authorized User Homepage</h3>

       <div className='details'>
        <h5>Unknown</h5>
        <h5>Unknown</h5>
       </div>

       <div className="flex justify-center">
        <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-grey-50'>Sign Out</button>
       </div>

      <div className='flex justify-center'>
        <Link href={'/profile'}><a href="Sign In" className='mt-5 px-10 py-1 rounded-sm bg-indigo-500'></a>Profile Page</Link>
      </div>
    </main>
  )
}