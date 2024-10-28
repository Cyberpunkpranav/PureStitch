'use client'
import React, { useEffect, useState } from 'react'
import { product_types } from '@/app/api/common/common'
import New_Arrival_component from './new_arrival_component'

const NewArrivals = () => {
  const [data,setdata] = useState(null)
  const fetch=async()=>{
    const data  = await product_types()
    setdata(data.data)
  }
  console.log(data);
  
  useEffect(()=>{
    fetch()
  },[])
  return (
    data&&data.map((Data)=>(
      <New_Arrival_component data={Data}/>
    ))
  )
}

export default NewArrivals