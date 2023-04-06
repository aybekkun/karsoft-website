import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { PortfolioState } from "./portfolio.interface"

const initialState: PortfolioState = {
  categories: [],
}

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setCategories(state, { payload }: PayloadAction<string[]>) {
      state.categories = payload
    },
  },
})
export const { setCategories } = portfolioSlice.actions
export default portfolioSlice.reducer
