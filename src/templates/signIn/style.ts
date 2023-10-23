import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #111;
    flex-direction: column;
    color: white;
`;
export const FormContainer = styled.div`
    width: 20%;
    background-color: #555;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-bottom: 10px;
    @media (max-width: 1100px) {
        width: 50%;
    }
`;
export const Title = styled.h1`
    text-align: center;
    color: white;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    //align-items: center;
    gap: 10px;
`;
export const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 30px;
    //gap: 5px;
`;
export const InputLabel = styled.label`
    color: white;
    font-size: 20px;
`;
export const Input = styled.input`
    border: 0;
    border-radius: 5px;
    height: 25px;
    padding-left: 10px;
    width: 50%;
`;
export const Submit = styled.input`
    width: 30%;
    margin-left: 30px;
    background-color: #111;
    color: white;
    font-size: 20px;
    border: 0;
    cursor: pointer;
    border-radius: 5px;
    height: 35px;
    @media (max-width: 1100px) {
        width: 30%;
    }
`;
export const SpanError = styled.span`
    color: #d53e3e;
    font-weight: bold;
`;
export const LoginLink = styled(Link)`
    color: white;
`;
