//@ts-ignore
import Rotate from "react-reveal/Rotate"

import MarketIcon from "../icons/MarketIcon"
import PhoneIcon from "../icons/PhoneIcon"
import SettingIcon from "../icons/SettingIcon"
import UiIcon from "../icons/UiIcon"

import styles from "./Item.module.scss"

type ItemProps = {
  icon: "setting" | "ui" | "phone" | "market"
  children?: React.ReactNode
}

const Item = ({ icon, children }: ItemProps) => {
  const IconComponent =
    icon === "setting" ? SettingIcon : icon === "ui" ? UiIcon : icon === "phone" ? PhoneIcon : MarketIcon

  return (
    <Rotate top left>
      <div className={styles.item}>
        <span>
          <IconComponent />
        </span>
        {children}
      </div>
    </Rotate>
  )
}
export default Item
