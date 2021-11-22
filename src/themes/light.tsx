import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
    palette: {
        primary: "#FFBE57",
        secondary: "#e0a84f",
        fontTitle: "#111",
        fontRegular: "#333",
        fontSecondary: "#555",
        background: "#FDFDFD",
        white: "#FFF",
        tint: "#a7a7a7",
    },
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
        xxl: "2000px",
    },
    borderRadius: "0.8em",
    shadow: "0 4px 12px 0 rgba(0, 0, 0, 0.2)",
    weights: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
    },
    sectionHeight: "1200px",
};

export default lightTheme;
