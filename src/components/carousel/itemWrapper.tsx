import { motion, Variants } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { Orientation, PositionName, RotationDirection } from "./types";

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
        y: "-55%",
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
}
const StyledItemWrapper = styled(motion.div)<CarouselItemProps>`
    position: absolute;
    left: 50%;
    top: 50%;

    ${(props) =>
        (props.$orientation === "vertical" &&
            css`
                width: 100%;
            `) ||
        (props.$orientation === "horizontal" &&
            css`
                width: auto;
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
    orientation: Orientation;
    key: React.Key;
    rotationDirection: RotationDirection;
    positionIdx: number;
    itemsCount: number;
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({
    children,
    orientation,
    positionIdx,
    rotationDirection,
    itemsCount,
    key,
}) => {
    return (
        <StyledItemWrapper
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
            key={key}
        >
            {children}
        </StyledItemWrapper>
    );
};

export default ItemWrapper;
