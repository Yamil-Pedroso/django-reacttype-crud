import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;

    h2 {
        font-size: 24px;
        font-weight: 500;
        color: #444;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #575757;
        margin: 1rem 0;
    }

    p {
        color: #20b04b;
    }
`;

export const AvatarWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;