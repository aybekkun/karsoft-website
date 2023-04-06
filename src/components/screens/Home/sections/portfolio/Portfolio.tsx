import Container from "../../../../ui/container/Container"
import H2 from "../../../../ui/heading/H2"
import H3 from "../../../../ui/heading/H3"
import styles from "./Portfolio.module.scss"
import Tabs from "./tabs/Tabs"

const Portfolio = () => {
  return <section id="portfolio" className={styles.root}>
    <Container className={styles.wrap}>
        <H3 mb={1}>Portfolio</H3>
        <H2 mb={3}>Bizning ishlarimiz <br/> Galereya.</H2>
        <Tabs/>
    </Container>
  </section>
}
export default Portfolio
