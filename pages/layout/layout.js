import React from 'react'
import styles from '../../styles/layout.module.css'
import RandomBackground from './RandomBackground'

export default function Layout({ children }) {
    return (
        <div className=' flex h-screen bg-blue-400'>
            <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2'>
                <div className={styles.imgStyle}>
                   <RandomBackground/>
                </div>
                <div className='right flex flex-col justify-evenly bg-slate-50 '>
                    <div className='text-center py-10'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}
