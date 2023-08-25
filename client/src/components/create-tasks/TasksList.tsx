import { useEffect, useState } from "react"
import { getTasks } from "../../api/tasks.api"
import TaskCard from "./TaskCard"
import { TaskWrapper } from "./styles"

console.log(getTasks)

interface ITasks {
    id: string
    title: string
    description: string
    done: boolean
}

const TasksList = () => {
    const [tasks, setTasks] = useState<ITasks[]>([])

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await getTasks()
            setTasks(res.data)
        }
        fetchTasks()
    }, [])

 const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <TaskWrapper>
        {tasks.map((task, index) => (
            <TaskCard 
              backgroundColor={index % 2 === 0 ? 1 : 2}
              key={task.id} 
              {...task}
              onDelete={() => removeTask(task.id)}
            />
        ))}
    </TaskWrapper>
  )
}

export default TasksList