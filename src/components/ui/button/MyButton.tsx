import cn from "classnames"
import { FC } from "react"
//@ts-ignore
import Zoom from "react-reveal/Zoom"

import styles from "./Button.module.scss"
import { IButton } from "./button.interface"

const MyButton: FC<IButton> = ({ className = " ", text = "", children, disabled = false, ...props }) => {
  return (
    <Zoom>
      <button className={cn([styles.button], className)} disabled={disabled} {...props}>
        {text}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
          fillRule="evenodd"
            clipRule="evenodd"
            d="M11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 4.30557e-07 11 9.61651e-07C4.925 1.49274e-06 -1.49274e-06 4.925 -9.61651e-07 11C-4.30557e-07 17.075 4.925 22 11 22ZM8.793 14.293C8.61084 14.4816 8.51005 14.7342 8.51233 14.9964C8.5146 15.2586 8.61977 15.5094 8.80518 15.6948C8.99059 15.8802 9.2414 15.9854 9.5036 15.9877C9.7658 15.99 10.0184 15.8892 10.207 15.707L14.207 11.707C14.3945 11.5195 14.4998 11.2652 14.4998 11C14.4998 10.7348 14.3945 10.4805 14.207 10.293L10.207 6.293C10.0184 6.11084 9.76579 6.01005 9.5036 6.01233C9.2414 6.0146 8.99059 6.11978 8.80518 6.30518C8.61977 6.49059 8.5146 6.7414 8.51232 7.0036C8.51005 7.2658 8.61084 7.5184 8.793 7.707L12.086 11L8.793 14.293Z"
            fill="white"
          />
        </svg>
      </button>
    </Zoom>
  )
}

export default MyButton
