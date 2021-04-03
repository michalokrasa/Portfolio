import { motion, Variants } from "framer-motion";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Orientation, PositionName, RotationDirection } from "./types";
import { CarouselContext } from "./carouselContainer";

const CardHorizontalVariants: Variants = {
    exitPrev: {
        x: "-150%",
        y: "-50%",
        opacity: 0,
        zIndex: -10,
    },
    prev: {
        x: "-105%",
        y: "-50%",
        opacity: 0.8,
        zIndex: 8,
    },
    center: {
        x: "-50%",
        y: "-50%",
        opacity: 1,
        zIndex: 10,
    },
    next: {
        x: "5%",
        y: "-50%",
        opacity: 0.8,
        zIndex: 8,
    },
    exitNext: {
        x: "50%",
        y: "-50%",
        opacity: 0,
        zIndex: -10,
    },
};

const CardVerticalVariants: Variants = {
    exitPrev: {
        x: "-50%",
        y: "-150%",
        opacity: 0,
        zIndex: -10,
    },
    prev: {
        x: "-50%",
        y: "-100%",
        opacity: 1,
        zIndex: 8,
    },
    center: {
        x: "-50%",
        y: "-50%",
        opacity: 1,
        zIndex: 10,
    },
    next: {
        x: "-50%",
        y: "0%",
        opacity: 1,
        zIndex: 8,
    },
    exitNext: {
        x: "-50%",
        y: "50%",
        opacity: 0,
        zIndex: -10,
    },
};

interface CarouselItemProps {
    $orientation: Orientation;
    $isOpen: boolean;
}
const StyledItemWrapper = styled(motion.div)<CarouselItemProps>`
    position: absolute;
    left: 50%;
    top: 50%;
    height: ${({ $isOpen }) => ($isOpen ? "100%" : "auto")};
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.palette.fontSecondary};
        border-radius: 4px;
    }

    ${(props) =>
        (props.$orientation === "vertical" &&
            css`
                width: 100%;
            `) ||
        (props.$orientation === "horizontal" &&
            css`
                width: ${props.$isOpen ? "80%" : "auto"};
            `)}
`;

const getPositionName = (positionIdx: number): PositionName => {
    switch (positionIdx) {
        case 0:
            return "exitPrev";
        case 1:
            return "prev";
        case 2:
            return "center";
        case 3:
            return "next";
        case 4:
            return "exitNext";
    }
};

const getPrevPosition = (
    positionIdx: number,
    rotationDirection: RotationDirection,
    itemsCount: number
): PositionName =>
    getPositionName(
        (positionIdx + (rotationDirection === "forward" ? -1 : 1)) % itemsCount
    );

interface ItemWrapperProps {
    positionIdx: number;
    isOpen?: boolean;
    key: React.Key;
    onClick?: () => void;
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({
    children,
    positionIdx,
    isOpen,
    key,
    onClick,
}) => {
    const { orientation, rotationDirection, itemsCount } = useContext(
        CarouselContext
    );

    return (
        <StyledItemWrapper
            $isOpen={isOpen}
            $orientation={orientation}
            variants={
                orientation === "horizontal"
                    ? CardHorizontalVariants
                    : CardVerticalVariants
            }
            initial={getPrevPosition(
                positionIdx,
                rotationDirection,
                itemsCount
            )}
            animate={getPositionName(positionIdx)}
            onClick={onClick}
            key={key}
        >
            {children}
        </StyledItemWrapper>
    );
};

export default ItemWrapper;