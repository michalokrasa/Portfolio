import { HTMLMotionProps, motion, Variants } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { MenuItem } from ".";

export const StyledMenu = styled(motion.nav).attrs((props) => ({
    ...props,
}))`
    display: flex;
    z-index: 1001;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.palette.secondary};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.palette.fontRegular};
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: ${({ theme }) => theme.palette.primary};
        }
    }
`;

const SideMenuVariants: Variants = {
    hidden: {
        x: "100%",
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        x: "100%",
        transition: {
            duration: 0.3,
        },
    },
};

interface SideMenuProps extends HTMLMotionProps<"nav"> {
    items: MenuItem[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ id, items, setOpen }) => {
    return (
        <StyledMenu
            id={id}
            variants={SideMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {items.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                >
                    {item.name}
                </a>
            ))}
        </StyledMenu>
    );
};
export default SideMenu;
