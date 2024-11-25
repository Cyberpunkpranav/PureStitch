import Image from 'next/image'
import React from 'react'
import styles from './bottombar.module.scss'
import Link from 'next/link'

const Bottombar = () => {
  return (
    <div className={styles.bottombar}>
        <Link href='/'><Image className='icon' height={100} width={100} src='/icons/home.avif'/></Link>
        <Link href='/search'><Image className='icon' height={100} width={100} src='/icons/search.avif'/></Link>
        <Link href='/shuffle'><Image className='icon' height={100} width={100} src='/icons/shuffle.avif'/></Link>
        <Link href='/cart'><Image className='icon' height={100} width={100} src='/icons/cart.avif'/></Link>
        <Link href='/user' ><Image className='icon' style={{borderRadius:"50%"}} height={100} width={100} src='/images/profile.png'/></Link>
    </div>
  )
}

export default Bottombar