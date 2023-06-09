import { FC } from "react"
//@ts-ignore
import Fade from "react-reveal/Fade"

import Container from "../../../ui/container/Container"
import H4 from "../../../ui/heading/H4"
import Logo from "../../../ui/logo/Logo"

import styles from "./Footer.module.scss"
import SocialLinks from "./SocialLinks"

const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <Container className={styles.wrap}>
        <Fade left cascade>
          <div className={styles.top}>
            <div className={styles.left}>
              <Logo black className={styles.logo} />
              <a className={styles.leftLink} href="mailto:karsoft_group@gmail.com">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3V3ZM20 7.238L12.072 14.338L4 7.216V19H20V7.238ZM4.511 5L12.061 11.662L19.502 5H4.511Z"
                    fill="#222D50"
                  />
                </svg>
                <span>karsoft_group@gmail.com</span>
              </a>
              <a className={styles.leftLink} href="mailto:karsoft_group@gmail.com">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.366 10.682C10.3043 12.3305 11.6695 13.6957 13.318 14.634L14.202 13.396C14.3442 13.1969 14.5543 13.0569 14.7928 13.0023C15.0313 12.9478 15.2814 12.9825 15.496 13.1C16.9103 13.8729 18.4722 14.3378 20.079 14.464C20.3298 14.4839 20.5638 14.5975 20.7345 14.7823C20.9052 14.9671 21 15.2094 21 15.461V19.923C21.0001 20.1706 20.9083 20.4094 20.7424 20.5932C20.5765 20.777 20.3483 20.8927 20.102 20.918C19.572 20.973 19.038 21 18.5 21C9.94 21 3 14.06 3 5.5C3 4.962 3.027 4.428 3.082 3.898C3.10725 3.6517 3.22298 3.42352 3.40679 3.25763C3.5906 3.09175 3.82941 2.99995 4.077 3H8.539C8.79056 2.99997 9.0329 3.09475 9.21768 3.26545C9.40247 3.43615 9.51613 3.67022 9.536 3.921C9.66222 5.52779 10.1271 7.08968 10.9 8.504C11.0175 8.71856 11.0522 8.96874 10.9977 9.2072C10.9431 9.44565 10.8031 9.65584 10.604 9.798L9.366 10.682ZM6.844 10.025L8.744 8.668C8.20478 7.50409 7.83535 6.26884 7.647 5H5.01C5.004 5.166 5.001 5.333 5.001 5.5C5 12.956 11.044 19 18.5 19C18.667 19 18.834 18.997 19 18.99V16.353C17.7312 16.1646 16.4959 15.7952 15.332 15.256L13.975 17.156C13.4287 16.9437 12.898 16.6931 12.387 16.406L12.329 16.373C10.3676 15.2567 8.74328 13.6324 7.627 11.671L7.594 11.613C7.30691 11.102 7.05628 10.5713 6.844 10.025Z"
                    fill="#222D50"
                  />
                </svg>

                <span>karsoft_group@gmail.com</span>
              </a>
            </div>
            <div className={styles.center}>
              <div className={styles.footerMenu}>
                <H4 mb={2}>Xizmatlar</H4>
                <a href="#">Web dasturlash</a>
                <a href="#">Mobil dasturlash</a>
                <a href="#">UX/UI dizayn</a>
                <a href="#">Marketing</a>
              </div>
              <div className={styles.footerMenu}>
                <H4 mb={2}>Biz haqimizda</H4>
                <a href="#">Home</a>
                <a href="#">Biz haqimizda</a>
                <a href="#">Xizmatlarimiz</a>
                <a href="#">Portfolio</a>
                <a href="#">Portfolio</a>
                <a href="#">Vakansiya</a>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.footerMenu}>
                <H4 mb={2}>Bizning manzil:</H4>
                <p>Qoraqalpog’iston Res.Nukus shahri.</p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </Fade>
      </Container>
      <div className={styles.bottom}>2020 Copyright all right reserved - Karsoft</div>
    </footer>
  )
}

export default Footer
