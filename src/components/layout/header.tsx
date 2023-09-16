import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    padding: 1.6rem 1.6rem;
    z-index: 20;
    position: absolute;

    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
        padding: 3rem 3rem;
    }
`;

const Title = styled.p`
    flex-grow: 1;
    /* color: ${({ theme }) => theme.palette.fontSecondary}; */
    color: #fff;

    font-size: 1rem;
    font-weight: ${({ theme }) => theme.weights.bold};

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 2.188rem;
        font-weight: ${({ theme }) => theme.weights.extraBold};
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Title>Hello, I'm Michal</Title>
        </StyledHeader>
    );
};

export default Header;
