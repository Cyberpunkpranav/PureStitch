'use client'
import { products } from '@/app/api/common/common'
import React, { useState ,useEffect ,useRef} from 'react'
import styles from './recommendations.module.scss'
import Image from 'next/image'
import { capitalize } from '@/app/utils/functions'

const recommendations = () => {
    const [data,setData] = useState([])
    const [quality, setQuality] = useState(80)
    const [Height, setHeight] = useState(null)
    const [Width, setWidth] = useState(null)
    const loadedImages = useRef(new Set())
    const observerRef = useRef(null)

    const ReduceRes = (original_height,original_width)=>{
      let reduced_width = Math.round(window.innerWidth)
      let width_ratio = Math.round(original_width/reduced_width) 
      let reduced_height = Math.round(original_height/width_ratio)
    
    return [reduced_height,reduced_width]
      
} 
    const fetch=async()=>{
      const data  = await products()
      let Data =  data.data      
      for(let i=0;i<Data.length;i++){
        for(let j=0;j<Data[i].media.length;j++){
          Data[i].media[j].reduced_height = ReduceRes(Data[i].media[j].original_height,Data[i].media[j].original_width)[0]
          Data[i].media[j].reduced_width = ReduceRes(Data[i].media[j].original_height,Data[i].media[j].original_width)[1]
        }
      }
      setData(Data)
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
                  reduced_height: null,
                  reduced_width:null,
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
  return (
    data.map((data,index)=>(
      <div className={styles['post-wrapper']}>
      <div className={styles.post}>
      <div className={styles['post-info']}>
        <div className="flex items-center justify-between">
        <div>
        <h6 className='font-bold'>{capitalize(data.product_name)}</h6>
        <h6 className='font-light'>{data.media[0].category}</h6>
        </div>
        <h6 className='inline-block font-light'>{data.gender ? <img src='/icons/male.svg'/>:<></>}</h6>
        </div>
      </div>
          <div className={styles.media} id={`media_${data.id}`}>
         {
            data.media.map((media,i)=>(
              <img id={`media_${index}_${i}`} onClick={()=>ReduceRes(media.original_height,media.original_width)}  src={`${process.env.POST_MEDIA_URL}?width=${media.reduced_width!=null?media.reduced_width:media.original_width}&height=${media.reduced_height!=null?media.reduced_height:media.original_height}&format=${media.format}&quality=${media.quality&&media.quality!=0?media.quality:quality}&category=${media.category}&image=${media.file}`}/>
            ))
          }
          </div>
          <div className={styles['post-actions']}>
          <Image className='icon' width={100} height={100} src='/icons/wishlist.svg'/>
          <Image className='icon' width={100} height={100} src='/icons/add to cart.svg'/>
          </div>
          <div className={styles['post-info']}>
          <p className=''>{data.product_description}</p>
          </div>
      </div>
  </div>
    ))
  )
}

export default recommendations