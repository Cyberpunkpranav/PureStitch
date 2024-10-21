import Image from 'next/image'
import React from 'react'
import styles from './recommendations.module.scss'

const Recommendations = ({data}) => {
  return (
    <div className={styles['post-wrapper']}>
        <div className={styles.post}>
            <div className={styles['post-info']}>
            <h4 className='font-bold'>{data.title}</h4>
            </div>
            <img src={`/images/${data.image}`}/>
            <div className={styles['post-info']}>
            <p className='font-normal'>{data.description}</p>
            </div>
            {/* <div>{data.sizes}</div>
            <div>{data.colors}</div> */}
        </div>
        <div className={styles['post-actions']}>
        <Image className='icon' width={100} height={100} src='/icons/wishlist.svg'/>
        <Image className='icon' width={100} height={100} src='/icons/add to cart.svg'/>
        </div>
    </div>
  )
}

export default Recommendations
