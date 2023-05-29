import { Task } from "../Task/Task"
import { EmptyBoard } from "./EmptyBoard.tsx"

import styles from "./Board.module.css"
import { NewTask } from "../Task/NewTask.tsx"
import { TaskType } from "../Interfaces/TaskInterface.tsx"

// Taks { id, isComplete, Content }
const tasks: TaskType[] = [
  {
    id: 0,
    isComplete: true,
    content: "Remove static steps",
  },
  {
    id: 0,
    isComplete: true,
    content:
      "Make the delete button be on the edge, independent from the size of the text",
  },
]

export function Board() {
  return (
    <article>
      <header>
        <NewTask />

        <div className={styles.listStatus}>
          <strong>Tarefas criadas 10</strong>
          <strong>Concluídas 12</strong>
        </div>
      </header>

      <div>
        {/* <EmptyBoard /> */}
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />
        })}
      </div>
    </article>
  )
}
