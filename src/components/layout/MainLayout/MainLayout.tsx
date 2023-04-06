import { FC } from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
