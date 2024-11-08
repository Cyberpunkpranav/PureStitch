import Image from 'next/image'
import React from 'react'
import styles from './bottombar.module.scss'
import Link from 'next/link'

const Bottombar = () => {
  return (
    <div className={styles.bottombar}>
        <Link href='/'><Image className='icon' height={100} width={100} src='/icons/home.svg'/></Link>
        <Link href='/search'><Image className='icon' height={100} width={100} src='/icons/search.svg'/></Link>
        <Image className='icon' height={100} width={100} src='/icons/shuffle.svg'/>
        <Image className='icon' height={100} width={100} src='/icons/cart.svg'/>
        <Link href='/user'><Image className='icon rounded-full' height={100} width={100} src='/images/profile.png'/></Link>
    </div>
  )
}

export default Bottombar