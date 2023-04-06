import cn from "classnames"
import { FC } from "react"


import MyButton from "./MyButton"
import { IButton } from "./button.interface"

const MyStartButton: FC<IButton> = ({ className = " ", text = "", children, disabled = false, ...props }) => {
  return <MyButton className={className} text="Bog’lanish" disabled={disabled} {...props} />
}

export default MyStartButton
