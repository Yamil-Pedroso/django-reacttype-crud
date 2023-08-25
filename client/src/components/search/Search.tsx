import React, { useState, useEffect } from 'react'
import { SearchContainer, SearchForm, SearchInput, SearchIcon } from './styles'
import { getTasks } from '../../api/tasks.api'

interface ITask {
  id: string
  title: string
  description: string
  status: string
  createdAt: string
  updatedAt: string
}

const Search: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  console.log(tasks)

  useEffect(() => {
    const fetchTasks = async () => {
      const myTask = await getTasks()
      setTasks(myTask.data)

      console.log(myTask.data.length)
    }

    fetchTasks()
  }, [])
  return (
    <SearchContainer>
        <SearchForm>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search" />
        </SearchForm>
    </SearchContainer>
  )
}

export default Search