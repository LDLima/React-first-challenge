import { Circle, Trash } from "phosphor-react"

import styles from "./Task.module.css"
import { TaskProps } from "../Interfaces/TaskInterface"

export function Task({ task }: TaskProps) {
  return (
    <article>
      <div className={styles.task}>
        <div className={styles.contentBox}>
          <button className={styles.complete}>
            <Circle size={20} />
          </button>

          <p>{task.content}</p>

          <button title='Delete task' className={styles.delete}>
            <Trash size={15} />
          </button>
        </div>
      </div>
    </article>
  )
}