import styled from 'styled-components';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

export const TimeTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;

  h2 {
    color: #f8fffb;
  }

  p {
    color: #f8fffb;
  }
`;

export const TimeTrackerCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #68cad7;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 32rem;
    height: 8rem;
`;

export const ArrowRightIcon = styled(BsFillArrowRightSquareFill)`
    font-size: 3rem;
    color: #343434;
    margin-right: 0.5rem;
    `;
