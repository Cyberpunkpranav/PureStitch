'use client'
import React, { useEffect, useRef, useState } from 'react'
import { product_types } from '@/app/api/common/common'
import styles from './new_arrivals.module.scss'

const NewArrivals = () => {
  const [data, setData] = useState([])
  const [quality, setQuality] = useState(70)
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const loadedImages = useRef(new Set()) // Track loaded images to prevent multiple reloads
  const observerRef = useRef(null) // Reference to the observer instance

  // Fetch data
  const fetchData = async () => {
    const response = await product_types()
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const container = document.getElementById(data[0].type_name)
      if (container) {
        const { height, width } = container.getBoundingClientRect()
        setHeight(height)
        setWidth(width)
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
          
          if (entry.isIntersecting) {
            const index = data.findIndex(item => `${item.type_name}_image` === entry.target.id)
            
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
      const imageElement = document.getElementById(`${item.type_name}_image`)
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
  }, [data]) // Include height and width to handle resizing

  return (
    data && data.map((item, i) => (
      <div key={i} className={styles['arrivals-wrapper']}>
        <div className={styles['arrivals-new']}>
          <div id={item.type_name} className={styles.arrivals}>
            {
              height !== null && width !== null
                ? 
                <img
                  id={item.type_name + "_image"}
                  alt='image'
                  style={{ height: '100%' }}
                  src={item.image_url ? item.image_url : `${process.env.NEW_ARRIVALS_BG_URL}?width=${width}&height=${height}&format=png&quality=${quality}&image=${item.image}`}
                />
                : null
            }
          </div>
        </div>
        <small>{item && item.type_name}</small>
      </div>
    ))
  )
}

export default NewArrivals
