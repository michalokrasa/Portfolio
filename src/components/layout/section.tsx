import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
    height: 100vh;
    height: calc(100 * var(--vh));
    transition: height 0.5s ease-in-out;

    width: 100%;
    padding-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
        padding-top: 3rem;
    }
`;

interface SectionProps {
    /** Section id, can be used to link to it. */
    id: string;
    /** Components to be displayed inside the section. */
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
    return <Wrapper id={id}>{children}</Wrapper>;
};

export default Section;