import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {  createTask, deleteTask, getTask, updateTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'  

interface IFormInput {
  title: string
  description: string
  onDelete: (id: number) => void
}

const TasksFormPage = () => {
  const { 
     register, 
     handleSubmit,
     formState: { errors },
     setValue
     } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  //yup
  //zod are other libraries for validation with more features

  
  useEffect(() => {
    if (params.id) {
      const fetchTask = async () => {
        const res = await getTask( params.id as string )
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      } 
      fetchTask()
    }
  }, [params.id, setValue])
  
  const onSubmit = handleSubmit( async data => {
    if (params.id) {
      await updateTask( params.id as string, data as IFormInput )
      toast.success(
        'Task updated',
         {
            duration: 3000,
            position: 'top-right',
            style: {
              padding: '16px',
              background: '#2a2a2a',
              color: '#fff',
            },
         }
        )
    } else {
     await createTask( data as IFormInput )
     toast.success(
      'New task added',
       {
          duration: 3000,
          position: 'top-right',
          style: {
            padding: '16px',
            background: '#2a2a2a',
            color: '#fff',
          },
       }
      )
  }
    navigate('/')
})

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Title"
          {...register('title', { required: true })}
         />
        {errors.title && <span>Title is required</span>}
        <textarea 
          placeholder="Description"
          {...register('description', { required: true })}
          ></textarea>
        {errors.description && <span>Description is required</span>}
        <button type="submit">Save</button>
      </form>

      { params.id && 
       <button
        onClick={ async () => {
          const accepted = window.confirm('Are you sure you want to delete this task?')
          if (accepted) {
            await deleteTask( params.id  as string )
            toast.success(
              'Task deleted',
               {
                  duration: 2000,
                  position: 'bottom-center',
                  style: {
                    padding: '16px',
                    background: '#2a2a2a',
                    color: '#fff',
                  },
               }
              )
            navigate('/')
          }
        }}
        >  Delete
        </button> }
    </div>
  )
}

export default TasksFormPage