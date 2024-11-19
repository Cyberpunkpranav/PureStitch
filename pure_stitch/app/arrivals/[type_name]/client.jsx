'use client'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';

const Arrivals = ({data,type_name}) => {
  console.log(data);
  
  return (  
    <div className={`${styles['new-arrival']} bg-gradient${Math.floor(Math.random() * 4)}`}>
            <h4 className='text-white font-semibold '>{type_name.toUpperCase()}</h4>
            <div className={styles['arrivals']}>
              <Image className={styles['arrival-images']} unoptimized={true} height={100} width={100} src={`${process.env.ARRIVAL_POST_MEDIA}?width=${data[0].original_width}&height=${data[0].original_height}&image=${data[0].file}&category=${`t-shirts`}&quality=${100}&format=${data[0].format}`}/>
            </div>
    </div>
  )
}

export default Arrivals