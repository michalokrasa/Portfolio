import styled from "styled-components";

const Button = styled.button`
    font-size: 1.2rem;
    font-family: "Montserrat";
    background-color: ${(props) => props.theme.palette.primary};
    color: ${(props) => props.theme.palette.fontSecondary};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: ${(props) => props.theme.borderRadius};
    transition: background-color 0.5s;
    cursor: pointer;
    font-weight: bold;
    box-shadow: ${(props) => props.theme.shadow};

    &:hover {
        background-color: ${(props) => props.theme.palette.secondary};
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
`;

export default Button;
