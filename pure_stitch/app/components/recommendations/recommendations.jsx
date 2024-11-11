'use client'
import { products } from '@/app/api/common/common'
import React, { useState ,useEffect ,useRef} from 'react'
import styles from './recommendations.module.scss'
import Image from 'next/image'

const recommendations = () => {
    const [data,setData] = useState([])
    const [quality, setQuality] = useState(80)
    const [Height, setHeight] = useState(null)
    const [Width, setWidth] = useState(null)
    const loadedImages = useRef(new Set()) // Track loaded images to prevent multiple reloads
    const observerRef = useRef(null) // Reference to the observer instance
    
    const fetch=async()=>{
      const data  = await products()
      setData(data.data)
    }
    
    useEffect(()=>{
      fetch()
    },[])

    // useEffect(() => {
    //   if (data.length > 0) {
        
    //     const container = document.getElementById(`media_${data[0].id}`)
        
    //     if (container) {
    //       const { height, width } = container.getBoundingClientRect()          
    //       setHeight(height/6)
    //       setWidth(width/6)
    //     }
    //   }
    // }, [data])
  
    const onLoadImage = (index) => {
      if (!loadedImages.current.has(index)) {
        setData((prevData) => {
          const updatedData = prevData.map((item, i) =>
            index === i
              ?  { 
                ...item, 
                media: item.media.map((mediaItem) => ({
                  ...mediaItem,
                  height: Height*10,
                  width: Width*10,
                  quality:100
                }))
              }
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
            
            if (entry.isIntersecting) {
              console.log(entry.target.id);
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
        <div className="flex items-center py-2">
        <img className='icon-mid px-1' src='/images/adidas.png'/>
        <h6 className='font-semibold'>Adidas</h6>
        </div>
        
          <div className={styles.media} id={`media_${data.id}`}>
          {
            Height !=null && Width!=null?
            data.media.map((media,i)=>(
              <img id={`media_${index}_${i}`}  src={`${process.env.POST_MEDIA_URL}?width=${media.width&&media.width!=0?media.width:media.original_width/10}&height=${media.height&&media.height!=0?media.height:media.original_height/10}&format=${media.format}&quality=${media.quality&&media.quality!=0?media.quality:quality}&category=${media.category}&image=${media.file}`}/>
            ))
            :<></>
          }
          </div>
          <div className={styles['post-actions']}>
          <Image className='icon' width={100} height={100} src='/icons/wishlist.svg'/>
          <Image className='icon' width={100} height={100} src='/icons/add to cart.svg'/>
          </div>
          <div className={styles['post-info']}>
          <h6 className=''>{data.product_name}</h6>
          <p className=''>{data.product_description}</p>
          </div>
      </div>
  </div>
    ))
  )
}

export default recommendations