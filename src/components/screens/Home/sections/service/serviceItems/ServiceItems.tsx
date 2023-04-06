import H4 from "../../../../../ui/heading/H4"
import P from "../../../../../ui/heading/P"

import Item from "./Item"
import styles from "./Item.module.scss"

const ServiceItems = () => {
  return (
    <div className={styles.items}>
      <Item icon="setting">
        <H4 mb={1}>Web dasturlash</H4>
        <P>Aliquet non orci diam viverra condimentum lectus nisi sed. Dui viverra nullam orci sed.</P>
      </Item>
      <Item icon="phone">
        <H4 mb={1}>Mobil dasturlash</H4>
        <P>Aliquet non orci diam viverra condimentum lectus nisi sed. Dui viverra nullam orci sed.</P>
      </Item>
      <Item icon="ui">
        <H4 mb={1}>UX/UI dizayn</H4>
        <P>Aliquet non orci diam viverra condimentum lectus nisi sed. Dui viverra nullam orci sed.</P>
      </Item>
      <Item icon="market">
      <H4 mb={1}>Marketing </H4>
        <ul>
          <li>Website dizayn</li>
          <li>Mobil dizayn</li>
          <li>Dashboard dizayn</li>
        </ul>
      </Item>
    </div>
  )
}
export default ServiceItems
