import { motion, Variants } from "framer-motion";
import React, { ReactNode, useContext, useRef } from "react";
import styled, { css } from "styled-components";
import { Orientation, PositionName, RotationDirection } from "./types";
import { CarouselContext } from "./carouselContainer";
// @ts-ignore
import ChevronLeftIcon from "../../assets/svg/chevron_left.svg";
// @ts-ignore
import ChevronRightIcon from "../../assets/svg/chevron_right.svg";

const CardHorizontalVariants: Variants = {
    exitPrev: {
        x: "-150%",
        y: "-50%",
        opacity: 0,
        zIndex: -10,
        transition: {
            duration: 0,
        },
    },
    prev: {
        x: "-100%",
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
        x: "0%",
        y: "-50%",
        opacity: 0.8,
        zIndex: 8,
    },
    exitNext: {
        x: "50%",
        y: "-50%",
        opacity: 0,
        zIndex: -10,
        transition: {
            duration: 0,
        },
    },
};

const CardVerticalVariants: Variants = {
    exitPrev: {
        x: "-50%",
        y: "-150%",
        opacity: 0,
        zIndex: -10,
        transition: {
            delay: 0,
        },
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
        transition: {
            delay: 0,
        },
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
    display: flex;
    align-items: center;

    ${(props) =>
        (props.$orientation === "vertical" &&
            props.$isOpen &&
            css`
                width: 100%;
                height: calc(100% - 2rem);
                position: fixed;
                z-index: 2000 !important;
                margin: 0;

                @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
                    width: 80%;
                }
            `) ||
        (props.$orientation === "vertical" &&
            !props.$isOpen &&
            css`
                width: 100%;

                &:hover {
                    cursor: pointer;
                }
            `) ||
        (props.$orientation === "horizontal" &&
            props.$isOpen &&
            css`
                width: 66%;
                height: calc(100% - 2rem);
                position: fixed;
                z-index: 2000 !important;
                margin: 0;
            `) ||
        (props.$orientation === "horizontal" &&
            !props.$isOpen &&
            css`
                width: auto;
                height: 80%;

                &:hover {
                    cursor: pointer;
                }
            `)}
`;

const ChevronLeftStyled = styled(ChevronLeftIcon)`
    width: 4rem;
    height: 4rem;
    display: none;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: block;
    }
`;

const ChevronRightStyled = styled(ChevronRightIcon)`
    width: 4rem;
    height: 4rem;
    display: none;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: block;
    }
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
        default:
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
    onClick?: () => void;
    rotationHandle: (direction: RotationDirection) => void;
    children: ReactNode;
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({
    children,
    positionIdx,
    isOpen,
    onClick,
    rotationHandle,
}) => {
    const { orientation, rotationDirection, itemsCount } = useContext(
        CarouselContext
    );
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <StyledItemWrapper
                ref={containerRef}
                $isOpen={!!isOpen}
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
                // key={key}
            >
                {isOpen && (
                    <ChevronLeftStyled
                        onClick={() => rotationHandle("backward")}
                    />
                )}
                {children}
                {isOpen && (
                    <ChevronRightStyled
                        onClick={() => rotationHandle("forward")}
                    />
                )}
            </StyledItemWrapper>
        </>
    );
};

export default ItemWrapper;
