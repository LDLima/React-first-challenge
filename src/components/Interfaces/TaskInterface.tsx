export interface TaskProps {
  task: TaskType
}

export interface TaskType {
  id: number
  isComplete: boolean
  content: string
}
