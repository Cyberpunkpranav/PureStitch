'use client'
import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Trail from '@/app/components/trail/trail';

const Arrivals = ({data,type_name}) => {
  const arrivalsRef  = useRef(null)
  const [activeIndex,setactiveIndex]=useState(0)
  const [indexes,setindexes] = useState([0])
  const toleft=()=>{
    if(activeIndex!=0){
      setactiveIndex(activeIndex-1)
        const updatedArray = indexes.filter(num => num !== activeIndex && num !== activeIndex-1);
        setindexes(updatedArray)
        setTimeout(()=>{
          setindexes([0])
        },1000)
    }else{
    }
  }
    const toright=()=>{
      setactiveIndex(activeIndex+1)
      if(indexes.includes(activeIndex+1)){
        return 0
      }else{
        setindexes(prevstate=>[...prevstate,activeIndex+1])
      }
    }
    console.log(indexes);
    
  return (  
    <div className={`${styles['new-arrival']} bg-gradient${Math.floor(Math.random() * 4)}`}>
      <div onClick={()=>toleft()} className={styles.toleft}></div>
      <div onClick={()=>toright()} className={styles.toright}></div>
            <h4 className='text-white font-semibold '>{type_name.toUpperCase()}</h4>
            <Link href='/'>
            <Image width={100} height={100} className={`${styles.close} icon`} src="/icons/cross.avif" alt="" />
            </Link>
            <Trail indexes={indexes} activeIndex={activeIndex} count={data.length}/>
            <div ref={arrivalsRef} className={styles['arrivals']}>
              {
                data.map((data,i)=>(
                  activeIndex==i&&
                  <Image className={styles['arrival-images']} unoptimized={true} height={100} width={100} src={`${process.env.ARRIVAL_POST_MEDIA}?width=${data.original_width}&height=${data.original_height}&image=${data.file}&category=${`t-shirts`}&quality=${100}&format=${data.format}`}/>
                ))
              }
             </div>

    </div>
  )
}

export default Arrivals