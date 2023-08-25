import { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';


// Styled component for the calendar container
const CalendarContainer = styled.div`
   margin-top: 2rem;
  display: inline-block;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 32rem;
`;

const CalendarComp = () => {
  const [value, onChange] = useState<Value>(new Date());

  // Get the current date and format it
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString(); // Change the format as needed

  return (
    <>
      <div>
         <div style={{display: "flex"}}>
          <div>
           <h2
              style={{
                color: '#7f8080',
                fontWeight: '200',
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
              }}
           >{formattedDate}</h2>
           <h1
              style={{
                color: '#202020',
                fontWeight: 'bold',
                fontSize: '2.5rem',
                marginBottom: '0.5rem',
              }}
           >Today</h1>
          </div>

          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#202020', border: 'none', color: '#ffffff', marginLeft: "2rem"}}>
            <Link to="/tasks/new" style={{ textDecoration: 'none', color: '#e6e6e6', fontWeight: 'bold', fontSize: '1.2rem'}}>
              + Add Task
            </Link>
          </button>
         </div>
      </div>
      <CalendarContainer>
         <Calendar
           onChange={onChange}
           value={value}
           tileContent={({ date, view }) =>
             view === 'month' && date.getDay() === 3 ? (
               <div style={{ fontSize: '10px', color: 'red' }}>Event</div>
             ) : null
           }
         />
       </CalendarContainer>
    </>
  );
};

export default CalendarComp;
