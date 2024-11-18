'use client'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';

const Arrivals = ({data,type_name}) => {
  console.log(data);
  
  return (  
    <div className={styles['new-arrival']}>
        {
          data.map((Data)=>(
            <div className={styles['arrivals']}>
            <div className={styles['product-name']}>{Data.product.product_name}</div>
            <div className={styles['arrival-images']}>
            {
            Data.product.media.map((media)=>(
              <Image unoptimized={true} className={styles.image} height={100} width={100} src={`${process.env.POST_MEDIA_URL}?width=${media.original_width}&height=${media.original_height}&image=${media.file}&category=${media.category}&quality=${100}&format=${media.format}`}/>
            ))
            }
            </div>
            </div>
          ))
          
        }
    </div>
  )
}

export default Arrivals