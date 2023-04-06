import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

  disabled?: boolean
  text?: string
}
