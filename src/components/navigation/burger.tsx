import React from "react";
import styled from "styled-components";

export const StyledBurger = styled.button<{ open: boolean }>`
    position: fixed;
    z-index: 1002;
    top: 3rem;
    right: 2rem;
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
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) =>
                open ? "translateX(20px)" : "translateX(0)"};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

interface BurgerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
    return (
        <StyledBurger
            aria-label="Toggle menu"
            aria-expanded={open}
            open={open}
            onClick={() => setOpen(!open)}
        >
            <span />
            <span />
            <span />
        </StyledBurger>
    );
};

export default Burger;
