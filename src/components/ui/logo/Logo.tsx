import cn from "classnames"
import { Link } from "react-router-dom"

import logoBlack from "./logo-black.png"
import logoImg from "./logo-white.png"

type LogoProps = {
  className?: string
  black?: boolean
}
const Logo = ({ className = " ", black = false }: LogoProps) => {
  return (
    <Link className={className} to={"/"}>
      <img src={black ? logoBlack : logoImg} alt="Karsoft.uz" />
    </Link>
  )
}

export default Logo
