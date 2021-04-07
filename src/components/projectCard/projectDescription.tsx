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
`;

const TokensWrapper = styled.div`
    display: flex;
    margin: 0 1rem;
`;

const TextWrapper = styled.p`
    margin: 1rem;
    font-size: 0.6875rem;
`;

interface ProjectDescriptionProps {
    stack: string[];
    description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
    stack,
    description,
}) => {
    return (
        <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <TokensWrapper>
                {stack.map((tech) => (
                    <Token key={tech}>{tech}</Token>
                ))}
            </TokensWrapper>
            <TextWrapper>{description}</TextWrapper>
        </Wrapper>
    );
};

export default ProjectDescription;
