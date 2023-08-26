import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BTN = styled.button`
    background-color: #1e90ff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
`;

export const BTNWrapper = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: .9rem;
        margin-left: 10px;
        color: #4b4a4a;
        cursor: pointer;
    }
`;

export const BTNlogin = styled.button`
    background-color: #fb9c80;
    color: white;
     font-weight: bold;
    border: none;
    padding: .8rem 3rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
`;

export const LoginSimulateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #373736;;
`;

export const FormWrapper = styled.div`
    display: flex;
    width: 50rem;
    height: 30rem;
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 5rem .1rem rgba(36, 71, 123, 0.3);
    overflow: hidden;
`;

export const Form = styled.form`
     margin: 0 auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        margin-bottom: 1rem;
        margin: 0 auto;
    }

    label {
        color: #aeaeae;
        font-size: 1.3rem;
        font-weight: 300;
    }
    
    input {
        width: 20rem; 
        font-size: 1rem;   
        margin: 1rem 0;
        border-bottom: 1px solid #aeaeae;
        border-top: none;
        border-left: none;
        border-right: none;
        background-color: transparent;

        &:focus {
            outline: none;
        }


    }
`;

export const LeftBoxLogin = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fb9c80;

    .welcome-back {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    div {
        padding: 0 1.5rem;

        h2 {
            color: #ffffff;
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
    }

    h2, p {
        margin-left: 2rem;
    }
`;

export const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 300;
        margin: 1rem 0;
        text-align: center;
    }

    button {
        margin: 1rem 0;
        border: none;
        padding: .8rem 3rem;
        background-color: #4d4c4c;
        color: #ffffff;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }
`;