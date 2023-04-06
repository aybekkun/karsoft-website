import { FC } from "react"

import H2 from "../../ui/heading/H2"
import Logo from "../../ui/logo/Logo"

import About from "./sections/about/About"
import Vakans from "./sections/about/Vakans"
import Feedback from "./sections/feedback/Feedback"
import Hero from "./sections/hero/Hero"
import Info from "./sections/info/Info"
import Project from "./sections/project/Project"
import Service from "./sections/service/Service"
import Portfolio from "./sections/portfolio/Portfolio"

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Info />
      <About />
      <Service />
      <Portfolio/>
      <Feedback />
      <Vakans />
      <Project />
    </>
  )
}

export default Home
