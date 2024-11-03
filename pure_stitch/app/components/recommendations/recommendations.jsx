'use client'
import { products } from '@/app/api/common/common'
import React, { useState ,useEffect } from 'react'
import RecommendationsComponent from './recommendations_component'

const recommendations = () => {
    const [data,setdata] = useState([])
    const fetch=async()=>{
      const data  = await products()
      setdata(data.data)
    }
    
    useEffect(()=>{
      fetch()
    },[])
  return (
    data.map((data)=>(
        <RecommendationsComponent data={data}/>
    ))
  )
}

export default recommendations