import * as React from "react";
import Header from "../components/header";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fontsource/montserrat";
import theme from "../themes/light";
import Introduction from "../sections/introduction";
import Projects from "../sections/projects";
import Background from "../components/background";
import Skills from "../sections/skills";
import Contact from "../sections/contact";
import MainContainer from "../components/mainContainer";
import BurgerNav from "../components/navigation";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Montserrat';
        background-color: #FDFDFD;
    }
`;

const IndexPage: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Background />
            <BurgerNav />
            <Header />
            <MainContainer>
                <Introduction />
                <Projects />
                <Skills />
                <Contact />
            </MainContainer>
        </ThemeProvider>
    );
};

export default IndexPage;
