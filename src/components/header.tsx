import React from "react";
import styled from "styled-components";

const NavBar = styled.header`
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

const Nav = styled.nav`
    display: none;
    align-items: center;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        display: flex;
        margin: 0 1rem;
    }
`;

const Link = styled.a`
    margin: 0px 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.font};
    font-weight: bold;
    color: ${(props) => props.theme.palette.fontSecondary};
`;

const Header: React.FC = () => {
    return (
        <NavBar>
            <Title>Hello, I'm Mike</Title>
            {/* <Nav>
                <Link href="#introduction">About me</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#contact">Contact</Link>
            </Nav> */}
        </NavBar>
    );
};

export default Header;
