import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 7.9rem;
    height: 100vh;
    
    background-color: #68cad7;
`;

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    color: #2f2f2f;
  }

 div {

    div {
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      flex-direction: column;

      span {
        
        color: #3d3d3d;
      }

      a {
        text-decoration: none;
        color: #343434;
        font-weight: bold;
      }
      
 
      }

    }
`;

export const UlMenuWrapper = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
`;

const smallLeftBox = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;


export const ContentMenuBox = styled.div`
    width: 100%;
    padding: 1.2rem 2rem;
    background-color: #3d3d3d;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;


    &:hover {
        opacity: 1;
        background-color: #f4f5f9;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        transition: background-color 0.2s ease-in-out;
        animation: ${smallLeftBox} 0.2s ease-in-out;

        span {
            color: #68cad7;
            margin: 0;
        }

        p {
            color: #68cad7;

        }
    }
`;



export const UlLogout = styled.div`
    margin-top: 20px;
    position: absolute;
    bottom: 3rem;

`;