import { Task } from "../Task/Task"
import { EmptyBoard } from "./EmptyBoard.tsx"
import { TaskType } from "../Interfaces/TaskInterface.tsx"

import styles from "./Board.module.css"

import { PlusCircle } from "phosphor-react"
import { v4 as uuidv4 } from "uuid"
import { ChangeEvent, FormEvent, useState } from "react"

export function Board() {
  const [newTaskContent, setTaskContent] = useState<string>("")
  const [tasks, setTasks] = useState<TaskType[]>([])
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
                onDeleteTask={handleDeleteTask}
              />
            )
          }
        })}
      </div>
    </article>
  )

  function handleDeleteTask(id: string) {
    deleteTask(id)
    removeTaskFromTheCount()
  }

  function deleteTask(id: string) {
    const setTasksWithout = tasks.filter((task) => {
      if (task.id != id) task
    })
    setTasks(setTasksWithout)
  }

  function removeTaskFromTheCount() {
    setTaskCount((amount) => {
      return amount - 1
    })
  }

  function handleCompleteTasksCount(id: string) {
    completeTask(id)
    addCompletedTaskToTheCount()
  }

  function completeTask(id: string) {
    const setTaskToComplete = tasks.map((task) => {
      if (task.id === id) !task.isComplete
      return task
    })
    setTasks(setTaskToComplete)
  }

  function addCompletedTaskToTheCount() {
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
    setTasks([...tasks, newTask])
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

/* function handleCompleteTasksCount(id: string) {
    setDoneTaskCount((amount) => {
      const setNew = tasks.map((task) => {
        if (task.id === id) {
          //  If it's false, receive true. And add on to the count of completed tests
          if (task.isComplete === true) {
            !task.isComplete
            amount + 1
            console.log("Aqui ", amount)
          } else {
            // If it's true, receive false. And remove one from the count of completed tests
            !task.isComplete
            amount - 1
          }
        }
        return task
      })
      setTasks(setNew)
      return amount
    })
  }*/
