import { products } from '@/app/api/common/common'
import Search from './search'

const page = async() => {
    const data = await products()
    
  return (
    <Search data={data.data}/>

  )
}

export default page