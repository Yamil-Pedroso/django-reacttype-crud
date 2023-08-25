import styled from 'styled-components';
import { BsFillSearchHeartFill } from 'react-icons/bs'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.5rem;
  h2 {
    color: #3d3d3d;
    font-size: 1.3rem;
  }
  
  h1 {
    color: #3d3d3d;
    font-size: 1.8rem;
  }
  `;

export const SearchIcon = styled(BsFillSearchHeartFill)`
  color: #d1d1d1;
  position: absolute;
  top: .5rem;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  `;

export const SearchForm = styled.form`
  width: 18rem;
  margin-top: 1rem;
  position: relative;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    background-color: #474747;
    color: #d6d6d6;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    font-size: 1.2rem;

    &::placeholder {
        color: #d6d6d6;
    }

    &:focus {
      outline: none;
    }
`;