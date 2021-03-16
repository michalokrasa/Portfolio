import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
