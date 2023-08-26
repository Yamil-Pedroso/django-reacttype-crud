import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Metadata from '../components/metadata/Metadata'
import Search from '../components/search/Search'
import MyTasks from '../components/my-tasks/MyTasks'
import UserItems from '../components/user-items/UserItems'
import TimeTracker from '../components/time-tracker/TimeTracker'
import CalendarComp from '../components/calendar/Calendar'
import images from '../assets/images'
import { getTasks } from '../api/tasks.api'
import { getUserById } from '../api/auth'
import Aside from '../components/dashboard/Aside'

interface ITask {
  id: string
  title: string
  description: string
  status: string
  createdAt: string
  updatedAt: string
  onDelete: () => void
}

interface IUser {
  id: number;
  username: string;
  last_name: string;
  profile_picture: string;
}

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding: 0rem;
  background-color: #f4f5f9;
`
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 0 5rem;
  background-color: #f4f5f9;
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 5rem;
  background-color: #ffffff;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
`

const TaskDoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 30rem;
  margin-top: 8rem;
  border-radius: 1rem;
  background-color: #ffffff;
  overflow: hidden;

   div {
     h3  {
         color: #68cad7;
     }
   }

  img {
    width: 22rem;
    height: 22rem;
    margin-left: 3rem;
    object-fit: cover;
  }
`

const TaskDoneWrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 11.7rem;
  margin-top: 2rem;
  border-radius: 1rem;
  background-color: #ffffff;
  overflow: hidden;

   div {
     h3  {
         color: #68cad7;
         margin-left: 3rem;
         margin-top: 1rem;
     }
   }
`


const HomePage = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      const myTask = await getTasks()
      setTasks(myTask.data)
    }

    fetchTasks()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(4)
      setUser(user.data)
    }

    fetchUser()
  }, [])


  return (
    <>
      <Metadata title="Dashboard" />
      <Container>
      <Aside />
        <RightContainer>
          <div>
            <h2 style={{ color: "#2a2a2a", marginTop: "2rem" }}> <span style={{color: "#68cad7"}}>{user?.username}</span> <span style={{color: "#7f8080'"}}>|</span> Profile</h2>
            <Search />
            <MyTasks />
          </div>
          <div>
          <TaskDoneWrapper>
            <div>
              <img src={images.taskDone} alt="task done" />
            </div>
          </TaskDoneWrapper>
          <TaskDoneWrapperTwo>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem"}}>
              <h2 style={{color: "#313131", fontWeight: "bold", textAlign: "center"}}>My Tasks</h2>
              <h3>
                Not started:<span style={{color: "#606060"}}> {tasks.length}
                </span>
              </h3>
              <h3>
                In progress:<span style={{color: "#606060"}}> 1
                </span>
              </h3>
              <h3
                
              >
                done:<span style={{color: "#606060"}}> 2
                </span>
              </h3>
            </div>
          </TaskDoneWrapperTwo>
          </div>
        </RightContainer>
        <LeftContainer>
          <UserItems />
          <TimeTracker />
          <CalendarComp />
        </LeftContainer>
      </Container>
    </>
  )
}

export default HomePage