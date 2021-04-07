import React from "react";
import styled from "styled-components";
// @ts-ignore
import AboutLeftBlob from "../../assets/svg/About_top_left.svg";
// @ts-ignore
import AboutRightBlob from "../../assets/svg/About_Projects_bottom_top_right.svg";
// @ts-ignore
import ProjectsLeftBlob from "../../assets/svg/Projects_left.svg";
// @ts-ignore
import SkillsRightBlob from "../../assets/svg/Skills_top_right.svg";
// @ts-ignore
import SkillsLeftBlob from "../../assets/svg/Skills_bottom_left.svg";
// @ts-ignore
import DjangoBubble from "../../assets/svg/Django_bubble.svg";
// @ts-ignore
import ExpressBubble from "../../assets/svg/Express_bubble.svg";
// @ts-ignore
import GatsbyBubble from "../../assets/svg/Gatsby_bubble.svg";
// @ts-ignore
import JSBubble from "../../assets/svg/JS_bubble.svg";
// @ts-ignore
import NodeBubble from "../../assets/svg/Node_bubble.svg";
// @ts-ignore
import ReactBubble from "../../assets/svg/React_bubble.svg";

const AboutLeftBlobStyled = styled(AboutLeftBlob)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 300px;
    height: 300px;
    height: calc(50 * var(--vh));

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 700px;
        height: 600px;
    }
`;

const AboutRightBlobStyled = styled(AboutRightBlob)`
    position: absolute;
    right: 0px;
    top: 100vh;
    top: calc(100 * var(--vh));
    transform: translateY(-50%);
    width: 50vw;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        height: 1500px;
    }
`;

const ProjectsLeftBlobStyled = styled(ProjectsLeftBlob)`
    position: absolute;
    left: 0px;
    top: 100vh;
    top: calc(100 * var(--vh));
    width: 100vw;
    height: auto;
`;

const SkillsRightBlobStyled = styled(SkillsRightBlob)`
    position: absolute;
    right: 0px;
    top: 200vh;
    top: calc(200 * var(--vh));
    transform: translateY(-55%);
    width: 200px;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 600px;
    }
`;

const SkillsLeftBlobStyled = styled(SkillsLeftBlob)`
    position: absolute;
    left: -100px;
    top: 300vh;
    top: calc(300 * var(--vh));
    transform: translateY(-65%);
    width: 400px;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 600px;
    }
`;

const DjangoBubbleStyled = styled(DjangoBubble)`
    position: absolute;
    right: 130px;
    top: 215vh;
    top: calc(215 * var(--vh));
    height: auto;
    width: 35px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        right: 215px;
        width: 70px;
    }
`;

const ExpressBubbleStyled = styled(ExpressBubble)`
    position: absolute;
    right: 70px;
    top: 220vh;
    top: calc(220 * var(--vh));
    height: auto;
    width: 45px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 90px;
        right: 350px;
    }
`;

const GatsbyBubbleStyled = styled(GatsbyBubble)`
    position: absolute;
    left: 10px;
    top: 260vh;
    top: calc(260 * var(--vh));
    height: auto;
    width: 70px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 140px;
        left: 100px;
    }
`;

const JSBubbleStyled = styled(JSBubble)`
    position: absolute;
    left: 50px;
    top: 250vh;
    top: calc(250 * var(--vh));
    height: auto;
    width: 40px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 80px;
        left: 200px;
    }
`;

const NodeBubbleStyled = styled(NodeBubble)`
    position: absolute;
    right: 20px;
    top: 230vh;
    top: calc(230 * var(--vh));
    width: 100px;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 200px;
        right: 180px;
    }
`;

const ReactBubbleStyled = styled(ReactBubble)`
    position: absolute;
    left: 200px;
    top: 270vh;
    top: calc(270 * var(--vh));
    width: 50px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 100px;
        left: 300px;
    }
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 400vh;
    height: calc(400 * var(--vh));
    z-index: -1;
    overflow: hidden;
`;

const Background: React.FC = () => {
    return (
        <Wrapper>
            <AboutLeftBlobStyled />
            <AboutRightBlobStyled />
            <ProjectsLeftBlobStyled />
            <SkillsRightBlobStyled />
            <SkillsLeftBlobStyled />
            <DjangoBubbleStyled />
            <ExpressBubbleStyled />
            <GatsbyBubbleStyled />
            <JSBubbleStyled />
            <NodeBubbleStyled />
            <ReactBubbleStyled />
        </Wrapper>
    );
};

export default Background;
