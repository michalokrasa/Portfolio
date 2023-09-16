import React, { ReactNode } from "react";
import styled from "styled-components";

const ErrorMessage = styled.p`
    font-size: 0.6875rem;
    padding: 0 1em;
    color: rgba(255, 0, 0, 90%);

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1rem;
    }
`;

const InputErrorMessage: React.FC<{ show: boolean; children: ReactNode }> = ({ children, show }) => {
    return show && <ErrorMessage>{children}</ErrorMessage>;
};

export default InputErrorMessage;
