import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/light";
import GlobalStyle from "../themes/globalStyle";
import { Contact, Skills, Projects, Introduction } from "../sections";
import {
    MainContainer,
    Background,
    Header,
    Footer,
} from "../components/layout";
import BurgerableNav, { MenuItem } from "../components/navigation";
import { useRealHight } from "../hooks";
import { ToastProvider } from "react-toast-notifications";
import { Helmet } from "react-helmet";

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
    useRealHight();

    return (
        <ThemeProvider theme={theme}>
            <ToastProvider autoDismiss placement="top-center">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>WebDev Portfolio Okrasa</title>
                </Helmet>
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
                <Footer />
            </ToastProvider>
        </ThemeProvider>
    );
};

export default IndexPage;
