import React from 'react'
import styles from './updates.module.scss'
import Image from 'next/image'

const Updates = ({title,image}) => {
  return (
    <div className={styles['updates-wrapper']}>
    <div className={styles['updates-new']}>
    <div className={styles.updates}>
      <Image width={100} height={100} src={`/images/${image}`}/>
    </div>
   </div>
   <small>{title}</small>
    </div>
  )
}

export default Updates