import { motion } from "framer-motion";
import React from "react";
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
    margin-top: 0.5em;
    margin-bottom: 0.5em;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1rem;
    }
`;

const TokensWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 1.5rem;
`;

const TextWrapper = styled.p`
    margin: 1.5rem;
    font-size: 0.6875rem;
    white-space: pre-line;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.5rem;
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
