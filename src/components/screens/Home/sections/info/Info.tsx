//@ts-ignore
import Fade from "react-reveal/Fade"

import Container from "../../../../ui/container/Container"

import styles from "./Info.module.scss"
import InfoItem from "./InfoItem"

const Info = () => {
  return (
    <Container>
      <Fade bottom cascade>
        <div className={styles.root}>
          <InfoItem count={100} text={"Mijozlarimiz"} />
          <InfoItem count={25} text={"Tugallangan ishlar"} />
          <InfoItem count={12} text={"Tajriba"} />
          <InfoItem count={65} text={"Hamkorlar"} />
        </div>
      </Fade>
    </Container>
  )
}
export default Info
