import styled from "styled-components";

const Button = styled.button`
    font-family: "Montserrat";
    /* color: ${({ theme }) => theme.palette.fontSecondary}; */
    color: #fff;
    background-color: ${({ theme }) => theme.palette.primary};
    border: none;
    padding: 0.5em 1em;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: background-color 0.5s;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow};

    font-size: 1.063rem;
    font-weight: ${({ theme }) => theme.weights.semiBold};

    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary};
        transform: scale(1.1);
        transition: background-color 0.5s;
        transition: transform 0.5s;
    }

    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(1);
        transition: transform 0.1s;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.75rem;
        font-weight: ${({ theme }) => theme.weights.extraBold};
    }
`;

export default Button;
