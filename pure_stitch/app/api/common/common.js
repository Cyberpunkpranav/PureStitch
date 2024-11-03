import { Get } from "../methods";

export const products = async() => {
    const data = await Get(`/api/products/list`,'no-store')
    return data
} 
export const product_types = async() => {
    const data = await Get(`/api/products/types/list`,'no-store')
    return data
}   