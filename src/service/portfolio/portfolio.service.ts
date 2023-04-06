import axios from "axios"

import { IPortfolioCategories, IPortfolioItem } from "./portfolio.interface"

export const PortfolioSerivce = {
  async getCategory() {
    const { data } = await axios.get<string[]>("https://fakestoreapi.com/products/categories")
    return data
  },
  async getByCategory(category: string) {
    const { data } = await axios.get<IPortfolioItem[]>(`https://fakestoreapi.com/products/category/${category}`)
    return data
  },
  async getById(id: string | number) {
    const { data } = await axios.get<IPortfolioItem>(`https://fakestoreapi.com/products/${id}`)
    return data
  },
}
