import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { CircleSpinner } from "react-spinners-kit";

const Wrapper = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
`;

const SpinnerWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

interface SuspenseOverlayProps {
    loading: boolean;
}

const SuspenseOverlay: React.FC<SuspenseOverlayProps> = ({
    children,
    loading,
    ...rest
}) => {
    const theme = useContext(ThemeContext);

    return (
        <Wrapper {...rest}>
            {children}
            <SpinnerWrapper>
                <CircleSpinner
                    size={1.5}
                    sizeUnit={"rem"}
                    loading={loading}
                    color={theme.palette.fontSecondary}
                />
            </SpinnerWrapper>
        </Wrapper>
    );
};

export default SuspenseOverlay;
