import cn from "classnames"
import { FC, useEffect } from "react"

import useToggle from "../../../../hooks/useToogle.hook"
import Container from "../../../ui/container/Container"
import Logo from "../../../ui/logo/Logo"

import styles from "./Header.module.scss"

const Header: FC = () => {
  const { active, toggle } = useToggle(false)
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
    return () => {
      document.body.style.overflowY = "scroll"
    }
  }, [active])
  return (
    <header className={styles.header}>
      <Container className={styles.wrap}>
        <Logo />
        <div>
          <nav className={cn(styles.nav, { [styles.active]: active })}>
            <a href="#about">Biz haqimizda</a>
            <a href="#service">Xizmatlarimiz</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#vakans">Vakansiyalar</a>
            <div className={styles.dropdown}>
              <span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.99967 13.6666C3.31767 13.6666 0.333008 10.6819 0.333008 6.99992C0.333008 3.31792 3.31767 0.333252 6.99967 0.333252C10.6817 0.333252 13.6663 3.31792 13.6663 6.99992C13.6663 10.6819 10.6817 13.6666 6.99967 13.6666ZM5.47301 12.1113C4.81528 10.7161 4.43426 9.20673 4.35101 7.66658H1.70767C1.8374 8.69252 2.26229 9.65869 2.93072 10.4477C3.59915 11.2367 4.48235 11.8147 5.47301 12.1113ZM5.68634 7.66658C5.78701 9.29258 6.25167 10.8199 6.99967 12.1679C7.76789 10.7843 8.21664 9.24624 8.31301 7.66658H5.68634ZM12.2917 7.66658H9.64834C9.56509 9.20673 9.18406 10.7161 8.52634 12.1113C9.517 11.8147 10.4002 11.2367 11.0686 10.4477C11.7371 9.65869 12.1619 8.69252 12.2917 7.66658ZM1.70767 6.33325H4.35101C4.43426 4.79311 4.81528 3.28371 5.47301 1.88859C4.48235 2.18517 3.59915 2.76309 2.93072 3.55212C2.26229 4.34114 1.8374 5.30732 1.70767 6.33325ZM5.68701 6.33325H8.31234C8.21617 4.75365 7.76765 3.21561 6.99967 1.83192C6.23146 3.21555 5.78271 4.7536 5.68634 6.33325H5.68701ZM8.52634 1.88859C9.18406 3.28371 9.56509 4.79311 9.64834 6.33325H12.2917C12.1619 5.30732 11.7371 4.34114 11.0686 3.55212C10.4002 2.76309 9.517 2.18517 8.52634 1.88859Z"
                    fill="white"
                  />
                </svg>
                Uz
              </span>
              <div className={styles.dropdownContent}>
                <p>UZ</p>
                <p>RU</p>
                <p>QR</p>
              </div>
            </div>
          </nav>
          <div
            onClick={toggle}
            className={cn(styles.buttonBurger, {
              [styles.buttonBurger_active]: active,
            })}
          >
            <div className={styles.buttonBurger__line}></div>
            <div className={styles.buttonBurger__line}></div>
            <div className={styles.buttonBurger__line}></div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
