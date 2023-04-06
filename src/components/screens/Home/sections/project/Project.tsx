//@ts-ignore
import Fade from "react-reveal/Fade"

import MyStartButton from "../../../../ui/button/MyStartButton"
import Container from "../../../../ui/container/Container"

import styles from "./Project.module.scss"

const Project = () => {
  return (
    <section className={styles.root}>
      <Container>
        <Fade top cascade>
          <h2>Sizda biron bir loyihangiz bormi ?</h2>
          <h3>Uni professionallar ishoning!</h3>
          <MyStartButton className={styles.button} />
        </Fade>
      </Container>
    </section>
  )
}
export default Project
