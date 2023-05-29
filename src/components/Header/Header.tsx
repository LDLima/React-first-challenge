import styles from "./Header.module.css"

import icon from "../../assets/rocket-logo.svg"
import toDoTitle from "../../assets/todo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={icon} alt='Rocket icon provided by rocketseat' />
      <img src={toDoTitle} alt='To Do' />
    </header>
  )
}
