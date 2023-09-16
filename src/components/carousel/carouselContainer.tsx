import React, { ReactNode } from "react";
import styled from "styled-components";
import { Orientation, RotationDirection } from "./types";

type CarouselContextProps = {
    itemsCount: number;
    orientation: Orientation;
    rotationDirection: RotationDirection;
};

export const CarouselContext = React.createContext<CarouselContextProps>({
    itemsCount: 5,
    orientation: "horizontal",
    rotationDirection: "backward",
});

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    padding: 1rem 0;
`;

interface CarouselContainerProps {
    orientation: Orientation;
    rotationDirection: RotationDirection;
    itemsCount: number;
    children: ReactNode;
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({
    children,
    orientation,
    rotationDirection,
    itemsCount,
}) => {
    return (
        <CarouselContext.Provider
            value={{ orientation, rotationDirection, itemsCount: itemsCount }}
        >
            <Container>{children}</Container>
        </CarouselContext.Provider>
    );
};

export default CarouselContainer;
