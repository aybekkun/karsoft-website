//@ts-ignore
import Fade from "react-reveal/Fade"

import MyStartButton from "../../../../ui/button/MyStartButton"
import Container from "../../../../ui/container/Container"
import H2 from "../../../../ui/heading/H2"
import H3 from "../../../../ui/heading/H3"
import P from "../../../../ui/heading/P"

import styles from "./Service.module.scss"
import ServiceItems from "./serviceItems/ServiceItems"

const Service = () => {
  return (
    <section id="service" className={styles.root}>
      <Container className={styles.wrap}>
        <div className={styles.left}>
          <ServiceItems />
        </div>
        <div className={styles.right}>
          <Fade right cascade>
            <H3 mb={1}>XIZMATLARIMIZ</H3>
            <H2 mb={2}>Bizning xizmatlarimiz O’z ichiga oladi.</H2>
            <P mb={3}>
              Morbi nibh adipiscing malesuada pharetra sodales est. Rhoncus sollicitudin et etiam a. Vitae ullamcorper
              sit magnis orci pellentesque ipsum tellus. Tempus sed id lectus lacus, integer purus, amet pulvinar
              vitae...
            </P>
          </Fade>
          <MyStartButton />
        </div>
      </Container>
    </section>
  )
}
export default Service
