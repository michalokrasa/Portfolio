import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    padding: 3rem 2rem;
    z-index: 20;
    position: absolute;
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
            <Title>Hello, I'm Mike</Title>
        </StyledHeader>
    );
};

export default Header;
