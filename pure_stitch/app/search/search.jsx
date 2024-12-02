'use client'

import React, { useState } from 'react'
import styles from './search.module.scss'
import Bottombar from '../components/bottombar/bottombar'
import Link from 'next/link'

const Search = ({data}) => {
    const [quality,setquality] = useState(10)
    console.log(data);
    
  return (
    <section className=''>
        <div className={styles.search_section}>
            <Link href='/'>
            <img className={`icons ${styles.back}`} src='/icons/back.svg'/>
            </Link>
            <input placeholder='search your favs here...' className={styles.search_box}/>
            <img className='icons' src='/icons/wishlist.svg'/>
        </div>
    <div className={styles['search-container']}>
       <div className={styles['box-1']}>

        {
            data.map((data,i)=>(
                data.media.map((media,key)=>(
                    <div className={styles['item']}>
                    <img src={`${process.env.POST_MEDIA_URL}?width=${media.reduced_width!=null?media.reduced_width:(media.original_width)}&height=${media.reduced_height!=null?media.reduced_height:(media.original_height)}&format=${media.format}&quality=${media.quality&&media.quality!=0?media.quality:quality}&category=${media.category}&image=${media.file}`}/>
                    </div>
                ))
          
            ))
        }
        </div>
        </div>
        <Bottombar/>
    </section>
  )
}

export default Search