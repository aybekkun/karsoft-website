//@ts-ignore
import Fade from "react-reveal/Fade"

import MyStartButton from "../../../../ui/button/MyStartButton"
import Container from "../../../../ui/container/Container"
import H2 from "../../../../ui/heading/H2"
import H3 from "../../../../ui/heading/H3"

import styles from "./About.module.scss"
import teamImg from "./team.jpg"

const Vakans = () => {
  return (
    <section id="vakans" className={styles.root}>
      <Container className={styles.wrap}>
        <Fade left cascade>
          <div className={styles.left}>
            <H3 mb={1}>Vakansiya</H3>
            <H2 mb={2}>Siz ham bizning jamoamizning tarkibida bo’lishingiz mumkin</H2>
            <ul>
              <li>Frontend developer</li>
              <li>Backend developer</li>
              <li>Python developer</li>
              <li>UX/UI dizayner</li>
              <li>Marketolog</li>
              <li>Grafik dizayner</li>
            </ul>
            <MyStartButton />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.right}>
            <img className={styles.img} src={teamImg} alt="Team" />
          </div>
        </Fade>
      </Container>
    </section>
  )
}
export default Vakans
