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

  function handleDeleteTask(id: string) {
    deleteTask(id)
    removeTaskFromTheCount()
  }

  function deleteTask(id: string) {
    const setTasksWithout = tasks.filter((task) => {
      if (task.id != id) return task
      else if (task.isComplete) removeCompletedTaskToTheCount()
    })
    setTasks(setTasksWithout)
  }

  function removeTaskFromTheCount() {
    setTaskCount((amount) => {
      return amount - 1
    })
  }

  function handleCompleteTasksCount(id: string) {
    const setTaskToComplete = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete
          ? removeCompletedTaskToTheCount()
          : addCompletedTaskToTheCount()
        task.isComplete = !task.isComplete
      }
      return task
    })
    setTasks(setTaskToComplete)
  }

  function removeCompletedTaskToTheCount() {
    setDoneTaskCount((amount) => {
      return amount - 1
    })
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

  return (
    <article>
      <header>
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
          <textarea
            name='task'
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskTextChange}
            value={newTaskContent}
          />
          <div>
            <button type='submit' disabled={newTaskContent.length === 0}>
              Criar <PlusCircle />
            </button>
          </div>
        </form>

        <div className={styles.listStatus}>
          <strong>
            Tarefas criadas
            <span className={styles.numbersCount}>{tasksCount}</span>
          </strong>
          <strong>
            Concluídas
            <span className={styles.numbersCount}>{tasksDoneCount}</span>
          </strong>
        </div>
      </header>

      <div>
        {tasks.length === 0 ? (
          <EmptyBoard />
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCompleteTask={handleCompleteTasksCount}
              onDeleteTask={handleDeleteTask}
            />
          ))
        )}
      </div>
    </article>
  )
}
