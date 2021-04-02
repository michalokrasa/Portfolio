import React from "react";
import { Options } from "react-toast-notifications";
import styled from "styled-components";

const StyledLink = styled.a`
    color: ${({ theme }) => theme.palette.fontSecondary};
`;

const SubmissionError: { children: JSX.Element; options: Options } = {
    children: (
        <>
            <p>Something went wrong. 😧😬</p>
            <p>
                Please contact me at{" "}
                <StyledLink href="mailto:michal.okrasa98@gmail.com">
                    {" "}
                    michal.okrasa98@gmail.com{" "}
                </StyledLink>{" "}
            </p>
        </>
    ),
    options: {
        appearance: "error",
        autoDismiss: false,
    },
};

export default SubmissionError;
