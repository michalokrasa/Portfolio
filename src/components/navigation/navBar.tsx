import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const BurgerWrapper = styled(motion.div).attrs((props) => ({
    ...props,
}))`
    box-shadow: none;
    border-radius: 2rem;
    position: fixed;
    z-index: 1002;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.7rem;
    display: flex;
    align-items: center;

    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
        top: 3rem;
        right: 3rem;
    }
`;


const NavBar: React.FC<HTMLMotionProps<"div">> = ({ children }) => {
    return <BurgerWrapper>{children}</BurgerWrapper>;
};

export default NavBar;
