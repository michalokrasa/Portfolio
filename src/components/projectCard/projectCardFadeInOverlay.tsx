import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Overlay = styled(motion.div)`
    z-index: 5;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: ${({ theme }) =>
        `${theme.borderRadius} ${theme.borderRadius} 0 0`};
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        opacity: 0;
    }
`;

const FadeInOverlay: React.FC = ({ children }) => {
    return <Overlay whileHover={{ opacity: 1 }}>{children}</Overlay>;
};

export default FadeInOverlay;
