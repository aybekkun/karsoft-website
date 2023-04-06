import { configureStore } from "@reduxjs/toolkit"

import portfolio from "./portfolio/portfolio.slice"
import user from "./user/user.slice"

const store = configureStore({
  reducer: {
    user,
    portfolio,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
