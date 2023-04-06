import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

import MainLayout from "./components/layout/MainLayout/MainLayout"
import Home from "./components/screens/Home/Home"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
