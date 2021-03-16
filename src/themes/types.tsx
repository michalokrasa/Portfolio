interface Palette {
    primary: string;
    secondary: string;
    fontTitle: string;
    fontRegular: string;
    fontSecondary: string;
    background: string;
}

interface Breakpoints {
    sm: string;
    md: string;
    lg: string;
}

interface Weights {
    light: 300;
    regular: 400;
    medium: 500;
    semiBold: 600;
    bold: 700;
    extraBold: 800;
}

interface Theme {
    palette: Palette;
    breakpoints: Breakpoints;
    weights: Weights;
    borderRadius: string;
    shadow: string;
}

export { Theme };
