'use client'
import { search,videos } from '../data'
import styles from './search.module.scss'
import Image from 'next/image'

const page = () => {
  return (
    <section className=''>
    <div className={styles['search-container']}>
       <div className={styles['box-1']}>

        {
            search.map((data,i)=>(
                <div className={styles['item']}>
                <Image width={100} height={100} src={`/images/${data.image}`}/>
                </div>
            ))
        }
       </div>
       <div className={styles['box-2']}>
        {
            videos.map((data)=>(
                <div className={styles['item']}>
                <video  muted className={styles['item']} width={100} height={100} src={`/videos/${data.video}`}/>
                </div>
            ))
        }
       </div>
       <div className={styles['box-1']}>

{
    search.map((data,i)=>(
        <div className={styles['item']}>
        <Image width={100} height={100} src={`/images/${data.image}`}/>
        </div>
    ))
}
        </div>
        <div className={styles['box-2']}>
        {
            videos.map((data)=>(
                <div className={styles['item']}>
                <video  muted className={styles['item']} width={100} height={100} src={`/videos/${data.video}`}/>
                </div>
            ))
        }
       </div>
        <div className={styles['box-1']}>

{
    search.map((data,i)=>(
        <div className={styles['item']}>
        <Image width={100} height={100} src={`/images/${data.image}`}/>
        </div>
    ))
}
        </div>
        <div className={styles['box-2']}>
        {
            videos.map((data)=>(
                <div className={styles['item']}>
                <video  muted className={styles['item']} width={100} height={100} src={`/videos/${data.video}`}/>
                </div>
            ))
        }
       </div>
       <div className={styles['box-1']}>

{
    search.map((data,i)=>(
        <div className={styles['item']}>
        <Image width={100} height={100} src={`/images/${data.image}`}/>
        </div>
    ))
}
        </div>
       <div className={styles['box-2']}>
        {
            videos.map((data)=>(
                <div className={styles['item']}>
                <video  muted className={styles['item']} width={100} height={100} src={`/videos/${data.video}`}/>
                </div>
            ))
        }
       </div>
     
    </div>
    </section>
  )
}

export default page