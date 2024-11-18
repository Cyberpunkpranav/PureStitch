import React from 'react'
import Arrivals from './client'
import { Get } from '@/app/api/methods'

const arrivals = async(product_type_id) => {
  const data = await Get(`/api/arrivals/list?product_type_id=${product_type_id}`,'no-store')
  return data
}
const page = async({params,searchParams}) => {

    const data = await arrivals(searchParams.product_type_id)
    
  return (
    <div>
        <Arrivals data={data.data} type_name={params.type_name}/>
    </div>
  )
}

export default page