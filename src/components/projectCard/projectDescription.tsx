import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)``;

const Token = styled.div`
    font-size: 0.6875rem;
    background-color: ${({ theme }) => theme.palette.fontSecondary};
    color: ${({ theme }) => theme.palette.primary};
    font-weight: ${({ theme }) => theme.weights.extraBold};
    border-radius: 1.5em;
    padding: 0.5em 1em;
    margin-right: 1em;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1rem;
    }
`;

const TokensWrapper = styled.div`
    display: flex;
    margin: 0 1.5rem;
`;

const TextWrapper = styled.p`
    margin: 1.5rem;
    font-size: 0.6875rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1rem;
    }
`;

interface ProjectDescriptionProps {
    stack: string[];
    description: string;
}

const ProjectDescription = React.forwardRef<
    HTMLParagraphElement,
    ProjectDescriptionProps
>((props, ref) => {
    return (
        <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <TokensWrapper>
                {props.stack.map((tech) => (
                    <Token key={tech}>{tech}</Token>
                ))}
            </TokensWrapper>
            <TextWrapper ref={ref}>{props.description}</TextWrapper>
        </Wrapper>
    );
});

export default ProjectDescription;
