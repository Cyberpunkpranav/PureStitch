import Image from 'next/image'
import React from 'react'
import styles from './recommendations.module.scss'

const RecommendationsComponent = ({data}) => {
  // const AutoImage = () => {

  //   if ("connection" in navigator) {
  //     console.log(navigator.connection);
      
  //     switch (true) {
  //       case navigator.connection.downlink < 1:
  //         return [150, 150,50]
  //         break;
  //       case navigator.connection.downlink < 2:
  //         return [240, 240,60]
  //         break;
  //       case navigator.connection.downlink < 5:
  //         return [480, 480,60]
  //         break; 
  //       case navigator.connection.downlink < 7:
  //         return [720, 720,70]
  //         break;
  //       case navigator.connection.downlink < 10:
  //         return [1920, 1080,80]
  //         break;
  //       case navigator.connection.downlink >10:
  //         return [2560, 1440,90]
  //         break;
  //       default:
  //         return [720, 720,80]
  //     }
  //   }
  //   return [720, 720,80];
  // }
  const AutoImage=()=>{

    return [150,150,70]
  }
  // console.log(navigator.connection.rtt);
  const[width,height,quality] = AutoImage()
  return (
    <div className={styles['post-wrapper']}>
        <div className={styles.post}>
            <div className={styles['post-info']}>
            <h4 className='font-bold'>{data.product_name}</h4>
            </div>
            {
              data.media.map((media)=>(
                <img className={styles.media} src={`${process.env.POST_MEDIA_URL}?width=${width}&height=${height}&format=png&quality=${quality}&category=${media.category}&image=${media.file}`}/>
              ))
            }
            <div className={styles['post-info']}>
            <p className='font-normal'>{data.product_description}</p>
            </div>
        </div>
        <div className={styles['post-actions']}>
        <Image className='icon' width={100} height={100} src='/icons/wishlist.svg'/>
        <Image className='icon' width={100} height={100} src='/icons/add to cart.svg'/>
        </div>
    </div>
  )
}

export default RecommendationsComponent
