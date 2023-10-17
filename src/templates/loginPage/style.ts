import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #111;
`;
export const FormContainer = styled.div`
    width: 30%;
    background-color: #555;
    height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    @media (max-width: 1100px) {
        width: 50%;
    }
`;
export const Title = styled.h1`
    text-align: center;
    color: white;
`;
