import React from "react";
import styled from "styled-components";
//@ts-ignore
import Arrow from "../assets/down-arrow.svg";

interface Props {
    /** link to the section this element refers */
    link: string;
    /** text to be displayed above the arrow */
    text?: string;
}

const Wrapper = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;

    font-size: 0.6875rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.5rem;
    }
`;

const StyledArrow = styled(Arrow)`
    height: 1.5em;
    margin: 1em;
`;

const NextSection: React.FC<Props> = ({ link, text }) => {
    return (
        <Wrapper>
            <p>{text}</p>
            <a href={link}>
                <StyledArrow />
            </a>
        </Wrapper>
    );
};

export default NextSection;
