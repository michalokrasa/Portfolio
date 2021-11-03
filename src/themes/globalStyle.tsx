import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";

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

        --section-height: 800px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            --section-height: 1000px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            --section-height: 1200px;
        }
    }

    body::-webkit-scrollbar {
        width: 16px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 8px;
    }

    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
`;

export default GlobalStyle;
