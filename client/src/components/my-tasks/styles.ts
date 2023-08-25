import styled from 'styled-components';

export const MyTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;

  h2 {
    color: #3d3d3d;
  }
`;

export const TaskWrapper = styled.div`
    margin-top: 1rem;

    ul {
        display: flex;
        list-style: none;
        padding: 0;

        li {
            color: #424242;
            font-weight: bold;

            p {
                margin: 0 2rem 0 0;
            }
        }
    }
`;