'use client'
import React, { useEffect,useRef, useState } from 'react'
import { product_types } from '@/app/api/common/common'
import styles from './new_arrivals.module.scss'

const NewArrivals = () => {
  const [data,setdata] = useState([])
  const [quality,setquality] = useState(70)
  const [Height,setHeight] = useState(null)
  const [Width,setWidth] = useState(null)


  const fetch=async()=>{
    const data  = await product_types()
    setdata(data.data)
  }
  
  useEffect(()=>{
    fetch()
  },[])
 
  useEffect(()=>{
    const container = data[0]!==undefined && document.getElementById(data[0].type_name) 
    if(container){
      const {height,width} =  container.getBoundingClientRect()
      setHeight(height)
      setWidth(width)
    }
  })
  function isInViewport(element) {
    console.log(element);
    
    const div = document.getElementById(element)
    const rect = div.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  const onLoadImage=(index)=>{
    setdata((prevData) => {
      const updatedData = prevData.map((item, i) => 
        index === i && isInViewport(item.type_name)
          ? { ...item, image_url: `${process.env.NEW_ARRIVALS_BG_URL}?width=${Width * 2}&height=${Height * 2}&format=png&quality=100&image=${item.image}` }
          : item
      );
      return updatedData;
    });
  }
  // console.log(Height,Width,data);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Image ${entry.target.id} is in viewport`);
            // setdata((item)=>{
            //   const updtedDaata = 
            // })
            // Trigger any action here, like loading higher quality images
          }
        })
      },
      {
        root: null, // viewport
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    );

    // Observe each image by ID
    data.forEach((data, i) => {
      const imageElement = document.getElementById(`${data.type_name}_image`);
      if (imageElement) {
        observer.observe(imageElement);
      }
    });

    // Cleanup observer when component unmounts
    return () => {
      data.forEach((data) => {
        const imageElement = document.getElementById(`${data.type_name}_image`);
        if (imageElement) {
          observer.unobserve(imageElement);
        }
      });
    };
  }, [data]);
  return (
    data&&data.map((data,i)=>(
      <div key={i} className={styles['arrivals-wrapper']}>
      <div className={styles['arrivals-new']}>
      <div id={data.type_name} className={styles.arrivals}>
        {
          Height !=null && Width !=null
          ? 
          <img id={data.type_name+"_image"} onLoad={()=>onLoadImage(i)} alt='image' style={{height:'100%'}} src={data.image_url?data.image_url:`${process.env.NEW_ARRIVALS_BG_URL}?width=${Width}&height=${Height}&format=png&quality=${quality}&image=${data.image}`}/>
        : <></>
        }
      </div>
     </div>
     <small>{data&&data.type_name}</small>
      </div>
    ))

  )
}

export default NewArrivals