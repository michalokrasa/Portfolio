import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useEscapePressEffect from "../../hooks/escapePressEffect";
import Backdrop from "../backdrop";
import BackgroundItemOverlay from "./backgroundItemOverlay";
import CarouselContainer from "./carouselContainer";
import ItemWrapper from "./itemWrapper";
import { Orientation, RotationDirection } from "./types";
// @ts-ignore
import CloseIcon from "../../assets/svg/close.svg";
// @ts-ignore
import ChevronLeftIcon from "../../assets/svg/chevron_left.svg";
// @ts-ignore
import ChevronRightIcon from "../../assets/svg/chevron_right.svg";

// nuber of items animated
const ITEMS_COUNT = 5;

const ChevronLeftIconStyled = styled(ChevronLeftIcon)`
    position: absolute;
    z-index: 9;
    opacity: 0.4;
    transform: translate(-50%, 0) rotate(0.25turn);
    top: 10%;
    left: 50%;
    width: 20%;
    height: 20%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        transform: translate(0, -50%);
        top: 50%;
        left: 10%;
    }
`;

const ChevronRightIconStyled = styled(ChevronRightIcon)`
    position: absolute;
    z-index: 9;
    opacity: 0.4;
    transform: translate(50%, 0) rotate(0.25turn);
    bottom: 10%;
    right: 50%;
    width: 20%;
    height: 20%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        transform: translate(0, 50%);
        bottom: 50%;
        right: 10%;
    }
`;

const CloseIconStyled = styled(CloseIcon)`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 2rem;
    right: 1rem;
    z-index: 2000;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        top: 1rem;
        width: 4rem;
        height: 4rem;
    }
`;

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
        id: idx === ITEMS_COUNT - 1 ? uuidv4() : arr[idx + 1].id,
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
    orientation?: Orientation;
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    orientation = "horizontal",
}) => {
    // the indices of active items
    const [activeItems, setActiveItems] = useState(
        getInitialState(items.length)
    );
    const [isOpen, setOpen] = useState(false);

    const [
        rotationDirection,
        setRotationDirection,
    ] = useState<RotationDirection>("backward");

    const rotationHandle = useCallback(
        (direction: RotationDirection) => {
            setRotationDirection(direction);

            if (direction === "forward") {
                setActiveItems(rotateForward(activeItems, items.length));
            } else {
                setActiveItems(rotateBackward(activeItems, items.length));
            }
        },
        [activeItems, items.length]
    );

    useEscapePressEffect(() => setOpen(false));

    return (
        <CarouselContainer
            orientation={orientation}
            rotationDirection={rotationDirection}
            itemsCount={ITEMS_COUNT}
        >
            <ItemWrapper
                positionIdx={0}
                key={activeItems[0].id}
                rotationHandle={rotationHandle}
            >
                {items[activeItems[0].index]}
            </ItemWrapper>
            <ItemWrapper
                positionIdx={1}
                key={activeItems[1].id}
                onClick={() => {
                    setOpen(false);
                    setRotationDirection("backward");
                    setActiveItems(rotateBackward(activeItems, items.length));
                }}
                rotationHandle={rotationHandle}
            >
                <ChevronLeftIconStyled />
                <BackgroundItemOverlay />
                {items[activeItems[1].index]}
            </ItemWrapper>
            <ItemWrapper
                positionIdx={2}
                key={activeItems[2].id}
                isOpen={isOpen}
                onClick={() => setOpen(true)}
                rotationHandle={rotationHandle}
            >
                <Backdrop
                    isVisible={isOpen}
                    modalZ={2000}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
                {React.cloneElement(items[activeItems[2].index], { isOpen })}
            </ItemWrapper>
            <ItemWrapper
                positionIdx={3}
                key={activeItems[3].id}
                onClick={() => {
                    setOpen(false);
                    setRotationDirection("forward");
                    setActiveItems(rotateForward(activeItems, items.length));
                }}
                rotationHandle={rotationHandle}
            >
                <ChevronRightIconStyled />
                <BackgroundItemOverlay />
                {items[activeItems[3].index]}
            </ItemWrapper>
            <ItemWrapper
                positionIdx={4}
                key={activeItems[4].id}
                rotationHandle={rotationHandle}
            >
                {items[activeItems[4].index]}
            </ItemWrapper>
            {isOpen && <CloseIconStyled onClick={() => setOpen(false)} />}
        </CarouselContainer>
    );
};

export default Carousel;
