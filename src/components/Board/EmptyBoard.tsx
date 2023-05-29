import styles from "./EmptyBoard.module.css"

import emptySymbol from "../../assets/emptySymbol.svg"

export function EmptyBoard() {
  return (
    <div className={styles.emptyTable}>
      <img src={emptySymbol} alt='Empty sheet icon' />
      <div className={styles.tableInfo}>
        <strong>
          <p>Você ainda não tem tarefas cadastradas</p>
        </strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
