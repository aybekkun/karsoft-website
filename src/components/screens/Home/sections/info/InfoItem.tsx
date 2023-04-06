import { useEffect, useState } from "react"

import styles from "./Info.module.scss"

type InfoItemProps = {
  text: string
  count: number
}
const InfoItem = ({ text, count }: InfoItemProps) => {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    if (number < count) {
      setTimeout(() => {
        setNumber((prev) => prev + 1)
      }, 50)
    }
  }, [number])
  return (
    <div className={styles.item}>
      <h4 className={styles.top}>{number}+</h4>
      <p>{text}</p>
    </div>
  )
}
export default InfoItem
