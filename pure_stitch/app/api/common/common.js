import { Get } from "../methods";

export const product_types = async() => {
    const data = await Get(`/api/product/types/list`,'no-store')
    return data
}   