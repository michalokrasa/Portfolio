import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
    height: var(--section-height);
    transition: height 0.5s ease-in-out;

    width: 100%;
    padding-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-top: 3rem;
    }
`;

interface SectionProps {
    /** Section id, can be used to link to it. */
    id: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className }) => {
    return (
        <Wrapper id={id} className={className}>
            {children}
        </Wrapper>
    );
};

export default Section;
