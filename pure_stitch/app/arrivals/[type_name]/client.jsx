'use client'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Trail from '@/app/components/trail/trail';

const Arrivals = ({data,type_name}) => {
  console.log(data);
  
  return (  
    <div className={`${styles['new-arrival']} bg-gradient${Math.floor(Math.random() * 4)}`}>
            <h4 className='text-white font-semibold '>{type_name.toUpperCase()}</h4>
            <Link href='/'>
            <Image width={100} height={100} className={`${styles.close} icon`} src="/icons/cross.svg" alt="" />
            </Link>
            <Trail count={data.length}/>
              {
                data.map((data)=>(
                  <div className={styles['arrivals']}>
                  <Image className={styles['arrival-images']} unoptimized={true} height={100} width={100} src={`${process.env.ARRIVAL_POST_MEDIA}?width=${data.original_width}&height=${data.original_height}&image=${data.file}&category=${`t-shirts`}&quality=${100}&format=${data.format}`}/>
                  </div>
                ))
              }
    </div>
  )
}

export default Arrivals