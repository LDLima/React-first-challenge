import { PlusCircle } from "phosphor-react"

import styles from "./NewTask.module.css"

export function NewTask() {
  return (
    <article>
      <div className={styles.newTask}>
        <textarea name='input' placeholder='Adicione uma nova tarefa' />
        <div>
          <button type='submit'>
            Criar <PlusCircle />
          </button>
        </div>
      </div>
    </article>
  )
}
