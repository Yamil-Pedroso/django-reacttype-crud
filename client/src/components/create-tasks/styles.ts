import styled from 'styled-components';

interface IBackgroundColor {
    backgroundColor: number;
}

export const CreateTaskContainer = styled.div<IBackgroundColor>`
  display: flex;
  justify-content: space-between;
  background-color:  ${props => props.backgroundColor % 2 === 0 ? '#aabbf3' : '#fb9c80'};
  margin-top: 1rem;
  padding: .625rem;
  border-radius: .5rem;
   width: 18rem;
  height: 10rem;
`;

export const TaskWrapper = styled.body`
   margin-top: 1rem;
   width: 21rem;
   height: 34rem;
   overflow-y: scroll;
   background-color: #f4f5f9;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: #f4f5f9;
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background: #68cad7;
        border-radius: 1rem;
    }
`;