export interface TaskProps {
  task: TaskType
  onCompleteTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export interface TaskType {
  id: string
  isComplete: boolean
  content: string
}
