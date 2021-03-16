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

interface Theme {
    palette: Palette;
    breakpoints: Breakpoints;
    borderRadius: string;
    shadow: string;
}

export { Theme };
