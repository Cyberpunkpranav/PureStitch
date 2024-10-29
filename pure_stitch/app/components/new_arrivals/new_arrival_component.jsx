import React from 'react'
import styles from './new_arrivals.module.scss'
import Image from 'next/image'

const New_Arrival_component = ({data}) => {
  
  return (
    <div className={styles['arrivals-wrapper']}>
    <div className={styles['arrivals-new']}>
    <div className={styles.arrivals}>
    <Image width={100} height={100} src={`${process.env.ASSET_URL}/${data.image}`}/>
    </div>
   </div>
   <small>{data&&data.type_name}</small>
    </div>
  )
}

export default New_Arrival_component