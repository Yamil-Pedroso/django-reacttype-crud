import styled from 'styled-components';
import { IoNotificationsSharp } from 'react-icons/io5';
import { BiSolidChevronDownSquare } from 'react-icons/bi';

export const UserItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 35rem;

  h2 {
    color: #3d3d3d;
  }

  p {
    color: #68cad7;
    font-weight: bold;
  }
`;

export const NotificationCardWrapper = styled.div`
    display: flex;
    align-self: center;
`;

export const NotificationIcon = styled(IoNotificationsSharp)`
    font-size: 1.5rem;
    color: #343434;
    margin-right: 1.3rem;
  `;

export const ArrowDownIcon = styled(BiSolidChevronDownSquare)`
    font-size: 1.5rem;
    color: #343434;
    margin-right: 0.5rem;
    `;
    