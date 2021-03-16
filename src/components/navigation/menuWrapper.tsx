import styled from "styled-components";
import React from "react";
import { motion, Variants } from "framer-motion";

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    z-index: 1000;
`;

const Background = styled(motion.div).attrs((props) => ({ ...props }))`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: ${({ theme }) => theme.palette.fontRegular};
`;

const WrapperVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 0.7,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

interface WrapperProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuWrapper: React.FC<WrapperProps> = ({ children, setOpen }) => {
    return (
        <Container>
            <Background
                variants={WrapperVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setOpen(false)}
            />
            {children}
        </Container>
    );
};

export default MenuWrapper;
