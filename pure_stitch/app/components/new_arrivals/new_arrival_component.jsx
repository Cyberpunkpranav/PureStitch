import React from 'react'
import styles from './new_arrivals.module.scss'
import Image from 'next/image'

const New_Arrival_component = ({data}) => {
  return (
    <div className={styles['updates-wrapper']}>
    <div className={styles['updates-new']}>
    <div className={styles.updates}>
      {
        data&&data.image?      
        <Image width={100} height={100} src={`/images/${data.image}`}/>
          :<></>
      }
    </div>
   </div>
   <small>{data&&data.type_name}</small>
    </div>
  )
}

export default New_Arrival_component