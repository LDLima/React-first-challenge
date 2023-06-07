import { CheckCircle, Circle, Trash } from "phosphor-react"

import styles from "./Task.module.css"
import { TaskProps } from "../Interfaces/TaskInterface"

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  function handleCompletedTask() {
    onCompleteTask(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <article>
      <div className={styles.task}>
        <div className={styles.contentBox}>
          {task.isComplete === true ? (
            <button
              onClick={handleCompletedTask}
              className={styles.isCompleteCheckIcon}
            >
              <CheckCircle size={20} />
            </button>
          ) : (
            <button onClick={handleCompletedTask} className={styles.checkIcon}>
              <Circle size={20} />
            </button>
          )}

          {task.isComplete === true ? (
            <p className={styles.isComplete}>{task.content}</p>
          ) : (
            <p className={styles.isNotComplete}>{task.content}</p>
          )}

          <button
            title='Delete task'
            onClick={handleDeleteTask}
            className={styles.delete}
          >
            <Trash size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}
