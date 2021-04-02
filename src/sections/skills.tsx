import React from "react";
import styled from "styled-components";
import { Title } from "../components/typography";
import { Section } from "../components/layout";

import NextSection from "../components/nextSection";
import SkillList from "../components/skillList";

const TitleWrapper = styled(Title)`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: space-around;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        justify-content: center;
    }
`;

const FrontendSkills = [
    "React",
    "Gatsby",
    "Framer Motion",
    "Styled Components",
    "Material UI",
];

const BackendSkills = [
    "Node",
    "Express",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Swagger",
];

const DevopsSkills = ["Docker", "AWS", "GitHub"];

const Skills: React.FC = () => {
    return (
        <Section id="skills">
            <TitleWrapper>Skills</TitleWrapper>
            <ContentWrapper>
                <LayoutWrapper>
                    <SkillList items={FrontendSkills} />
                </LayoutWrapper>
                <LayoutWrapper>
                    <SkillList items={BackendSkills} />
                </LayoutWrapper>
                <LayoutWrapper>
                    <SkillList items={DevopsSkills} />
                </LayoutWrapper>
            </ContentWrapper>
            <NextSection link="#contact" />
        </Section>
    );
};

export default Skills;
