import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BackgroundItemOverlay from "./backgroundItemOverlay";
import CarouselContainer from "./carouselContainer";
import ItemWrapper from "./itemWrapper";
import { Orientation, RotationDirection } from "./types";

// nuber of items animated
const ITEMS_COUNT = 5;

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

    return (
        <CarouselContainer
            orientation={orientation}
            rotationDirection={rotationDirection}
            itemsCount={ITEMS_COUNT}
        >
            <ItemWrapper positionIdx={0} key={activeItems[0].id}>
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
            >
                <BackgroundItemOverlay />
                {items[activeItems[1].index]}
            </ItemWrapper>
            <ItemWrapper
                positionIdx={2}
                key={activeItems[2].id}
                isOpen={isOpen}
                onClick={() => setOpen(!isOpen)}
            >
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
            >
                <BackgroundItemOverlay />
                {items[activeItems[3].index]}
            </ItemWrapper>
            <ItemWrapper positionIdx={4} key={activeItems[4].id}>
                {items[activeItems[4].index]}
            </ItemWrapper>
        </CarouselContainer>
    );
};

export default Carousel;
