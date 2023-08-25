import { MyTasksContainer, TaskWrapper } from './styles'
import TasksList from '../create-tasks/TasksList'

interface TaskMenuProps {
    title: string
}

const taskMenu: TaskMenuProps[] = [
    {
        title: "Recently"
    },
    {
        title: "Today"
    },
    {
        title: "Upcoming"
    },
    {
        title: "Later"
    }
]

const MyTasks: React.FC = () => {
  return (
    <MyTasksContainer>
        <h2>My Tasks</h2>
        <TaskWrapper>
          <ul>
              {taskMenu.map(task => (
                  <li key={task.title}><p>{task.title}</p></li>
              ))}
          </ul>
        </TaskWrapper>
        <TasksList />
    </MyTasksContainer>
  )
}

export default MyTasks