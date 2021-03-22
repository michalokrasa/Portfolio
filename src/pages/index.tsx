import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/light";
import GlobalStyle from "../themes/globalStyle";
import { Contact, Skills, Projects, Introduction } from "../sections";
import { MainContainer, Background, Header } from "../components/layout";
import BurgerableNav, { MenuItem } from "../components/navigation";

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
