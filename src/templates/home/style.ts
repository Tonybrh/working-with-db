import styled from 'styled-components';
import pexelsGamer from 'public/images/pexelsGamer.jpg';
import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
`;

export const HomeImage = styled.div`
    width: 100%;
    height: 400px;
    object-fit: cover;
    background-image: url(${pexelsGamer.src});
    background-position: 50%;
    background-size: cover;
    position: relative;
`;

export const Slogan = styled.span`
    text-align: center;
    font-weight: bold;
    width: 250px;
    font-size: 24px;
    position: absolute;
    right: 100px;
    bottom: 200px;
`;

export const LayoutGrid = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    gap: 5%;
`;

export const GridItem = styled.div`
    width: 100%;
    height: 400px;
    background-color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const ItemImage = styled(Image)`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
