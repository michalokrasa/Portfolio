import * as React from "react";
import Header from '../components/header';
import styled, {createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../themes/light';
import Introduction from '../sections/introduction';
import Projects from '../sections/projects';
import Background from "../components/background";
import Skills from "../sections/skills";
import Contact from "../sections/contact";

const Container = styled.div`
    margin: 0px 3rem;
    background-color: ${props => props.theme.palette.background};
`;

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserrat';
    }
`;



const IndexPage: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Background/>
            <Container>
                <Header/>
                <main>
                    <Introduction/>
                    <Projects/>
                    <Skills/>
                    <Contact/>
                </main>
            </Container>
        </ThemeProvider>
    )
}

export default IndexPage;
