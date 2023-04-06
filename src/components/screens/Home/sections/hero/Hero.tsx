//@ts-ignore
import Zoom from "react-reveal/Zoom"
//@ts-ignore
import Pulse from "react-reveal/Pulse"

import MyStartButton from "../../../../ui/button/MyStartButton"
import Container from "../../../../ui/container/Container"

import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
        <h1 className={styles.title}>
          <Zoom left cascade>
            Morbi nibh adipiscing malesuada pharetra sodales est.
          </Zoom>
        </h1>

        <div className={styles.buttons}>
          <MyStartButton />
          <Zoom>
            <Pulse forever duration={2000}>
              <button className={styles.button}>
                Video
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5 22.5C9.71523 22.5 7.04451 21.3938 5.07538 19.4246C3.10625 17.4555 2 14.7848 2 12C2 9.21523 3.10625 6.54451 5.07538 4.57538C7.04451 2.60625 9.71523 1.5 12.5 1.5C15.2848 1.5 17.9555 2.60625 19.9246 4.57538C21.8938 6.54451 23 9.21523 23 12C23 14.7848 21.8938 17.4555 19.9246 19.4246C17.9555 21.3938 15.2848 22.5 12.5 22.5ZM12.5 24C15.6826 24 18.7348 22.7357 20.9853 20.4853C23.2357 18.2348 24.5 15.1826 24.5 12C24.5 8.8174 23.2357 5.76516 20.9853 3.51472C18.7348 1.26428 15.6826 0 12.5 0C9.3174 0 6.26516 1.26428 4.01472 3.51472C1.76428 5.76516 0.5 8.8174 0.5 12C0.5 15.1826 1.76428 18.2348 4.01472 20.4853C6.26516 22.7357 9.3174 24 12.5 24Z"
                    fill="white"
                  />
                  <path
                    d="M9.9065 7.58248C10.0292 7.51931 10.1669 7.49121 10.3045 7.50126C10.4421 7.51132 10.5743 7.55915 10.6865 7.63948L15.9365 11.3895C16.0337 11.4589 16.113 11.5505 16.1676 11.6566C16.2223 11.7628 16.2509 11.8805 16.2509 12C16.2509 12.1194 16.2223 12.2371 16.1676 12.3433C16.113 12.4495 16.0337 12.5411 15.9365 12.6105L10.6865 16.3605C10.5743 16.4407 10.4422 16.4885 10.3047 16.4986C10.1671 16.5086 10.0295 16.4806 9.90686 16.4175C9.78422 16.3544 9.68136 16.2587 9.60958 16.1409C9.53781 16.0232 9.49989 15.8879 9.5 15.75V8.24998C9.49986 8.1121 9.53772 7.97685 9.60943 7.8591C9.68115 7.74134 9.78393 7.64563 9.9065 7.58248Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Pulse>
          </Zoom>
        </div>
      </Container>
    </section>
  )
}

export default Hero
