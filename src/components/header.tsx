import React from "react";
import styled from "styled-components";

const NavBar = styled.header`
    width: 100%;
    display: flex;
    padding: 2rem 1rem;
    z-index: 1;
    position: fixed;
`;

const Title = styled.p`
    flex-grow: 1;
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.fontSecondary};
`;

const Nav = styled.nav`
    display: none;

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
