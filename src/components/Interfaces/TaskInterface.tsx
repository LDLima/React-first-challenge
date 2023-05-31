export interface TaskProps {
  task: TaskType
}

export interface TaskType {
  id: string
  isComplete: boolean
  content: string
}
