import styled, { css } from "styled-components";

const StyledTextarea = styled.textarea<{ $error: boolean }>`
    font-size: 1em;
    font-family: "Montserrat";
    resize: none;
    height: 10em;
    margin: 0.5em 0;
    padding: 1em;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.palette.background};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};

    ${(props) =>
        props.$error &&
        css`
            border: 1px solid rgb(255 0 0 / 20%);
            box-shadow: 0 4px 12px 0 rgb(255 0 0 / 20%);
        `}
`;

export default StyledTextarea;
