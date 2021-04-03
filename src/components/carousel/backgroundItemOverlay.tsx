import { motion, Variants } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Overlay = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: ${({ theme }) => theme.palette.tint};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

const BackgroundItemOverlayVariants: Variants = {
    prev: {
        opacity: 0.7,
        zIndex: 9,
    },
    center: {
        opacity: 0,
        zIndex: 10,
    },
    next: {
        opacity: 0.7,
        zIndex: 9,
    },
};

const BackgroundItemOverlay: React.FC = () => {
    return <Overlay variants={BackgroundItemOverlayVariants} />;
};

export default BackgroundItemOverlay;
