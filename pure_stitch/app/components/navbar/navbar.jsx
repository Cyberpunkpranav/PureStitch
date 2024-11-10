import React from 'react'
import styles from './navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Image unoptimized={true} className="logo" height={100} width={100} src='/images/logo.svg'/>
    <Image height={100} width={100} className="icon" unoptimized={true} src='/icons/wishlist.svg'/>
    </div>
  )
}

export default Navbar