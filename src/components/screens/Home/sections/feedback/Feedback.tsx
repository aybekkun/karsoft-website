import Container from "../../../../ui/container/Container"
import H2 from "../../../../ui/heading/H2"
import H3 from "../../../../ui/heading/H3"

import styles from "./Feedback.module.scss"
import MySlider from "./slider/MySlider"

const Feedback = () => {
  return (
    <section id="feedback" className={styles.root}>
      <Container className={styles.wrap}>
        <H3>Feedback</H3>
        <H2>Biz haqimizda nima deyishadi</H2>
        <MySlider />
      </Container>
    </section>
  )
}
export default Feedback
