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
    width: 160px;
    align-items: center;
`;

const StyledArrow = styled(Arrow)`
    height: 32px;
    margin: 1rem;
`;

const Description = styled.p`
    font-size: 1.25rem;
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
