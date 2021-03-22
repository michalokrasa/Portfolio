import * as React from "react";
import Header from "../components/header";
import { ThemeProvider } from "styled-components";
import theme from "../themes/light";
import Introduction from "../sections/introduction";
import Projects from "../sections/projects";
import Background from "../components/background";
import Skills from "../sections/skills";
import Contact from "../sections/contact";
import MainContainer from "../components/mainContainer";
import BurgerableNav, { MenuItem } from "../components/navigation";
import GlobalStyle from "../themes/globalStyle";

//TODO: Scrolling triggers url changes based on displayed section

const menuItems: MenuItem[] = [
    {
        name: "About me",
        href: "#introduction",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

const IndexPage: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Background />
            <BurgerableNav menuItems={menuItems} />
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
