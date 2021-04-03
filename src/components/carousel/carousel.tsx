import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";

// nuber of items animated
const ACTIVE_ITEMS = 5;

interface CarouselItemProps {
    $orientation: "vertical" | "horizontal";
}

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
`;

const BackgroundItemOverlay = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: #a7a7a7;
    border-radius: ${({ theme }) => theme.borderRadius};
`;

const ItemWrapper = styled(motion.div)<CarouselItemProps>`
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

const getPosition = (position: number) => {
    switch (position) {
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

const getPrevPosition = (position: number, rotationDirection: boolean) =>
    getPosition((position + (rotationDirection ? -1 : 1)) % ACTIVE_ITEMS);

const getInitialState = (itemsCount: number) => {
    const activeItems: ActiveItem[] = [];

    for (let i = -2; i < 3; i++) {
        activeItems.push({
            index: (itemsCount + i) % itemsCount,
            id: uuidv4(),
        });
    }

    return activeItems;
};

const rotateForward = (activeItems: ActiveItem[], itemsCount: number) =>
    activeItems.map((item, idx, arr) => ({
        index: (item.index + 1) % itemsCount,
        id: idx === ACTIVE_ITEMS - 1 ? uuidv4() : arr[idx + 1].id,
    }));

const rotateBackward = (activeItems: ActiveItem[], itemsCount: number) =>
    activeItems.map((item, idx, arr) => ({
        index: (item.index - 1 + itemsCount) % itemsCount,
        id: idx === 0 ? uuidv4() : arr[idx - 1].id,
    }));

interface ActiveItem {
    index: number;
    id: string;
}

interface CarouselProps {
    items: JSX.Element[];
    orientation?: "vertical" | "horizontal";
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    orientation = "horizontal",
}) => {
    // the indices of active items
    const [activeItems, setActiveItems] = useState(
        getInitialState(items.length)
    );
    // the rotation direction true if forward, false if backward
    const [rotation, setRotation] = useState(false);

    return (
        <CarouselContainer>
            <ItemWrapper
                $orientation={orientation}
                key={activeItems[0].id}
                variants={
                    orientation === "horizontal"
                        ? CardHorizontalVariants
                        : CardVerticalVariants
                }
                initial={getPrevPosition(0, rotation)}
                animate="exitPrev"
            >
                {items[activeItems[0].index]}
            </ItemWrapper>
            <ItemWrapper
                $orientation={orientation}
                key={activeItems[1].id}
                variants={
                    orientation === "horizontal"
                        ? CardHorizontalVariants
                        : CardVerticalVariants
                }
                initial={getPrevPosition(1, rotation)}
                animate="prev"
                onClick={() => {
                    setRotation(false);
                    setActiveItems(rotateBackward(activeItems, items.length));
                }}
            >
                <BackgroundItemOverlay
                    variants={BackgroundItemOverlayVariants}
                />
                {items[activeItems[1].index]}
            </ItemWrapper>
            <ItemWrapper
                $orientation={orientation}
                key={activeItems[2].id}
                variants={
                    orientation === "horizontal"
                        ? CardHorizontalVariants
                        : CardVerticalVariants
                }
                initial={getPrevPosition(2, rotation)}
                animate="center"
            >
                {items[activeItems[2].index]}
            </ItemWrapper>
            <ItemWrapper
                $orientation={orientation}
                key={activeItems[3].id}
                variants={
                    orientation === "horizontal"
                        ? CardHorizontalVariants
                        : CardVerticalVariants
                }
                initial={getPrevPosition(3, rotation)}
                animate="next"
                onClick={() => {
                    setRotation(true);
                    setActiveItems(rotateForward(activeItems, items.length));
                }}
            >
                <BackgroundItemOverlay
                    variants={BackgroundItemOverlayVariants}
                />
                {items[activeItems[3].index]}
            </ItemWrapper>
            <ItemWrapper
                $orientation={orientation}
                key={activeItems[4].id}
                variants={
                    orientation === "horizontal"
                        ? CardHorizontalVariants
                        : CardVerticalVariants
                }
                initial={getPrevPosition(4, rotation)}
                animate="exitNext"
            >
                {items[activeItems[4].index]}
            </ItemWrapper>
        </CarouselContainer>
    );
};

export default Carousel;
