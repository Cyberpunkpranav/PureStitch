'use client'
import { products } from '@/app/api/common/common'
import React, { useState ,useEffect ,useRef} from 'react'
import styles from './recommendations.module.scss'
import Image from 'next/image'

const recommendations = () => {
    const [data,setData] = useState([])
    const [quality, setQuality] = useState(70)
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const loadedImages = useRef(new Set()) // Track loaded images to prevent multiple reloads
    const observerRef = useRef(null) // Reference to the observer instance
    const fetch=async()=>{
      const data  = await products()
      setData(data.data)
    }
    
    useEffect(()=>{
      fetch()
    },[])

    useEffect(() => {
      if (data.length > 0) {
       console.log(data[0].id);
        
        const container = document.getElementById(`media_0_0`)
        console.log(container);
        
        if (container) {
          const { height, width } = container.getBoundingClientRect()
          console.log(height,width);
          
          setHeight(height/6)
          setWidth(width/6)
        }
      }
    }, [data])
  
    const onLoadImage = (index) => {
      if (!loadedImages.current.has(index)) {
        setData((prevData) => {
          const updatedData = prevData.map((item, i) =>
            index === i
              ? { ...item, image_url: `${process.env.NEW_ARRIVALS_BG_URL}?width=${width * 2}&height=${height * 2}&format=png&quality=100&image=${item.image}` }
              : item
          )
          return updatedData
        })
        loadedImages.current.add(index) // Mark image as loaded
      }
    }
  
    // Initialize observer
    useEffect(() => {
      if (observerRef.current) {
        observerRef.current.disconnect() // Disconnect any previous observer
      }
  
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry);
            
            if (entry.isIntersecting) {
              const index = data.findIndex(item => `media_${item.id}` === entry.target.id)
              
              if (index !== -1 && !loadedImages.current.has(index)) {
                onLoadImage(index)
                if (observerRef.current) {
                  observerRef.current.unobserve(entry.target) // Stop observing after loading
                }
              }
            }
          })
        },
        {
          root: null, // viewport
          threshold: 0.1, // Trigger when 10% of the image is visible
        }
      )
  
      // Observe each image element
      data.forEach((item) => {
        const imageElement = document.getElementById(`media_${item.id}`)
        if (imageElement && observerRef.current) {
          observerRef.current.observe(imageElement)
        }
      })
  
      // Cleanup observer when component unmounts
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    }, [data]) 
    console.log(data);
    
  return (
    data.map((data,index)=>(
      <div className={styles['post-wrapper']}>
      <div className={styles.post}>
          <div className={styles['post-info']}>
          <h4 className='font-bold'>{data.product_name}</h4>
          </div>
          <div id={`media_${data.id}`}>
          {
            data.media.map((media,i)=>(
              <img id={`media_${index}_${i}`} className={styles.media} src={`${process.env.POST_MEDIA_URL}?width=${width}&height=${height}&format=png&quality=${quality}&category=${media.category}&image=${media.file}`}/>
            ))
          }
          </div>
          <div className={styles['post-info']}>
          <p className='font-normal'>{data.product_description}</p>
          </div>
      </div>
      <div className={styles['post-actions']}>
      <Image className='icon' width={100} height={100} src='/icons/wishlist.svg'/>
      <Image className='icon' width={100} height={100} src='/icons/add to cart.svg'/>
      </div>
  </div>
    ))
  )
}

export default recommendations