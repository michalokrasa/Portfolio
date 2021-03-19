import { motion, Variants } from "framer-motion";
import React from "react";
import styled from "styled-components";

const StyledBurger = styled(motion.button).attrs((props) => ({
    ...props,
}))<{ open: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    &:focus {
        outline: none;
    }

    span {
        width: 2rem;
        height: 0.25rem;
        background: ${({ theme }) => theme.palette.fontSecondary};
        border-radius: 10px;
        position: relative;
        transform-origin: center;
    }
`;

interface BurgerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpanVariants: Variants = {
    closed: {
        translateX: 0,
        translateY: "0rem",
        opacity: 1,
    },
    openTopSpan: {
        rotate: 45,
        translateY: "0.666rem",
    },
    openInsideSpan: {
        translateX: 20,
        opacity: 0,
    },
    openBottomSpan: {
        rotate: -45,
        translateY: "-0.666rem",
    },
};

const StyledBurgerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
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

const BurgerButton: React.FC<BurgerProps> = ({ open, setOpen }) => {
    return (
        <StyledBurger
            layout
            aria-label="Toggle menu"
            aria-expanded={open}
            open={open}
            onClick={() => setOpen(!open)}
            variants={StyledBurgerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.span
                variants={SpanVariants}
                initial={"closed"}
                animate={open ? "openTopSpan" : "closed"}
            />
            <motion.span
                variants={SpanVariants}
                initial={"closed"}
                animate={open ? "openInsideSpan" : "closed"}
            />
            <motion.span
                variants={SpanVariants}
                initial={"closed"}
                animate={open ? "openBottomSpan" : "closed"}
            />
        </StyledBurger>
    );
};

export default BurgerButton;
