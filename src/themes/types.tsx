interface Palette {
    primary: string;
    secondary: string;
    fontTitle: string;
    fontRegular: string;
    fontSecondary: string;
    background: string;
    white: string;
}

interface Breakpoints {
    sm: string;
    md: string;
    lg: string;
}

interface Weights {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
}

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        palette: Palette;
        breakpoints: Breakpoints;
        weights: Weights;
        borderRadius: string;
        shadow: string;
    }
}
