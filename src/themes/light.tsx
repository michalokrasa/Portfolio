import { Theme } from "./types";

const lightTheme: Theme = {
    palette: {
        primary: "#FFBE57",
        secondary: "#e0a84f",
        fontTitle: "#111",
        fontRegular: "#333",
        fontSecondary: "#555",
        background: "#FDFDFD",
    },
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
    },
    borderRadius: "24px",
    shadow: "0 4px 12px 0 rgba(0, 0, 0, 0.2)",
};

export default lightTheme;
