import { Task } from "../Task/Task"
import { EmptyBoard } from "./EmptyBoard.tsx"
import { TaskType } from "../Interfaces/TaskInterface.tsx"

import styles from "./Board.module.css"

import { PlusCircle } from "phosphor-react"
import { v4 as uuidv4 } from "uuid"
import { ChangeEvent, FormEvent, useState } from "react"

export function Board() {
  const [newTaskContent, setTaskContent] = useState<string>("")
  const [tasks, setTaskListValues] = useState<TaskType[]>([])
  const [tasksCount, setTaskCount] = useState<number>(0)
  const [tasksDoneCount, setDoneTaskCount] = useState<number>(0)

  return (
    <article>
      <header>
        {/* <NewTask /> */}
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
          <textarea
            name='task'
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskTextChange}
            value={newTaskContent}
          />
          <div>
            <button type='submit'>
              Criar <PlusCircle />
            </button>
          </div>
        </form>

        <div className={styles.listStatus}>
          <strong>Tarefas criadas {tasksCount}</strong>
          <strong>Concluídas {tasksDoneCount}</strong>
        </div>
      </header>

      <div>
        {tasks.map((task) => {
          if (tasks.length == 0) {
            return <EmptyBoard /> //Fix it, why is not calling it?
          } else {
            return (
              <Task
                key={task.id}
                task={task}
                onCompleteTask={handleCompleteTasksCount}
              />
            )
          }
        })}
      </div>
    </article>
  )

  function handleCompleteTasksCount(id: string) {
    setDoneTaskCount((amount) => {
      return amount + 1
    })
  }

  function handleTaskCount() {
    setTaskCount((count) => {
      return count + 1
    })
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask = createNewTask(newTaskContent)
    setTaskListValues([...tasks, newTask])
    setTaskContent("")
    handleTaskCount()
  }

  function createNewTask(stringContent: string) {
    const newTask: TaskType = {
      id: uuidv4(),
      isComplete: false,
      content: stringContent,
    }
    return newTask
  }
}
