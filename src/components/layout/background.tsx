import React from "react";
import styled from "styled-components";
// @ts-ignore
import AboutLeftBlob from "../../assets/svg/About_top_left.svg";
// @ts-ignore
import AboutRightBlob from "../../assets/svg/About_Projects_bottom_top_right.svg";
// @ts-ignore
import ProjectsLeftBlob from "../../assets/svg/Projects_left.svg";
// @ts-ignore
import SkillsRightBlob from "../../assets/svg/Skills_Projects_top_right.svg";
// @ts-ignore
import SkillsLeftBlob from "../../assets/svg/Skills_Contact_bottom_left.svg";
// @ts-ignore
import ProfilesRightBlob from "../../assets/svg/Profiles_bottom_right.svg";

const AboutLeftBlobStyled = styled(AboutLeftBlob)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: auto;
    height: calc(50 * var(--vh));;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: auto;
        height: 50vw;
    }
`;

const AboutRightBlobStyled = styled(AboutRightBlob)`
    position: absolute;
    right: 0px;
    top: calc(100 * var(--vh));;
    transform: translateY(-50%);
    width: 50vw;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 30vw;
        height: auto;
    }
`;

const ProjectsLeftBlobStyled = styled(ProjectsLeftBlob)`
    position: absolute;
    left: 0px;
    top: calc(100 * var(--vh));;
    width: 90vw;
    height: auto;
`;

const SkillsRightBlobStyled = styled(SkillsRightBlob)`
    position: absolute;
    right: 0px;
    top: calc(200 * var(--vh));;
    transform: translateY(-40%);
    width: 30vw;
    height: auto;
`;

const SkillsLeftBlobStyled = styled(SkillsLeftBlob)`
    position: absolute;
    left: -20px;
    top: calc(300 * var(--vh));;
    transform: translateY(-70%);
    width: 30vw;
    height: auto;
`;

const ProfilesRightBlobStyled = styled(ProfilesRightBlob)`
    position: absolute;
    right: 10vw;
    top: calc(350 * var(--vh));;
    width: 20vw;
    height: auto;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: calc(400 * var(--vh));;
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
            <ProfilesRightBlobStyled />
        </Wrapper>
    );
};

export default Background;
