import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10'>

                <div className="title">
                    <h1 className='text-grey-800 text-4xl font-bold py-4'>Explore</h1>
                    <p className='w-5/6 mx-auto text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, molestias?</p>
                </div>

                <form className='flex flex-col gap-5'>
                    <div className="input-group">
                        <input type="email" name='email' placeholder='john.doe@gmail.com' />
                    </div>
                    <div className="input-group">
                        <input type="password" name='password' placeholder='password' />
                    </div>
                    <div className="input-button">
                        <button type="submit">Login</button>
                    </div>
                    <div className="input-button">
                        <button type="submit">Sign In with Google</button>
                    </div>
                    <div className="input-button">
                        <button type="submit">Sign In with Github</button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}
