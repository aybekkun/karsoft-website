//@ts-ignore
import Fade from "react-reveal/Fade"

import MyStartButton from "../../../../ui/button/MyStartButton"
import Container from "../../../../ui/container/Container"
import H2 from "../../../../ui/heading/H2"
import H3 from "../../../../ui/heading/H3"
import P from "../../../../ui/heading/P"

import styles from "./About.module.scss"
import aboutImg from "./about.jpg"

const About = () => {
  return (
    <section id="about" className={styles.root}>
      <Container className={styles.wrap}>
        <Fade left cascade>
          <div className={styles.left}>
            <H3 mb={1}>BIZ HAQIMIZDA</H3>
            <H2 mb={2}>Zamonaviy axborot texnologiyalar biznesingizni rivojlantiradi !</H2>
            <P mb={3}>
              Morbi nibh adipiscing malesuada pharetra sodales est. Rhoncus sollicitudin et etiam a. Vitae ullamcorper
              sit magnis orci pellentesque ipsum tellus. Tempus sed id lectus lacus, integer purus, amet pulvinar
              vitae...
            </P>
            <MyStartButton />
          </div>
        </Fade>
        <div className={styles.right}>
          <Fade right>
            <img className={styles.img} src={aboutImg} alt="Team" width={510} draggable={false} height={460} />
          </Fade>
        </div>
      </Container>
    </section>
  )
}
export default About
