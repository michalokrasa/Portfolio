import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    z-index: 20;
    padding: 1rem 1rem;
    position: absolute;
    top: calc(400 * var(--vh));
    box-shadow: ${({ theme }) => theme.shadow};
    transform: translateY(-100%);

    
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 2rem 2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 3rem 3rem;
    }
`;

const Title = styled.h1`
    flex-grow: 1;
    color: ${({ theme }) => theme.palette.fontTitle};

    font-size: 1rem;
    font-weight: ${({ theme }) => theme.weights.bold};

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 2.188rem;
        font-weight: ${({ theme }) => theme.weights.extraBold};
    }
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Title>Michał Okrasa</Title>
        </StyledFooter>
    );
};

export default Footer;
