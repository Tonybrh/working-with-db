import styled from 'styled-components';

export const Title = styled.h1``;

export const Nav = styled.nav`
    display: flex;
    background-color: #000;
    color: #fff;
    align-items: center;
    justify-content: space-around;
`;

export const MenuNav = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    width: 40%;
`;
export const MenuItem = styled.li`
    cursor: pointer;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 100%;
        height: 2px;
        background-color: #fff; /* Cor do sublinhado, altere conforme necessário */
        transition: right 0.3s;
    }
    &:hover::before {
        right: 0;
    }
`;
