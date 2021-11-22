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

const AboutLeftBlobStyled = styled(AboutLeftBlob)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 300px;
    height: calc(0.5 * var(--section-height));

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 700px;
        height: 600px;
    }
`;

const AboutRightBlobStyled = styled(AboutRightBlob)`
    position: absolute;
    right: 0px;
    top: var(--section-height);
    transform: translateY(-50%);
    width: 30vw;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        height: 1500px;
    }
`;

const ProjectsLeftBlobStyled = styled(ProjectsLeftBlob)`
    position: absolute;
    left: 0px;
    top: var(--section-height);
    width: 100vw;
    height: auto;
`;

const SkillsRightBlobStyled = styled(SkillsRightBlob)`
    position: absolute;
    right: 0px;
    top: calc(2 * var(--section-height));
    transform: translateY(-55%);
    width: 30vw;
    height: auto;
`;

const SkillsLeftBlobStyled = styled(SkillsLeftBlob)`
    position: absolute;
    left: -10vw;
    top: calc(3 *var(--section-height));
    transform: translateY(-65%);
    height: auto;
    width: 70vw;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 50vw;
    }
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: calc(4 * var(--section-height));
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
        </Wrapper>
    );
};

export default Background;
