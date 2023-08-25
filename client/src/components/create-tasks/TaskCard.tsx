import { useNavigate } from 'react-router-dom';
import { CreateTaskContainer } from './styles';
import { deleteTask } from '../../api/tasks.api';
import { toast } from 'react-hot-toast';
import './styles.css'

interface ITasks {
  id: string;
  title: string;
  description: string;
  done: boolean;
  onDelete: () => void;
  backgroundColor: number;
}

const TaskCard = (props: ITasks) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const accepted = window.confirm('Are you sure you want to delete this task?');
    if (accepted) {
      await deleteTask(props.id);
      toast.success(
        'Task deleted',
        {
          duration: 3000,
          position: 'top-right',
          style: {
            padding: '16px',
            background: '#2a2a2a',
            color: '#fff',
          },
        }
      );
      props.onDelete(); 
    }
  };

  return (
    <CreateTaskContainer 
      className='task-card'
      backgroundColor={props.backgroundColor}
    >
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>
          {props.done ? (
            <span style={{ color: '#23a14f' }}>Done</span>
          ) : (
            <span style={{ color: '#161516' }}>Not Done</span>
          )}
        </p>
      </div>
      <div>
        <button onClick={() => navigate(`/tasks/${props.id}`)}>Edit</button>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </CreateTaskContainer>
  );
};

export default TaskCard;
